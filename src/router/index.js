import { createRouter, createWebHistory, createMemoryHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import i18n from '../i18n'

const supportedLocales = ['en', 'tr', 'ar']

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
        const savedLang = typeof window !== 'undefined' ? (localStorage.getItem('user-lang') || 'en') : 'en'
        return next(`/${savedLang}`)
      }
      
      i18n.global.locale.value = locale
      
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        localStorage.setItem('user-lang', locale)
        document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
        document.documentElement.setAttribute('lang', locale)
      }
      
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
      const savedLang = typeof window !== 'undefined' ? (localStorage.getItem('user-lang') || 'en') : 'en'
      return `/${savedLang}`
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => {
      const savedLang = typeof window !== 'undefined' ? (localStorage.getItem('user-lang') || 'en') : 'en'
      return `/${savedLang}`
    }
  }
]

export function createRouterInstance() {
  return createRouter({
    history: typeof window === 'undefined' ? createMemoryHistory() : createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (typeof window !== 'undefined' && to.hash) {
         return { el: to.hash, behavior: 'smooth', top: 80 }
      }
      return { top: 0 }
    }
  })
}