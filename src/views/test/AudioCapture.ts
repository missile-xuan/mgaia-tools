import WorkletProcessor from './workletProcessor?url'
export default class AudioCapture {
  private audioCtx?: AudioContext
  private source?: MediaStreamAudioSourceNode
  private processor?: AudioWorkletNode
  private mediaStream?: MediaStream
  private sendFun?: (data: Blob) => void
  private pcmChunks: Int16Array[] = []
  private wavBuffer?: Uint8Array<ArrayBuffer>
  private isRecording: boolean = false
  constructor(sendFun: (data: Blob) => void) {
    this.sendFun = sendFun


    this.initStream()
  }

  /**
   * 初始化音频源
   */
  async initStream() {
    // 在做任何其他操作之前，你需要创建一个AudioContext对象，因为所有事情都是在上下文中发生的。建议创建一个AudioContext对象并复用它，而不是每次初始化一个新的AudioContext对象，并且可以对多个不同的音频源和管道同时使用一个AudioContext对象。
    // 采样率锁定 16000
    this.audioCtx = new AudioContext({ sampleRate: 16000 })
    // 添加音频处理方法
    await this.audioCtx!.audioWorklet.addModule(WorkletProcessor)
    this.processor = new AudioWorkletNode(this.audioCtx!, 'pcm-capture')
    // 1. 获取麦克风
    this.mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true
    })
    this.source = this.audioCtx!.createMediaStreamSource(this.mediaStream)
    this.source.connect(this.processor!)
    // 本地监听（可选）
    this.processor!.connect(this.audioCtx!.destination)

  }

  async start() {
    if (this.isRecording) return;
     // 恢复音频上下文
    await this.audioCtx!.resume();
    this.source!.connect(this.processor!);
    this.processor!.connect(this.audioCtx!.destination);
    this.isRecording = true;

    console.log('开始监听音频')
    this.wavBuffer = new Uint8Array(0)
    this.pcmChunks = []
    this.processor!.port.onmessage = (e) => {
      if (e.data.type === 'pcm-data') {
        this.pcmChunks.push(e.data.buffer);
      }
    }
  }

  // 停止监听 返回整体wav blob
  stop() {
    if (!this.isRecording || !this.source) return new Blob();

    // 断开音频链路（保留节点）
    this.source.disconnect(this.processor!);
    this.processor!.disconnect(this.audioCtx!.destination);

    // 暂停音频上下文（避免后台耗电）
    this.audioCtx!.suspend().catch(console.error);

    // 清空缓冲区
    this.processor!.port.postMessage({ command: 'flush' });
    this.isRecording = false;


    const blob = this.#generateWav()
    return blob
  }
  destroy() {
    // ① 停麦克风轨道（释放硬件）
    this.mediaStream?.getTracks().forEach((t) => t.stop())
    this.mediaStream = undefined

    // ② 断开节点
    this.source?.disconnect()
    this.processor?.disconnect()
    this.source = undefined
    this.processor = undefined

    // ③ 关闭 AudioContext（释放线程+内存）
    this.audioCtx?.close().catch(() => {})
    this.audioCtx = undefined
    this.sendFun = undefined

    console.log('音频监听已停止')
  }

  #generateWav(): Blob{
    // 计算数据大小
    const dataSize = this.pcmChunks.reduce((acc, cur) => acc + cur.byteLength, 0)
    const header = this.#generateWavHeader({
      sampleRate: 16000,
      numChannels: 1,
      bitsPerSample: 16,
      dataSize
    })
    // 合并 PCM 数据
    const pcmBuffer = new Uint8Array(header.byteLength + dataSize);
    pcmBuffer.set(new Uint8Array(header));
    let offset = header.byteLength;

    this.pcmChunks.forEach(chunk => {
      pcmBuffer.set(new Uint8Array(chunk.buffer), offset);
      offset += chunk.byteLength;
    });

    return new Blob([pcmBuffer], { type: 'audio/wav' });
  }
  /**
   * 生成wav文件头
   * @param sampleRate 采样率
   * @param numChannels 声道数
   * @param bitsPerSample 位数
   * @param dataSize 数据大小
   * @returns wav文件头
   */
  #generateWavHeader(params:{sampleRate:number, numChannels:number, bitsPerSample:number, dataSize:number}) {
    const { sampleRate, numChannels, bitsPerSample, dataSize } = params
    const header = new ArrayBuffer(44) // 标准 44 字节头
    const view = new DataView(header)

    // RIFF 块
    this.#writeString(view, 0, 'RIFF')
    view.setUint32(4, 36 + dataSize, true) // 文件总大小 - 8
    this.#writeString(view, 8, 'WAVE')

    // fmt 块
    this.#writeString(view, 12, 'fmt ')
    view.setUint32(16, 16, true) // fmt 块长度
    view.setUint16(20, 1, true) // PCM 编码
    view.setUint16(22, numChannels, true)
    view.setUint32(24, sampleRate, true)
    view.setUint32(28, (sampleRate * numChannels * bitsPerSample) / 8, true)
    view.setUint16(32, (numChannels * bitsPerSample) / 8, true)
    view.setUint16(34, bitsPerSample, true)

    // data 块
    this.#writeString(view, 36, 'data')
    view.setUint32(40, dataSize, true)

    return header
  }
  /**
   * 写入字符串
   * @param view
   * @param offset
   * @param str
   */
  #writeString(view:DataView<ArrayBuffer> , offset: number, str:string) {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i))
    }
  }
}
