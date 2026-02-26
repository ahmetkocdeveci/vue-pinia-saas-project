import { renderToString } from 'vue/server-renderer'
import { createAppInstance } from './main.js'

export async function render(url) {
  const { app, router, pinia } = createAppInstance()

  await router.push(url)
  await router.isReady()

  const html = await renderToString(app)
  const state = pinia.state.value

  return { html, state }
}