import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/index.scss'
import '@/assets/scss/default-class.scss'

import App from './App.vue'
import router from './router'

import './assets/reset.css'

const app = createApp(App)
app.use(ElementPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')
