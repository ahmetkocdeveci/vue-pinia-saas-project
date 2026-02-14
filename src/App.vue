<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-layout">
    <AppNavbar />
    <main class="content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style>
.app-layout { display: flex; flex-direction: column; min-height: 100vh; }
.content { flex: 1; }
</style>