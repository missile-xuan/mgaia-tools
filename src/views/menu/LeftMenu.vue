<script setup lang="ts">
import { ref } from 'vue'
// 左侧菜单
const activeMenu = ref('')
const menuGroupList = [
  {
    groupTitle: 'PDF相关',
    menuList: [
      {
        menuName: 'PDF转图片网页',
        path: ''
      },
      {
        menuName: '生成pdf',
        path: ''
      }
    ]
  }
]

</script>

<template>
  <div class="left-menu">
    <section v-for="group of menuGroupList" :key="group.groupTitle">
      <div class="group-title">{{ group.groupTitle }}</div>
      <div
        v-for="meun of group.menuList"
        :key="meun.menuName"
        :class="{link:true, active:activeMenu === meun.menuName}"
        @click="activeMenu = meun.menuName"
      >
        {{ meun.menuName }}
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.left-menu{
  padding: 20px 40px;
  border-right: 1px solid #dcdfe6;
  .group-title{
    width: 220px;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: 24px;
  }
  .link{
    padding: 10px 16px;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
    color: #606266;
    transition: color .5s;
  }
  .link:hover{
    color: #409eff;
  }
  .active{
    font-weight: 600;
    color: #409eff;
    transition: color .25s;
    background-color: #409eff1a
  }

}
</style>
