<script setup lang="ts">
// 布局文件
import githubsvg from '@/components/icons/github.vue'
import LeftMenu from '@/views/menu/LeftMenu.vue'

// 跳转github项目地址
const goGithub = () => {
  window.open('https://github.com/missile-xuan/mgaia-tools')
}
</script>

<template>
  <div class="layout">
    <div class="top-bar">
      <div>mgaia-tools(开发中)</div>
      <githubsvg class="icon" @click="goGithub"/>
    </div>
    <div class="bottom-content">
      <LeftMenu/>
      <RouterView class="content"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  .top-bar{
    height: 40px;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px solid #dcdfe6;

    .icon{
      height: 20px;
      cursor: pointer;
    }
  }
  .bottom-content{
    flex-grow: 1;
    height: 0;
    display: flex;
    flex-direction: row;

    .content{
      flex-grow: 1;
    }
  }
}
</style>
