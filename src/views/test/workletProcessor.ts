// 注册处理器
interface AudioProcessorParams {
  sampleRate: number;
  bufferSize: number;
}
registerProcessor('pcm-capture', class extends AudioWorkletProcessor {

  private pcmBuffer: Int16Array = new Int16Array(0);
  private params: AudioProcessorParams;

  constructor() {
    super();
    this.params = {
      sampleRate: 16000, // 采样率
      bufferSize: 480 // 缓冲区大小 480 帧缓冲（约 30ms @16kHz）平衡延迟与性能
    };
  }

  process(inputs: Float32Array[][],
    outputs: Float32Array[][],
    parameters: Record<string, Float32Array>) {

    const input = inputs[0]?.[0] || new Float32Array(0);
    const newPcm = this.#normalizeTo16Bit(input);

    // 环形缓冲区管理
    this.pcmBuffer = this.#appendBuffer(this.pcmBuffer, newPcm);

    // 每 buffer_size 帧发送一次数据
    if (this.pcmBuffer.length >= this.params.bufferSize) {
      const chunk = this.pcmBuffer.slice(0, this.params.bufferSize);
      this.pcmBuffer = this.pcmBuffer.slice(this.params.bufferSize);
      this.port.postMessage({ type: 'pcm-data', buffer: chunk }, [chunk.buffer]);
    }

    return true;
  }

  /**
   * 将输入的 Float32Array 转换为 Int16Array
   * @param input 输入的 Float32Array
   * @returns 转换后的 Int16Array
   */
  #normalizeTo16Bit(input: Float32Array): Int16Array {
    const output = new Int16Array(input.length);
    for (let i = 0; i < input.length; i++) {
      output[i] = Math.max(-32768, Math.min(32767, input[i] * 32767));
    }
    return output;
  }

  /**
   * 追加数据到缓冲区
   * @param buffer 缓冲区
   * @param newData 新数据
   * @returns 追加后的缓冲区
   */
  #appendBuffer(buffer: Int16Array, newData: Int16Array): Int16Array {
    const result = new Int16Array(buffer.length + newData.length);
    result.set(buffer);
    result.set(newData, buffer.length);
    return result;
  }
});
