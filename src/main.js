import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'

import router from './routes/routes.js'
import './index.css'
import { createPinia } from 'pinia'




createApp(App).use(plugin, defaultConfig).use(router).use(createPinia()).mount('#app')