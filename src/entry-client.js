import { createAppInstance } from './main.js'

const { app, router, pinia } = createAppInstance()

if (window.__INITIAL_STATE__) {
  pinia.state.value = window.__INITIAL_STATE__
}

router.isReady().then(() => {
  app.mount('#app')
})