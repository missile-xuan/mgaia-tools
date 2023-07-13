<script setup lang="ts">
import { ref, computed } from 'vue'
// json格式化
// import { ref, computed } from 'vue'
// import lodash from 'lodash'
const jsontextarea = ref('')
const json = computed(() => {
  try {
    return JSON.stringify(JSON.parse(jsontextarea.value), null, 2)
  } catch (e) {
    return ''
  }
})
</script>

<template>
  <div class="global-c-main-content">
    json格式化
    <el-input
      v-model="jsontextarea"
      :rows="2"
      type="textarea"
      placeholder="Please input"
    />

    <div style="white-space: break-spaces;padding-top: 10px;" v-html="json"> </div>
  </div>
</template>

<style scoped lang="scss">

</style>
