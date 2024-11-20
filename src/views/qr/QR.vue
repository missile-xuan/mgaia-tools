<script setup lang="ts">
import { ref } from 'vue'
import type { UploadUserFile, UploadFile, UploadFiles, TabsPaneContext } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'
import QrcodeDecoder from 'qrcode-decoder'
import QRCodeStyling from 'qr-code-styling'

interface QRFormType {
  width: number,
  height: number,
  imgSize: number,
  textHtml: string
}

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

// 二维码生成
const qrLoading = ref(false)
const QRForm = ref<QRFormType>({
  width: 200,
  height: 200,
  imgSize: 1,
  textHtml: ''
})
const logoRef = ref()
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
const QRSvg = ref()
const generateQR = () => {
  const qrCode = new QRCodeStyling({
    width: QRForm.value.width,
    height: QRForm.value.height,
    type: 'svg',
    data: QRForm.value.textHtml,
    image: nowLogoBase64.value,
    imageOptions: {
      crossOrigin: 'anonymous',
      margin: 2,
      imageSize: QRForm.value.imgSize
    }
  })
  const firstChild = QRSvg.value.firstElementChild
  if (firstChild) {
    firstChild.remove()
  }
  qrCode.append(QRSvg.value)
}
const downloadQR = () => {
  const svgElement = QRSvg.value.firstElementChild
  if (svgElement) {
    const svgString = new XMLSerializer().serializeToString(svgElement)
    const imageElement = new Image()
    imageElement.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString)
    imageElement.onload = function () {
      const canvas = document.createElement('canvas')
      canvas.width = imageElement.width
      canvas.height = imageElement.height
      const context = canvas.getContext('2d')
      if (context) {
        context.drawImage(imageElement, 0, 0)
        const pngDataUrl = canvas.toDataURL('image/png')
        const downloadLink = document.createElement('a')
        downloadLink.href = pngDataUrl
        downloadLink.download = 'qr.png'
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
      }
    }
  }
}

// 二维码解析
const uploadRef = ref()
const QRList = ref<UploadFile[]>([])
// 超出文件限制
const fileExceedForQR = (files: File[], uploadFiles: UploadUserFile[]) => {
  console.log(files, uploadFiles)
  //  清空上传列表
  uploadRef.value.clearFiles()
  uploadRef.value.handleStart(files[0])
}
// 将上传的QRcode转化为base64格式
const nowQRBase64 = ref('')
const fileChangeForQR = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  if (uploadFiles.length === 0) return 0
  console.log(uploadFiles)
  const reader = new FileReader()
  reader.readAsDataURL(uploadFiles[0].raw as Blob)
  reader.onload = () => {
    nowQRBase64.value = reader.result as string
  }
}
const result = ref('')
const runQR = () => {
  const decoder = new QrcodeDecoder()
  decoder.decodeFromImage(nowQRBase64.value).then((res) => {
    // @ts-ignore
    result.value = res.data
  })
}
</script>

<template>
  <div class="global-c-main-content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="encode" name="first">
        <div class="container">
          <!-- <div>二维码信息调整</div> -->
          <el-form label-width="90px" :model="QRForm" style="width: 400px;" label-position="left">
            <el-form-item label="二维码宽度">
              <el-input v-model="QRForm.width"></el-input>
            </el-form-item>
            <el-form-item label="二维码高度">
              <el-input v-model="QRForm.height"></el-input>
            </el-form-item>
            <el-form-item label="logo大小">
              <el-input v-model="QRForm.imgSize"></el-input>
            </el-form-item>
            <el-form-item label="二维码内容">
              <el-input v-model="QRForm.textHtml" :rows="5" type="textarea" placeholder="输入文字或URL" />
            </el-form-item>
            <el-form-item>
              <el-upload ref="logoRef" class="upload-img" drag accept="image/*" action="" :multiple="false"
                :auto-upload="false" :on-exceed="fileExceed" :on-change="fileChange" :limit="1"
                v-model:file-list="LogoList">
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
            </el-form-item>
          </el-form>
          <div style="align-items: center;">
            <el-button type="primary" style="margin-bottom: 10px" :loading="qrLoading" @click="generateQR">生成二维码</el-button>
            <el-button type="primary" style="margin-bottom: 10px" :loading="qrLoading" @click="downloadQR">下载二维码</el-button>
          </div>

          <div style="display: flex; align-items: center">
            <div ref="QRSvg"></div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="decode" name="second">
        <div class="container">
          <el-upload ref="uploadRef" class="upload-img" drag accept="image/*" action="" :multiple="false"
            :auto-upload="false" :on-exceed="fileExceedForQR" :on-change="fileChangeForQR" :limit="1" v-model:file-list="QRList">
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
          <el-button type="primary" style="margin-bottom: 10px" :loading="qrLoading" @click="runQR">开始识别</el-button>
          <div>{{ result }}</div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
$upload-width: 400px;
.container{
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.global-c-main-content {
  padding-left: 20px;
}

.upload-img {
  width: $upload-width;
}

.now-img {
  width: 300px;
}
</style>
