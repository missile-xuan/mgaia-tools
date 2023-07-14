<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import type { UploadUserFile, UploadFile, UploadFiles } from 'element-plus'
import * as pdfjsLib from 'pdfjs-dist' // 需要通过as引入 （坑死）
import workerSrc from 'pdfjs-dist/build/pdf.worker.js?url'
import { ref } from 'vue'
import { PDFDocument } from 'pdf-lib'
// pdf转html

const value = ref([1, 1])
const max = ref(1)
const fullscreenLoading = ref(false)

const fileList = ref<UploadFile[]>([])
console.log(new URL(workerSrc, import.meta.url).href)
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  workerSrc,
  import.meta.url
).href

const uploadRef = ref()
const fileExceed = (files: File[], uploadFiles: UploadUserFile[]) => {
  console.log(files, uploadFiles)
  //  清空上传列表
  uploadRef.value.clearFiles()
  uploadRef.value.handleStart(files[0])
}
const str = 'pdfjs/web/viewer.html?file='
let blobURL: string = ''
const buffer = ref()
const pdfStr = ref()
const fileChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  if (uploadFiles.length === 0) return 0
  console.log(uploadFiles)
  blobURL = URL.createObjectURL(uploadFiles[0].raw as Blob)
  pdfStr.value = str + blobURL
  getPDFPageCount(blobURL).then(res => {
    max.value = res
  })
  const reader = new FileReader()
  reader.onload = () => {
    debugger
    buffer.value = reader.result as ArrayBuffer
  }
  reader.readAsArrayBuffer(uploadFiles[0].raw as Blob)
}

const htmlName = ref('')
const divide = async () => {
  debugger
  const pdf = await PDFDocument.load(buffer.value)
  const newPDF = await PDFDocument.create()
  const startPage = value.value[0]
  const endPage = value.value[1]
  for (let pageNumber = startPage; pageNumber <= endPage; pageNumber++) {
    // 复制指定页的内容到新的 PDF
    const [copiedPage] = await newPDF.copyPages(pdf, [pageNumber - 1])
    newPDF.addPage(copiedPage)
  }
  // 保存新的 PDF 文件
  const newPDFBytes = await newPDF.save()
  const newPDFDownLoad = new Blob([newPDFBytes], { type: 'application/pdf' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(newPDFDownLoad)
  const name = htmlName.value === '' ? fileList.value[0].name.split('.')[0] : htmlName.value
  link.download = `${name}.pdf`
  link.click()
}

async function getPDFPageCount (pdfUrl: string) {
  const loadingTask = pdfjsLib.getDocument(pdfUrl)
  const pdf = await loadingTask.promise
  return pdf.numPages
}
</script>

<template>
  <div class="global-c-main-content">
    <div>
      pdf拆分
      <el-upload ref="uploadRef" class="upload-pdf" drag accept=".pdf" action="" :multiple="false" :auto-upload="false"
        :on-exceed="fileExceed" :on-change="fileChange" :limit="1" v-model:file-list="fileList">
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">拖拽至此 或 <em>点击上传</em></div>
        <template #tip>
          <div class="el-upload__tip">只允许上传pdf文件</div>
        </template>
      </el-upload>
      <el-input v-model="htmlName" placeholder="输出文件名"></el-input>
      页数范围
      <el-slider style="width: 400px" v-model="value" range :min="1" :max="max" />
      <el-button :disabled="fileList.length === 0" type="primary" @click="divide">拆分</el-button>
    </div>
    <div class="file-preview" v-loading.lock="fullscreenLoading">
      <iframe class="jspdf" name="jspdf" id="jspdf" ref="jspdf" :src="pdfStr" frameborder="0"></iframe>
    </div>
  </div>
</template>

<style scoped lang="scss">
$upload-width: 400px;
.global-c-main-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
}
.file-preview{
  width: 40%;
  height: 100%;
  .jspdf{
    width: 100%;
    height: 100%;
  }
}
.upload-pdf {
  width: $upload-width;
}

.imput-buttom {
  width: $upload-width;
  padding-bottom: 10px;
}
</style>
