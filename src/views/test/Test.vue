<script setup lang="ts">
import { ref, reactive, onUnmounted } from 'vue'
let data = reactive<number[]>([1]) // 字典项
data = [1233]

function addNumber () {
  data[0]++
}
</script>

<template>
  <div class="global-c-main-content">
    测试页面
    {{ data }}
    <el-button type="primary"  @click="addNumber">+</el-button>
  </div>
</template>

<style scoped lang="scss">
</style>
