<script setup lang="ts">
import { ref } from 'vue'
// 语音识别

const params = new URLSearchParams({
  'X-Api-App-Key': 'yaqh-azzd',
  'X-Api-Access-Key': '4e595097-6a45-4248-a44d-e237fd8843a9',
  'X-Api-Resource-Id': 'volc.seedasr.sauc.concurrent',
  'X-Api-Connect-Id': 'test_connect_id_001'
})
// 创建WebSocket连接
const socket = new WebSocket(
  'wss://openspeech.bytedance.com/api/v3/sauc/bigmodel_async?' + params.toString()
)
socket.onopen = function (e) {
  console.log('已连接', e);

}
// 鼠标按下 发起长连接
function speech() {}
</script>

<template>
  <div class="global-c-main-content">
    语音识别
    <el-button type="primary" @mousedown="speech">说话</el-button>
  </div>
</template>

<style scoped lang="scss"></style>
