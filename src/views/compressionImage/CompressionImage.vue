<script setup lang="ts">
// 前端实现图片压缩
import type { UploadUserFile, UploadFile, UploadFiles } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'
import { ref, computed } from 'vue'
import lodash from 'lodash'
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

// 当前文件大小
const nowFileSize = computed(() => {
  if (fileList.value[0]?.raw) {
    return lodash.round(fileList.value[0].raw.size / 1024, 2)
  }
  return 0
})

// 压缩Image 导出base64
const compressionImage = (image: HTMLImageElement, quality: number):Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // 构建canvas
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = image.naturalWidth
      canvas.height = image.naturalHeight
      // 装入
      ctx?.drawImage(image, 0, 0, canvas.width, canvas.height)
      // 导出
      const dataUrl = canvas.toDataURL('image/jpeg', quality)
      return resolve(dataUrl)
    } catch (error) {
      return reject(error)
    }
  })
}

const quality = ref(0.8)
const buildLoading = ref(false)
const nowImgRef = ref<HTMLImageElement>()
const outImgBase64 = ref('')
const outFileSize = ref(0)

const build = () => {
  compressionImage(nowImgRef.value!, quality.value).then(imageBase64 => {
    outImgBase64.value = imageBase64
    // 计算压缩后文件大小
    var arr = imageBase64.split(',')
    const mime = arr[0].match(/:(.*?);/)![1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    const blob = new Blob([u8arr], { type: mime })
    outFileSize.value = lodash.round(blob.size / 1024, 2)
  })
}
</script>

<template>
  <div class="global-c-main-content">
    前端实现图片压缩
    <el-upload
      ref="uploadRef"
      class="upload-pdf"
      drag
      accept=".png,.jpg"
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
          只允许上传图片文件
        </div>
      </template>
    </el-upload>
    <div style="display: flex;" v-show="nowFileSize>0">
      <!-- 压缩率 -->
      <el-slider style="width: 300px;" v-model="quality" :max="1" :step="0.01" />
      <el-button style="margin-left: 20px;" type="primary" :loading="buildLoading" @click="build">压缩</el-button>
    </div>
    <div v-show="nowFileSize>0" style="display: flex;justify-content: space-between;padding-top: 10px;">
      <div>
        <div>
          <img class="now-img" ref="nowImgRef" :src="nowImgBase64" />
        </div>
        <div >
          <div>文件大小 {{ nowFileSize }} KB</div>
        </div>
      </div>
      <div style="width: 10px;"></div>
      <div v-show="outImgBase64!==''">
        <div>
          <img class="now-img" :src="outImgBase64" />
        </div>
        <div>压缩后文件大小 {{ outFileSize }} KB</div>
      </div>
    </div>
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

.now-img{
  width: 300px;
}

</style>
