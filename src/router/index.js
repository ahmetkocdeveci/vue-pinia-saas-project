import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/pricing', name: 'pricing', component: () => import('../views/PricingView.vue') },
  { path: '/blog', name: 'blog', component: () => import('../views/BlogView.vue') },
  { path: '/blog/:slug', name: 'post-detail', component: () => import('../views/PostDetail.vue'), props: true },
  { path: '/login', name: 'login', component: () => import('../views/LoginView.vue') },
  { path: '/register', name: 'register', component: () => import('../views/RegisterView.vue') },
  { path: '/docs', name: 'docs', component: () => import('../views/DocsView.vue') },
  { path: '/changelog', name: 'changelog', component: () => import('../views/ChangelogView.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 }
    return { top: 0 }
  }
})

export default router