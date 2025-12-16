<script setup lang="ts">
import { ref, reactive, onUnmounted } from 'vue'
import AudioCapture from './AudioCapture'

let audioCapture: AudioCapture | undefined = undefined

const speaking = ref(false)
async function speak() {
  audioCapture = new AudioCapture((data: Blob) => {
    console.log('send', data)
  })
  audioCapture.start()
}

function stop() {
  speaking.value = false
  if (!audioCapture) return
  const blob = audioCapture.stop()
  const url = URL.createObjectURL(blob)
  debugger
  const a = document.createElement('a')
  a.href = url
  a.download = 'recording.wav'
  console.log('结束说话')
  a.click()
}
</script>

<template>
  <div class="global-c-main-content">
    语音识别
    <el-button type="primary" @mousedown="speak" @mouseup="stop">说话</el-button>
  </div>
</template>

<style scoped lang="scss"></style>
