<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/useAuth'

const router = useRouter()
const authStore = useAuthStore()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')

const handleRegister = () => {
  errorMessage.value = ''

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match.'
    return
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/
  if (!passwordRegex.test(password.value)) {
    errorMessage.value = 'Password must be at least 8 characters long, include 1 uppercase letter, 1 lowercase letter, and 1 special character.'
    return
  }

  try {
    authStore.register(name.value, email.value, password.value)
    router.push('/')
  } catch (error) {
    errorMessage.value = error.message
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card glass">
      <div class="auth-header">
        <h2>Create an Account</h2>
        <p>Start your project in seconds.</p>
      </div>

      <div v-if="errorMessage" class="error-box">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" v-model="name" placeholder="John Doe" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="name@company.com" required />
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="At least 8 characters" required />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm your password" required />
        </div>

        <button type="submit" class="btn-submit">Sign Up</button>
      </form>

      <p class="auth-footer">
        Already have an account? <router-link to="/login">Sign In</router-link>
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
label { display: block; font-size: 0.9rem; font-weight: 500; color: var(--text-muted); margin-bottom: 0.5rem; }
input { width: 100%; padding: 0.75rem 1rem; border-radius: 10px; background: var(--input-bg); border: 1px solid var(--border-color); color: var(--text-main); font-size: 1rem; transition: 0.3s; }
input:focus { outline: none; border-color: var(--primary); }
.btn-submit { width: 100%; padding: 0.85rem; border-radius: 10px; background: var(--primary); color: white; border: none; font-weight: 600; font-size: 1rem; cursor: pointer; transition: 0.3s; margin-top: 0.5rem; }
.btn-submit:hover { filter: brightness(1.1); }
.auth-footer { text-align: center; font-size: 0.9rem; color: var(--text-muted); margin-top: 2rem; }
.auth-footer a { color: var(--primary); text-decoration: none; font-weight: 600; }
</style>