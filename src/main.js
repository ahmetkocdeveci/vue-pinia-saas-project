import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouterInstance } from './router'
import i18n from './i18n'
import App from './App.vue'
import './assets/style.css'

export function createAppInstance() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  const router = createRouterInstance()

  app.use(pinia)
  app.use(router)
  app.use(i18n)

  return { app, router, pinia }
}