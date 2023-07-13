<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'

const nowRoute = useRoute()
console.log(nowRoute.path)
// 左侧菜单
const activeMenu = ref('')
const menuGroupList = [
  {
    groupTitle: '文件相关',
    menuList: [
      {
        menuName: 'PDF转图片网页',
        path: '/pdfToHtml'
      },
      {
        menuName: 'PDF拆分',
        path: '/pdfToHtml'
      },
      {
        menuName: '数据导出excel',
        path: '/buildExcel'
      },
      {
        menuName: '图片压缩',
        path: '/compressionImage'
      },
      {
        menuName: 'OCR文字识别',
        path: '/textOcr'
      },
      {
        menuName: '二维码解析生成',
        path: '/qr'
      }
    ]
  },
  {
    groupTitle: '代码相关',
    menuList: [
      {
        menuName: 'JSON格式化',
        path: '/jsonFormat'
      }
    ]
  },
  {
    groupTitle: '实用工具',
    menuList: [
      {
        menuName: '二维码转换',
        path: '/QRcode'
      }
    ]
  }
]

const clickMenu = (meun: {menuName: string, path:string}) => {
  activeMenu.value = meun.path
  router.push(meun.path)
}

</script>

<template>
  <div class="left-menu">
    <section v-for="group of menuGroupList" :key="group.groupTitle">
      <div class="group-title">{{ group.groupTitle }}</div>
      <div
        v-for="meun of group.menuList"
        :key="meun.menuName"
        :class="{link:true, active:meun.path === nowRoute.path}"
        @click="clickMenu(meun)"
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
    margin-bottom: 10px;
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
