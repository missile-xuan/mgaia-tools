<script setup lang="ts">
import { ref, reactive, onUnmounted } from 'vue'
import AudioCapture from './AudioCapture'

import { io, Socket } from 'socket.io-client'
// 解码为字符串
const decoder = new TextDecoder('utf-8');
// 测试socket.io
const socket = io('http://172.30.12.13:3000/speechrecognition')

const audioCapture = new AudioCapture((data: Blob) => {
    console.log('send', data)
  })

const speaking = ref(false)
async function speak() {
  socket.emit('open', {})
  setTimeout(() => {
    audioCapture.start()
  }, 200)

}

socket.on('open', function (data) {
  console.log('open', data)
})
socket.on('message', function (data) {

  console.log('message', data)
  const payloadStr = decoder.decode(data.payload)
  console.log('payloadStr', payloadStr);
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

  </div>
</template>

<style scoped lang="scss"></style>
