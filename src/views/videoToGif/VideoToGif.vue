<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import type { UploadUserFile, UploadFile, UploadFiles } from 'element-plus'
import { parseInt } from 'lodash'
import { ref, onMounted } from 'vue'
// import { GIF } from '@/jslab/gifjs/gif'
// const GIF = require('@/jslab/gifjs/gif.js')

// 视频转GIF
const fileList = ref<UploadFile[]>([])
const uploadRef = ref()
const blobURL = ref('')
const fileExceed = (files: File[], uploadFiles: UploadUserFile[]) => {
  console.log('fileExceed', files, uploadFiles)
  //  清空上传列表
  uploadRef.value.clearFiles()
  uploadRef.value.handleStart(files[0])
  // blobURL.value = URL.createObjectURL(uploadFiles[0].raw as Blob)
}

const videoEl = ref<HTMLVideoElement>()
// 原始视频宽度
const width = ref(0)
// 原始视频高度
const height = ref(0)
const gifURL = ref('')
// 间隔时间
const delay = ref(200)
// 渲染等待
const buildLoading = ref(false)
// 缩小系数
const coefficient = ref(1)
onMounted(() => {
  // 元数据加载完成的监听
  videoEl.value?.addEventListener('loadedmetadata', () => {
    // 部分视频尺寸可能会很大，可以再加载完成时设置样式缩小其尺寸
    width.value = videoEl.value!.videoWidth
    height.value = videoEl.value!.videoHeight
    let showWidth = videoEl.value!.videoWidth
    let showHeight = videoEl.value!.videoHeight
    if (width.value > 1000) {
      showWidth = width.value / 3
      showHeight = height.value / 3
    }
    videoEl.value!.style.width = showWidth + 'px'
    videoEl.value!.style.height = showHeight + 'px'
  })

  videoEl.value?.addEventListener('ended', () => {
    // 视频播放完毕，清除时间函数
    clearInterval(timer)

    // 将追加的gif帧，渲染成完整图
    videoGif.render()

    videoEl.value?.load()

    // 监听渲染完毕，并输出 gif 地址
    videoGif.on('finished', (blob:Blob) => {
      buildLoading.value = false
      gifURL.value = URL.createObjectURL(blob)
    })
  })
})
// 文件变化转换为本地url
const fileChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  if (uploadFiles.length === 0) return 0
  blobURL.value = URL.createObjectURL(uploadFiles[0].raw as Blob)
  console.log('fileChange', blobURL.value, uploadFiles)
  videoEl.value!.src = blobURL.value
}

// 创建画布
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

// 开始转换
let timer:any = null // 循环触发对象
let videoGif:any = null
const build = () => {
  buildLoading.value = true
  canvas.width = width.value * coefficient.value
  canvas.height = height.value * coefficient.value
  // eslint-disable-next-line no-undef
  videoGif = new GIF({
    workers: 2,
    quality: 1,
    workerScript: './jslab/gifjs/gif.worker.js',
    debug: true
  })

  timer = setInterval(() => {
    ctx!.drawImage(videoEl.value!, 0, 0, canvas.width, canvas.height)
    // 将当前画面帧追加到 gif中
    videoGif.addFrame(canvas, { copy: true, delay: delay.value })
  }, delay.value)

  videoEl.value!.play()
}
</script>

<template>
  <div class="global-c-main-content">
    视频转GIF
    <el-upload
      ref="uploadRef"
      class="upload-pdf"
      drag
      accept=".mp4"
      action=""
      :multiple="false"
      :auto-upload="false"
      :on-exceed="fileExceed"
      :on-change="fileChange"
      :limit="1"
      v-model:file-list="fileList"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">拖拽至此 或 <em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">只允许上传mp4文件</div>
      </template>
    </el-upload>
    <!-- controls="true" -->
    <video ref="videoEl" anonymous >您的浏览器不支持播放该视频！</video>
    <div style="padding: 10px 0; width: 300px; text-align: center;">
      <div>原始视频宽：{{ width }}&emsp;&emsp;  导出gif宽：{{ parseInt(width * coefficient + '') }}</div>
      <div>原始视频高：{{ height }}&emsp;&emsp;   导出gif高：{{ parseInt(height * coefficient + '') }}</div>
      <div style="display: flex;    align-items: center; padding-top: 10px">
        <span style="width: 50px;">间隔： </span>
        <el-input :disabled="buildLoading" style="flex-grow: 1;width: 0;" v-model.number="delay"/>
        <span style="width: 30px;">ms</span>
      </div>
      <div style="display: flex;    align-items: center;">
        <span style="width: 50px;">缩放：</span>
        <el-slider :disabled="buildLoading" style="flex-grow: 1;width: 0;" v-model="coefficient" :step="0.05" :max="1" :min="0" />
      </div>
      <el-button @click="build" :loading="buildLoading">渲染 GIF</el-button>
      <div style="color: #ff6f6f;">大分辨率渲染较慢，可打开控制台查看渲染进度</div>
    </div>
    <img style="max-width: 1000px;" :src="gifURL"/>
  </div>
</template>

<style scoped lang="scss">
$upload-width: 400px;
.upload-pdf {
  width: $upload-width;
}
</style>
