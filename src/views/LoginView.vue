<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/useAuth'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const authStore = useAuthStore()
const { t, locale } = useI18n() 

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = () => {
  errorMessage.value = ''
  try {
    authStore.login(email.value, password.value)
    router.push(`/${locale.value}`) 
  } catch (error) {
    errorMessage.value = error.message
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card glass">
      <div class="auth-header">
        <h2>{{ t('docs.auth.login.title') }}</h2>
        <p>{{ t('docs.auth.login.subtitle') }}</p>
      </div>

      <div v-if="errorMessage" class="error-box">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label for="email">{{ t('docs.auth.emailLabel') }}</label>
          <input type="email" id="email" v-model="email" :placeholder="t('docs.auth.emailPlaceholder')" required />
        </div>
        
        <div class="form-group">
          <div class="label-row">
            <label for="password">{{ t('docs.auth.passwordLabel') }}</label>
            <a href="#" class="forgot-link">{{ t('docs.auth.forgotPassword') }}</a>
          </div>
          <input type="password" id="password" v-model="password" :placeholder="t('docs.auth.passwordPlaceholder')" required />
        </div>

        <button type="submit" class="btn-submit">{{ t('docs.auth.login.submitBtn') }}</button>
      </form>

      <div class="auth-divider">
        <span>{{ t('docs.auth.orContinue') }}</span>
      </div>

      <div class="social-login">
        <button class="btn-social google">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.221,0-9.652-3.343-11.303-8l-6.571,4.819C9.656,39.663,16.318,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
          <span>{{ t('docs.auth.google') }}</span>
        </button>
        <button class="btn-social github">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span>{{ t('docs.auth.github') }}</span>
        </button>
      </div>

      <p class="auth-footer">
        {{ t('docs.auth.login.footerText') }} <router-link :to="`/${locale}/register`">{{ t('docs.auth.login.footerLink') }}</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 120px 20px 80px; }
.auth-card { width: 100%; max-width: 420px; padding: 2.5rem; border-radius: 24px; border: 1px solid var(--border-color); }
.auth-header { text-align: center; margin-bottom: 2rem; }
.auth-header h2 { font-size: 1.8rem; margin-bottom: 0.5rem; font-weight: 700; }
.auth-header p { color: var(--text-muted); font-size: 0.95rem; }
.error-box { background: rgba(239, 68, 68, 0.1); color: #ef4444; padding: 1rem; border-radius: 10px; border: 1px solid rgba(239, 68, 68, 0.2); margin-bottom: 1.5rem; font-size: 0.9rem; text-align: center; }
.form-group { margin-bottom: 1.5rem; }
.label-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
label { display: block; font-size: 0.9rem; font-weight: 500; color: var(--text-muted); text-align: start; }
.forgot-link { font-size: 0.8rem; color: var(--primary); text-decoration: none; }
input { width: 100%; padding-block: 0.75rem; padding-inline: 1rem; border-radius: 10px; background: var(--input-bg); border: 1px solid var(--border-color); color: var(--text-main); font-size: 1rem; transition: 0.3s; text-align: start; }
input:focus { outline: none; border-color: var(--primary); }
.btn-submit { width: 100%; padding: 0.85rem; border-radius: 10px; background: var(--primary); color: white; border: none; font-weight: 600; font-size: 1rem; cursor: pointer; transition: 0.3s; margin-top: 0.5rem; }
.btn-submit:hover { filter: brightness(1.1); }
.auth-divider { display: flex; align-items: center; text-align: center; margin: 1.5rem 0; color: var(--text-muted); font-size: 0.8rem; }
.auth-divider::before, .auth-divider::after { content: ''; flex: 1; border-bottom: 1px solid var(--border-color); }
.auth-divider span { padding: 0 10px; }
.social-login { display: flex; gap: 1rem; margin-bottom: 2rem; }
.btn-social { flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.75rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-color); color: white; border-radius: 10px; cursor: pointer; transition: 0.3s; font-weight: 500; }
.btn-social:hover { background: rgba(255, 255, 255, 0.1); }
.auth-footer { text-align: center; font-size: 0.9rem; color: var(--text-muted); margin-top: 2rem; }
.auth-footer a { color: var(--primary); text-decoration: none; font-weight: 600; }
</style>