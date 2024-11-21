<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import type { UploadUserFile, UploadFile, UploadFiles } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'
import Tesseract from 'tesseract.js'
// ocr文字识别(准确率图个乐子)

const uploadRef = ref()
const fileList = ref<UploadFile[]>([])
const fileExceed = (files: File[], uploadFiles: UploadUserFile[]) => {
  console.log(files, uploadFiles)
  //  清空上传列表
  uploadRef.value.clearFiles()
  uploadRef.value.handleStart(files[0])
}

const nowImgBase64 = ref('')
const fileChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  if (uploadFiles.length === 0) return 0
  console.log(uploadFiles)
  const reader = new FileReader()
  reader.readAsDataURL(uploadFiles[0].raw as Blob)
  reader.onload = () => {
    nowImgBase64.value = reader.result as string
  }
}

const orcLoading = ref(false)
const scheduler = Tesseract.createScheduler()
const initOcr = async () => {
  const worker1 = await Tesseract.createWorker()
  const worker2 = await Tesseract.createWorker()
  await worker1.reinitialize('chi_sim')
  await worker2.reinitialize('chi_sim')
  scheduler.addWorker(worker1)
  scheduler.addWorker(worker2)
}
const textHtml = ref('')
const runOcr = async () => {
  orcLoading.value = true
  try {
    await initOcr()
    const results = await Promise.all(Array(10).fill(0).map(() => (
      scheduler.addJob('recognize', nowImgBase64.value)
    )))
    console.log(results)
    // await scheduler.terminate() // It also terminates all workers.
    textHtml.value = results[0].data.text
  } catch (e) {
    console.log(e)
  }
  orcLoading.value = false
}
onUnmounted(() => {
  scheduler.terminate() // It also terminates all workers.
})
</script>

<template>
  <div class="global-c-main-content">
    ocr文字识别（tesseract.js 中文准确率图个乐子）
    <el-upload
      ref="uploadRef"
      class="upload-img"
      drag
      accept="image/*"
      action=""
      :multiple="false"
      :auto-upload="false"
      :on-exceed="fileExceed"
      :on-change="fileChange"
      :limit="1"
      v-model:file-list="fileList"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        拖拽至此 或 <em>点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          只允许上传图片
        </div>
      </template>
    </el-upload>
    <el-button type="primary" style="margin-bottom: 10px;" :loading="orcLoading" @click="runOcr">开始识别</el-button>
    <div style="display: flex;align-items: center;">
      <img class="now-img" ref="nowImgRef" :src="nowImgBase64" />
      <el-input
        class="upload-img"
        v-model="textHtml"
        :rows="10"
        type="textarea"
        placeholder="ocr输出......"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
$upload-width: 400px;
.upload-img{
  width: $upload-width;
}
.now-img{
  width: 300px;
}
</style>
