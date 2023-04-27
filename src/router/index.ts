import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/layout/Layout.vue'),
      children: [
        {
          path: '/pdfToHtml',
          name: 'PdfToHtml',
          component: () => import('@/views/pdfToHtml/PdfToHtml.vue'),
          meta: {
            title: 'PDF转图片文件'
          }
        },
        {
          path: '/compressionImage',
          name: 'CompressionImage',
          component: () => import('@/views/compressionImage/CompressionImage.vue'),
          meta: {
            title: '图片压缩'
          }
        },
        {
          path: '/buildExcel',
          name: 'BuildExcel',
          component: () => import('@/views/buildExcel/BuildExcel.vue'),
          meta: {
            title: '构建excel导出'
          }
        }
      ]
    }
  ]
})

export default router
