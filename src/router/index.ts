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
          component: () => import('@/views/pdfToHtml/PdfToHtml.vue')
        }
      ]
    }
  ]
})

export default router
