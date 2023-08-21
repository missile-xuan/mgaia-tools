<script setup lang="ts">
import { ref } from 'vue'
import lodash from 'lodash'
// 录屏
const videoEl = ref<HTMLAudioElement>()
const mediaConfig = ref({
  audio: true,
  video: true
})
let mediaRecorder: MediaRecorder|null = null
let mediaStream: MediaStream|null = null
const recording = ref(false)

const screenRecording = () => {
  // 请求屏幕录制
  const streamPromise = navigator.mediaDevices.getDisplayMedia(mediaConfig.value)
  streamPromise.then(stream => {
    recording.value = true
    mediaStream = stream
    mediaRecorder = new MediaRecorder(mediaStream)
    // 注册结束事件
    mediaRecorder.ondataavailable = function (e) {
      const blob = new Blob([e.data], { type: 'video/mp4' })
      // 新窗口打开刚刚录制的视频
      const url = URL.createObjectURL(blob)
      window.open(url, 'blank_')

      // 生成视频文件对象,可以用来上传保存
      // files = new File([blob], new Date().getTime(), { type: 'video/mp4' })
      // .....

      // 清空MediaRecorder
      mediaRecorder = null
      recording.value = false
    }
    mediaRecorder.start()
    console.log('stream', stream)
    videoEl.value!.srcObject = stream
  }).catch(error => {
    console.log(error.name, error.message)
  })
}

// 结束录制
const stopCapture = () => {
  if (lodash.isNil(mediaRecorder)) return false
  const tracks = mediaStream!.getTracks()
  mediaRecorder.stop() // 结束录制 触发事件回调
  tracks.forEach(track => track.stop()) // 结束流
  // mediaRecorder = null
}
</script>
<template>
  <div class="global-c-main-content">
    屏幕录制
    <video style="margin: 20px 0; background-color: #dddddd;" width="1080" ref="videoEl" autoplay  playsinline  anonymous ></video>
    <div class="imput-buttom">
      <el-button v-if="!recording" type="primary" @click="screenRecording">录制</el-button>
      <el-button v-if="recording" type="primary" @click="stopCapture">结束录制</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.imput-buttom{
  padding-bottom: 10px;
}
</style>
