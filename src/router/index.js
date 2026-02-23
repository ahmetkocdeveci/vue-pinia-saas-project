import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import i18n from '../i18n'

const supportedLocales = ['en', 'tr', 'ar']

// 1. URL Uzantısı (Slug) Çeviri Sözlüğümüz
export const slugMap = {
  en: { pricing: 'pricing', blog: 'blog', login: 'login', register: 'register', docs: 'docs', changelog: 'changelog' },
  tr: { pricing: 'fiyatlandirma', blog: 'blog', login: 'giris', register: 'kayit', docs: 'dokumanlar', changelog: 'guncellemeler' },
  ar: { pricing: 'التسعير', blog: 'مدونة', login: 'تسجيل-الدخول', register: 'انشاء-حساب', docs: 'توثيق', changelog: 'التحديثات' }
}

const routes = [
  {
    path: '/:locale',
    component: RouterView,
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale
      if (!supportedLocales.includes(locale)) {
        const savedLang = localStorage.getItem('user-lang') || 'en'
        return next(`/${savedLang}`)
      }
      
      i18n.global.locale.value = locale
      localStorage.setItem('user-lang', locale)
      document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
      document.documentElement.setAttribute('lang', locale)
      
      next()
    },
    children: [
      { path: '', name: 'home', component: HomeView },
      { path: 'pricing', alias: ['fiyatlandirma', 'التسعير'], name: 'pricing', component: () => import('../views/PricingView.vue') },
      { path: 'blog', alias: ['مدونة'], name: 'blog', component: () => import('../views/BlogView.vue') },
      { path: 'blog/:slug', alias: ['مدونة/:slug'], name: 'post-detail', component: () => import('../views/PostDetail.vue'), props: true },
      { path: 'login', alias: ['giris', 'تسجيل-الدخول'], name: 'login', component: () => import('../views/LoginView.vue') },
      { path: 'register', alias: ['kayit', 'انشاء-حساب'], name: 'register', component: () => import('../views/RegisterView.vue') },
      { path: 'docs', alias: ['dokumanlar', 'توثيق'], name: 'docs', component: () => import('../views/DocsView.vue') },
      { path: 'changelog', alias: ['guncellemeler', 'التحديثات'], name: 'changelog', component: () => import('../views/ChangelogView.vue') }
    ]
  },
  {
    path: '/',
    redirect: () => {
      const savedLang = localStorage.getItem('user-lang') || 'en'
      return `/${savedLang}`
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => {
      const savedLang = localStorage.getItem('user-lang') || 'en'
      return `/${savedLang}`
    }
  }
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