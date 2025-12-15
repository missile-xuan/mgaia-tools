// 注册处理器
registerProcessor('pcm-capture', class extends AudioWorkletProcessor {
  bufferSize: number;
  buffer: Int16Array;
  head: number;
  constructor() {
    super();
    this.bufferSize = 512;          // 细缓冲区
    this.buffer = new Int16Array(this.bufferSize);
    this.head = 0;
  }

  process(inputs: Float32Array[][],
    outputs: Float32Array[][],
    parameters: Record<string, Float32Array>) {
    const input = inputs[0];          // 第一路输入
    if (input && input[0]) {
      const src = input[0];           // Float32 [-1,1]
      for (let i = 0; i < src.length; i++) {
        this.buffer[this.head++] = src[i] * 0x7FFF; // → 16 bit
        if (this.head === this.bufferSize) {
          // 满帧 → 发给主线程
          this.port.postMessage(this.buffer.slice()); // 复制出去
          this.head = 0;
        }
      }
    }
    return true; // 保持活跃
  }
});
