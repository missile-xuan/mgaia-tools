<script setup lang="ts">
import { ref, reactive, onUnmounted } from 'vue'
import AudioCapture from './AudioCapture'

import { io, Socket } from 'socket.io-client'

const audioCapture = new AudioCapture((data: Blob) => {
    console.log('send', data)
  })

const speaking = ref(false)
async function speak() {
  audioCapture.start()
}

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

// 测试socket.io
const socket = io('http://172.30.12.13:3000/speechrecognition')
socket.on('connect', function () {
  console.log('Connected')

  socket.emit('events', { test: 'test' })
  socket.emit('identity', 0, response => console.log('Identity:', response))
})
socket.on('events', function (data) {
  console.log('event', data)
})
socket.on('exception', function (data) {
  console.log('event', data)
})
socket.on('disconnect', function () {
  console.log('Disconnected')
})
</script>

<template>
  <div class="global-c-main-content">
    语音识别
    <el-button type="primary" @mousedown="speak" @mouseup="stop">说话</el-button>
    <el-button type="primary" @click="destroy">x销毁</el-button>

  </div>
</template>

<style scoped lang="scss"></style>
