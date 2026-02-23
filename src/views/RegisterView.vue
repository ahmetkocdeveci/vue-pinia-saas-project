<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/useAuth'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const authStore = useAuthStore()
const { t, locale } = useI18n()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')

const handleRegister = () => {
  errorMessage.value = ''

  if (password.value !== confirmPassword.value) {
    // Hata mesajı dil dosyasından çekiliyor
    errorMessage.value = t('docs.auth.register.errors.passwordMismatch')
    return
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/
  if (!passwordRegex.test(password.value)) {
    // Hata mesajı dil dosyasından çekiliyor
    errorMessage.value = t('docs.auth.register.errors.passwordWeak')
    return
  }

  try {
    authStore.register(name.value, email.value, password.value)
    // Kayıt sonrası doğru dilin ana sayfasına yönlendirme
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
        <h2>{{ t('docs.auth.register.title') }}</h2>
        <p>{{ t('docs.auth.register.subtitle') }}</p>
      </div>

      <div v-if="errorMessage" class="error-box">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="form-group">
          <label for="name">{{ t('docs.auth.register.nameLabel') }}</label>
          <input type="text" id="name" v-model="name" :placeholder="t('docs.auth.register.namePlaceholder')" required />
        </div>

        <div class="form-group">
          <label for="email">{{ t('docs.auth.emailLabel') }}</label>
          <input type="email" id="email" v-model="email" :placeholder="t('docs.auth.register.emailPlaceholder')" required />
        </div>
        
        <div class="form-group">
          <label for="password">{{ t('docs.auth.passwordLabel') }}</label>
          <input type="password" id="password" v-model="password" :placeholder="t('docs.auth.register.passwordPlaceholder')" required />
        </div>

        <div class="form-group">
          <label for="confirmPassword">{{ t('docs.auth.register.confirmPasswordLabel') }}</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" :placeholder="t('docs.auth.register.confirmPasswordPlaceholder')" required />
        </div>

        <button type="submit" class="btn-submit">{{ t('docs.auth.register.submitBtn') }}</button>
      </form>

      <p class="auth-footer">
        {{ t('docs.auth.register.footerText') }} <router-link :to="`/${locale}/login`">{{ t('docs.auth.register.footerLink') }}</router-link>
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
.error-box { background: rgba(239, 68, 68, 0.1); color: #ef4444; padding: 1rem; border-radius: 10px; border: 1px solid rgba(239, 68, 68, 0.2); margin-bottom: 1.5rem; font-size: 0.9rem; line-height: 1.4; }
.form-group { margin-bottom: 1.25rem; }
label { display: block; font-size: 0.9rem; font-weight: 500; color: var(--text-muted); margin-bottom: 0.5rem; text-align: start; }
input { width: 100%; padding: 0.75rem 1rem; border-radius: 10px; background: var(--input-bg); border: 1px solid var(--border-color); color: var(--text-main); font-size: 1rem; transition: 0.3s; text-align: start; }
input:focus { outline: none; border-color: var(--primary); }
.btn-submit { width: 100%; padding: 0.85rem; border-radius: 10px; background: var(--primary); color: white; border: none; font-weight: 600; font-size: 1rem; cursor: pointer; transition: 0.3s; margin-top: 0.5rem; }
.btn-submit:hover { filter: brightness(1.1); }
.auth-footer { text-align: center; font-size: 0.9rem; color: var(--text-muted); margin-top: 2rem; }
.auth-footer a { color: var(--primary); text-decoration: none; font-weight: 600; }
</style>