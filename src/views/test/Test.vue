<script setup lang="ts">
import { ref, reactive, onUnmounted } from 'vue'
import AudioCapture from './AudioCapture'

import { io, Socket } from 'socket.io-client'
// 解码为字符串
const decoder = new TextDecoder('utf-8');
// 测试socket.io
const socket = io('http://172.30.12.13:3000/speechrecognition')
const text = ref('')
let connectId = ''
let seq = 0
const audioCapture = new AudioCapture((data: Int16Array<ArrayBuffer>) => {
    seq++
    if (seq === 2) {
      const header = audioCapture.getWavBufferHeader()
      const pushData = new Int16Array(header.byteLength + data.length);
      pushData.set(header)
      pushData.set(data, header.byteLength)
      data = pushData
    }
    const req = { connectId, payload: data, seq ,isLast: false }

    socket.emit('pushPcmBuff', req)
    console.log('send', req);

  })

const speaking = ref(false)
async function speak() {
  socket.emit('open', {})
  text.value = ''
}

socket.on('open', function (data) {
  console.log('open', data)
  connectId = data.connectId
  seq = 1
  audioCapture.start()

})
socket.on('message', function (data) {

  console.log('message', data)
  const payload = JSON.parse(decoder.decode(data.payload))
  console.log('payload', payload);
  if (payload.result?.text) {
    text.value = payload.result.text
  }


})

function stop() {
  speaking.value = false
  if (!audioCapture) return
  const blob = audioCapture.stop()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'recording.wav'
  console.log('结束说话')
  a.click()
}

function destroy(){
  audioCapture.destroy()
}





</script>

<template>
  <div class="global-c-main-content">
    语音识别
    <el-button type="primary" @mousedown="speak" @mouseup="stop">说话</el-button>
    <el-button type="primary" @click="destroy">x销毁</el-button>

    <div>{{ text }}</div>
  </div>
</template>

<style scoped lang="scss"></style>
