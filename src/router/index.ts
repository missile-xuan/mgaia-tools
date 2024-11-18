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
          path: '/pdfDivide',
          name: 'PdfDivide',
          component: () => import('@/views/pdfDivide/PdfDivide.vue'),
          meta: {
            title: 'PDF拆分'
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
        },
        {
          path: '/buildExcelDemo',
          name: 'BuildExcelDemo',
          component: () => import('@/views/buildExcel/BuildExcelDemo.vue'),
          meta: {
            title: 'excel导出demo'
          }
        },
        {
          path: '/jsonFormat',
          name: 'JsonFormat',
          component: () => import('@/views/jsonFormat/JsonFormat.vue'),
          meta: {
            title: 'json格式化'
          }
        },
        {
          path: '/textOcr',
          name: 'TextOcr',
          component: () => import('@/views/textOcr/TextOcr.vue'),
          meta: {
            title: 'OCR文字识别'
          }
        },
        {
          path: '/qr',
          name: 'QR',
          component: () => import('@/views/qr/QR.vue'),
          meta: {
            title: '二维码解析生成'
          }
        },
        {
          path: '/videoToGif',
          name: 'VideoToGif',
          component: () => import('@/views/videoToGif/VideoToGif.vue'),
          meta: {
            title: '视频转GIF'
          }
        },
        {
          path: '/screenRecording',
          name: 'ScreenRecording',
          component: () => import('@/views/screenRecording/ScreenRecording.vue'),
          meta: {
            title: '屏幕录制'
          }
        },
        {
          path: '/buildEchartPdf',
          name: 'BuildEchartPdf',
          component: () => import('@/views/buildEchartPdf/BuildEchartPdf.vue'),
          meta: {
            title: 'echart导出PDF'
          }
        },
        {
          path: '/test',
          name: 'Test',
          component: () => import('@/views/test/Test.vue'),
          meta: {
            title: '测试页'
          }
        }
      ]
    }
  ]
})

export default router
