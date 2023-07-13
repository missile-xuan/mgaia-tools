<script setup lang="ts">
import { ref } from 'vue'
import type { UploadUserFile, UploadFile, UploadFiles } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'
import QrcodeDecoder from 'qrcode-decoder'
import QRCodeStyling from 'qr-code-styling'

// 二维码生成
const qrLoading = ref(false)
const logoRef = ref()
const textHtml = ref('') // 内容
const LogoList = ref<UploadFile[]>([]) // 二维码logo

// 超出文件限制
const fileExceed = (files: File[], uploadFiles: UploadUserFile[]) => {
  console.log(files, uploadFiles)
  //  清空上传列表
  logoRef.value.clearFiles()
  logoRef.value.handleStart(files[0])
}

// 将上传的logo转化为base64格式
const nowLogoBase64 = ref('')
const fileChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  if (uploadFiles.length === 0) return 0
  console.log(uploadFiles)
  const reader = new FileReader()
  reader.readAsDataURL(uploadFiles[0].raw as Blob)
  reader.onload = () => {
    nowLogoBase64.value = reader.result as string
  }
}
const canvas = ref()
const generateQR = () => {
  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    type: 'svg',
    data: textHtml.value,
    image: nowLogoBase64.value,
    imageOptions: {
      crossOrigin: 'anonymous',
      margin: 20
    }
  })
  qrCode.append(canvas.value)
  qrCode.download({ name: 'qr', extension: 'svg' })
}
// 二维码解析
const uploadRef = ref()
const QRList = ref<UploadFile[]>([])
const runQR = () => {
  // const decoder = new QrcodeDecoder()
  // decoder.decodeFromImage(img).then((res) => {
  //   console.log(res)
  // })
}
</script>

<template>
  <div class="global-c-main-content">
    <div class="encode">
      <el-upload ref="logoRef" class="upload-img" drag accept="image/*" action="" :multiple="false" :auto-upload="false"
        :on-exceed="fileExceed" :on-change="fileChange" :limit="1" v-model:file-list="LogoList">
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">拖拽logo至此 或 <em>点击上传</em></div>
        <template #tip>
          <div class="el-upload__tip">只允许上传图片</div>
        </template>
      </el-upload>
      <el-input class="upload-img" v-model="textHtml" :rows="10" type="textarea" placeholder="二维码内容" />
      <el-button type="primary" style="margin-bottom: 10px" :loading="qrLoading" @click="generateQR">生成二维码</el-button>
      <div style="display: flex; align-items: center">
        <canvas class="qrcodeImgClass" id="canvas" style="visibility:hidden;"></canvas>
        <img class="qrcodeImgClass" id="newImage" />
      </div>
    </div>
    <div>
      <el-upload ref="uploadRef" class="upload-img" drag accept="image/*" action="" :multiple="false" :auto-upload="false"
        :on-exceed="fileExceed" :on-change="fileChange" :limit="1" v-model:file-list="QRList">
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">拖拽至此 或 <em>点击上传</em></div>
        <template #tip>
          <div class="el-upload__tip">只允许上传图片</div>
        </template>
      </el-upload>
      <el-button type="primary" style="margin-bottom: 10px" :loading="qrLoading" @click="runQR">开始识别</el-button>
      <div style="display: flex; align-items: center">
        <!-- <img class="now-img" ref="nowImgRef" :src="nowImgBase64" /> -->
      </div>
    </div>
    <div ref="canvas"></div>
  </div>
</template>

<style scoped lang="scss">
$upload-width: 400px;

.upload-img {
  width: $upload-width;
}

.now-img {
  width: 300px;
}
</style>
