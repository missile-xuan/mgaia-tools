<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import type { UploadUserFile, UploadFile } from 'element-plus'
import { ElMessage } from 'element-plus'
import * as pdfjsLib from 'pdfjs-dist' // 需要通过as引入 （坑死）
import workerSrc from 'pdfjs-dist/build/pdf.worker.mjs?url'
import lodash from 'lodash'
import JSZip from 'JSZip'
import { saveAs } from 'file-saver'
import { ref } from 'vue'
// pdf转html
const uploadRef = ref()
const htmlName = ref('')
const fileList = ref<UploadFile[]>([])
console.log(new URL(workerSrc, import.meta.url).href)
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(workerSrc, import.meta.url).href

const fileExceed = (files: File[], uploadFiles: UploadUserFile[]) => {
  console.log(files, uploadFiles)
  //  清空上传列表
  uploadRef.value.clearFiles()
  uploadRef.value.handleStart(files[0])
}

const scale = ref(3) // 渲染精度质量
let canvas!:HTMLCanvasElement
let context!:CanvasRenderingContext2D | null
const showPage = ref<HTMLElement>()
const buildLoading = ref(false)
const build = async () => {
  buildLoading.value = true
  // 判断文件列表是否有数据
  if (fileList.value.length === 0) {
    ElMessage({
      message: '未上传pdf',
      type: 'warning'
    })
    buildLoading.value = false
    return 0
  }

  // 进行转换
  const pdfFile = fileList.value[0].raw
  const typedArray = new Int8Array(await pdfFile!.arrayBuffer())
  const pdfDoc = await pdfjsLib.getDocument(typedArray).promise
  console.log(pdfFile)
  if (!pdfDoc) {
    ElMessage({
      message: '转换失败',
      type: 'warning'
    })
    buildLoading.value = false
    return 0
  }

  if (lodash.isNil(canvas)) {
    canvas = document.createElement('canvas')
    context = canvas.getContext('2d')
  }
  showPage.value?.append(canvas)
  // 总页数
  const totalPages = pdfDoc.numPages

  const zip = new JSZip()
  // 创建一个文件夹用来存放图片
  const outHtmlName = htmlName.value === '' ? fileList.value[0].name.split('.')[0] : htmlName.value
  const images = zip.folder(outHtmlName)
  let imageHtmlStr = ''
  for (let i = 1; i <= totalPages; i++) {
    // getPage页面从1开始（坑死）
    const pdfPage = await pdfDoc.getPage(i)
    const viewport = pdfPage.getViewport({ scale: scale.value })
    canvas.height = viewport.height
    canvas.width = viewport.width
    canvas.style.height = '200px'
    canvas.style.width = 200 / (viewport.height / viewport.width) + 'px'
    await pdfPage.render({
      canvasContext: context as CanvasRenderingContext2D,
      viewport
    }).promise.then(() => {
      console.log('渲染完成', i)
    })
    images?.file('image-' + i + '.png', canvas.toDataURL('image/png', 1.0).split(',')[1], { base64: true })
    imageHtmlStr += `<img src="./image-${i}.png"/>`
  }
  const htmlstr = `
    <!doctype html>
    <head>
    <meta charset="UTF-8">
    </head>
    <body style="background-color:gray;">
    <style>
      img {background-color:#fff; text-align:center; width:100%; max-width:100%;margin-top:6px;}
    </style>
    ${imageHtmlStr}
    </body>
    </html>
  `
  images?.file(outHtmlName + '.html', htmlstr)

  // 打包下载
  zip.generateAsync({
    type: 'blob'
  }).then(function (content) {
    saveAs(content, outHtmlName + '.zip')
    buildLoading.value = false
  })
}

</script>

<template>
  <div class="global-c-main-content">
    pdf转html
    <el-upload
      ref="uploadRef"
      class="upload-pdf"
      drag
      accept=".pdf"
      action=""
      :multiple="false"
      :auto-upload="false"
      :on-exceed="fileExceed"
      :limit="1"
      v-model:file-list="fileList"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        拖拽至此 或 <em>点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          只允许上传pdf文件
        </div>
      </template>
    </el-upload>
    <div class="imput-buttom">
      <div style="    margin-bottom: 10px;">渲染精度: <el-input-number v-model="scale" :min="1" :max="10" /></div>
      <el-input v-model="htmlName" placeholder="输出html文件名" >
        <template #append>
          <el-button type="primary" :loading="buildLoading" @click="build">转换</el-button>
        </template>
      </el-input>
    </div>
    <div ref="showPage"></div>
  </div>
</template>

<style scoped lang="scss">
$upload-width: 400px;
.upload-pdf{
  width: $upload-width;
}
.imput-buttom{
  width: $upload-width;
  padding-bottom: 10px;
}

</style>
