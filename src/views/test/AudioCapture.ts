import WorkletProcessor from './workletProcessor?url'
export default class AudioCapture {
  private audioCtx?: AudioContext
  private source?: MediaStreamAudioSourceNode
  private processor?: AudioWorkletNode
  private mediaStream?: MediaStream
  private sendFun?: (data: Blob) => void
  constructor(sendFun: (data: Blob) => void) {
    this.sendFun = sendFun
  }
  async start() {
    console.log('开始监听音频')
    // 采样率锁定 16000
    this.audioCtx = new AudioContext({ sampleRate: 16000 })
    await this.audioCtx.audioWorklet.addModule(WorkletProcessor)
    this.processor = new AudioWorkletNode(this.audioCtx, 'pcm-capture')

    this.processor.port.onmessage = (e) => {
      console.log(e.data)
      const pcm16 = e.data // Int16Array
      const header = new ArrayBuffer(4)
      new DataView(header).setUint32(0, pcm16.length, false)
      // ws.send(new Blob([header, pcm16]));
      console.log('onmessage', new Blob([header, pcm16]))
      this.sendFun!(new Blob([header, pcm16]))
    }

    // 1. 获取麦克风
    this.mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true
    })
    this.source = this.audioCtx.createMediaStreamSource(this.mediaStream)
    this.source.connect(this.processor)
    // 本地监听（可选）
    this.processor.connect(this.audioCtx.destination)
  }
  stop() {
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
    return true
  }
}
