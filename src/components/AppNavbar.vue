<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/useAuth'

const authStore = useAuthStore()
const router = useRouter()
const isDark = ref(true)
const showDropdown = ref(false)
const isMobileMenuOpen = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

const handleLogout = () => {
  authStore.logout()
  showDropdown.value = false
  isMobileMenuOpen.value = false
  router.push('/login')
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  isDark.value = savedTheme === 'dark'
  document.documentElement.setAttribute('data-theme', savedTheme)
})
</script>

<template>
  <nav class="navbar glass">
    <div class="container nav-content">
      <div class="logo">
        <router-link to="/" @click="closeMobileMenu">SaaS<span>App</span></router-link>
      </div>
      
      <div class="desktop-menu">
        <div class="nav-links">
          <router-link to="/docs">Docs</router-link>
          <router-link to="/pricing">Pricing</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/changelog">Changelog</router-link>
        </div>

        <div class="nav-actions">
          <button @click="toggleTheme" class="btn-theme" :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>

          <template v-if="authStore.currentUser">
            <div class="user-menu" @click="showDropdown = !showDropdown">
              <img :src="authStore.currentUser.avatar" alt="User Avatar" class="avatar" />
              <div v-if="showDropdown" class="dropdown-menu glass">
                <div class="user-info">
                  <strong>{{ authStore.currentUser.name }}</strong>
                  <span>{{ authStore.currentUser.email }}</span>
                </div>
                <button @click="handleLogout" class="btn-logout">Log Out</button>
              </div>
            </div>
          </template>

          <template v-else>
            <router-link to="/login" class="btn-login">Sign in</router-link>
            <router-link to="/register" class="btn-signup">Sign up →</router-link>
          </template>
        </div>
      </div>

      <button class="hamburger" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>

    <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
      <div class="mobile-nav-links">
        <router-link to="/docs" @click="closeMobileMenu">Docs</router-link>
        <router-link to="/pricing" @click="closeMobileMenu">Pricing</router-link>
        <router-link to="/blog" @click="closeMobileMenu">Blog</router-link>
        <router-link to="/changelog" @click="closeMobileMenu">Changelog</router-link>
      </div>

      <div class="mobile-nav-actions">
        <button @click="toggleTheme" class="mobile-theme-btn">
          <span v-if="isDark">☀️ Switch to Light Mode</span>
          <span v-else>🌙 Switch to Dark Mode</span>
        </button>

        <template v-if="authStore.currentUser">
          <div class="mobile-user-info">
            <img :src="authStore.currentUser.avatar" alt="User Avatar" class="avatar" />
            <div class="info-text">
              <strong>{{ authStore.currentUser.name }}</strong>
              <span>{{ authStore.currentUser.email }}</span>
            </div>
          </div>
          <button @click="handleLogout" class="btn-logout">Log Out</button>
        </template>

        <template v-else>
          <router-link to="/login" class="btn-login-mobile" @click="closeMobileMenu">Sign in</router-link>
          <router-link to="/register" class="btn-signup-mobile" @click="closeMobileMenu">Sign up</router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar { position: fixed; top: 0; left: 0; width: 100%; height: 64px; z-index: 1000; display: flex; align-items: center; border-bottom: 1px solid var(--border-color); background-color: var(--nav-bg); transition: background-color 0.3s ease, border-color 0.3s ease; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
.nav-content { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 1001; }
.logo a { font-size: 1.25rem; font-weight: 800; text-decoration: none; color: var(--text-main); white-space: nowrap; }
.logo span { color: var(--primary); }
.desktop-menu { display: flex; width: 100%; justify-content: space-between; align-items: center; margin-left: 3rem; }
.nav-links { display: flex; gap: 2rem; align-items: center; }
.nav-links a { color: var(--text-muted); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: 0.3s; white-space: nowrap; }
.nav-links a:hover, .nav-links a.router-link-active { color: var(--text-main); }
.nav-actions { display: flex; gap: 1rem; align-items: center; }
.btn-theme { display: flex; align-items: center; justify-content: center; background: transparent; color: var(--text-muted); border: none; cursor: pointer; padding: 0.5rem; border-radius: 8px; transition: 0.3s; }
.btn-theme:hover { color: var(--text-main); background: var(--glass-bg); }
.btn-login { background: transparent; color: var(--text-main); border: none; font-weight: 600; cursor: pointer; font-size: 0.9rem; text-decoration: none; }
.btn-signup { background: var(--text-main); color: var(--bg-color); padding: 0.5rem 1rem; border-radius: 8px; border: none; font-weight: 700; cursor: pointer; font-size: 0.9rem; text-decoration: none; white-space: nowrap; transition: 0.3s; }
.btn-signup:hover { opacity: 0.9; }
.user-menu { position: relative; cursor: pointer; }
.avatar { width: 36px; height: 36px; border-radius: 50%; border: 2px solid var(--primary); object-fit: cover; }
.dropdown-menu { position: absolute; top: 50px; right: 0; width: 220px; border-radius: 12px; border: 1px solid var(--border-color); padding: 1rem; display: flex; flex-direction: column; gap: 1rem; z-index: 1001; }
.user-info { display: flex; flex-direction: column; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; }
.user-info strong { font-size: 0.95rem; color: var(--text-main); }
.user-info span { font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem; }
.btn-logout { background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2); padding: 0.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.3s; width: 100%; text-align: center; }
.btn-logout:hover { background: #ef4444; color: white; }
.hamburger { display: none; background: transparent; border: none; color: var(--text-main); cursor: pointer; padding: 0.5rem; z-index: 1002; }
.mobile-menu { display: none; }

@media (max-width: 768px) { 
  .desktop-menu { display: none; }
  .hamburger { display: block; }
  .mobile-menu { display: flex; flex-direction: column; position: absolute; top: 64px; left: 0; width: 100%; background-color: var(--nav-bg); border-bottom: 1px solid var(--border-color); padding: 1.5rem 20px; transform: translateY(-150%); opacity: 0; pointer-events: none; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); z-index: 999; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
  .mobile-menu.is-open { transform: translateY(0); opacity: 1; pointer-events: auto; }
  .mobile-nav-links { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; }
  .mobile-nav-links a { color: var(--text-main); text-decoration: none; font-size: 1.1rem; font-weight: 600; }
  .mobile-nav-actions { display: flex; flex-direction: column; gap: 1rem; }
  .mobile-theme-btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: var(--glass-bg); color: var(--text-main); border: 1px solid var(--border-color); padding: 0.8rem; border-radius: 8px; font-weight: 600; cursor: pointer; }
  .btn-login-mobile { text-align: center; color: var(--text-main); text-decoration: none; font-weight: 600; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; }
  .btn-signup-mobile { text-align: center; background: var(--text-main); color: var(--bg-color); padding: 0.8rem; border-radius: 8px; font-weight: 700; text-decoration: none; }
  .mobile-user-info { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; padding: 1rem; background: var(--glass-bg); border-radius: 8px; border: 1px solid var(--border-color); }
  .info-text { display: flex; flex-direction: column; }
  .info-text strong { color: var(--text-main); font-size: 1rem; }
  .info-text span { color: var(--text-muted); font-size: 0.85rem; }
}
</style>