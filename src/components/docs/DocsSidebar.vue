<script setup>
import { ref } from 'vue'

defineProps({
  currentPage: String
})

const emit = defineEmits(['navigate', 'open-search'])

const openMenus = ref({
  gettingStarted: true,
  essentials: true
})
</script>

<template>
  <aside class="sidebar-left">
    <div class="search-box" @click="emit('open-search')">
      <div class="search-left">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon"><circle cx="9" cy="9" r="6"></circle><line x1="13.5" y1="13.5" x2="18" y2="18"></line></svg>
        <span>Search...</span>
      </div>
      <div class="search-shortcut"><kbd>CTRL</kbd> <kbd>K</kbd></div>
    </div>

    <nav class="sidebar-nav">
      <div class="nav-group">
        <div class="nav-group-header" @click="openMenus.gettingStarted = !openMenus.gettingStarted">
          <h3>Getting Started</h3>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron" :class="{ 'is-closed': !openMenus.gettingStarted }"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        <transition name="menu-slide">
          <ul v-show="openMenus.gettingStarted" class="nav-list">
            <li>
              <a href="#" :class="{ active: currentPage === 'introduction' }" @click.prevent="emit('navigate', 'introduction')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nav-icon"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                Introduction
              </a>
            </li>
            <li>
              <a href="#" :class="{ active: currentPage === 'installation' }" @click.prevent="emit('navigate', 'installation')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nav-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Installation
              </a>
            </li>
            <li>
              <a href="#" :class="{ active: currentPage === 'usage' }" @click.prevent="emit('navigate', 'usage')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nav-icon"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                Usage
              </a>
            </li>
          </ul>
        </transition>
      </div>

      <div class="nav-group">
        <div class="nav-group-header" @click="openMenus.essentials = !openMenus.essentials">
          <h3>Essentials</h3>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron" :class="{ 'is-closed': !openMenus.essentials }"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        <transition name="menu-slide">
          <ul v-show="openMenus.essentials" class="nav-list">
            <li>
              <a href="#" :class="{ active: currentPage === 'markdown' }" @click.prevent="emit('navigate', 'markdown')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nav-icon"><path d="M4 12h8"></path><path d="M4 18V6"></path><path d="M12 18V6"></path><path d="M17 12h.01"></path><path d="M21 12h.01"></path></svg>
                Markdown Syntax
              </a>
            </li>
            <li>
              <a href="#" :class="{ active: currentPage === 'codeblocks' }" @click.prevent="emit('navigate', 'codeblocks')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nav-icon"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                Code Blocks
              </a>
            </li>
            <li>
              <a href="#" :class="{ active: currentPage === 'prose' }" @click.prevent="emit('navigate', 'prose')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nav-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Prose Components
              </a>
            </li>
            <li>
              <a href="#" :class="{ active: currentPage === 'images' }" @click.prevent="emit('navigate', 'images')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nav-icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                Images and Embeds
              </a>
            </li>
          </ul>
        </transition>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar-left { width: 100%; }
.search-box { display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); padding: 0.5rem 0.75rem; border-radius: 8px; margin-bottom: 2rem; cursor: pointer; transition: 0.2s; }
.search-box:hover { border-color: rgba(255, 255, 255, 0.2); }
.search-left { display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted); font-size: 0.9rem; }
.search-icon { width: 16px; height: 16px; }
.search-shortcut { display: flex; gap: 0.25rem; }
.search-shortcut kbd { background: rgba(255, 255, 255, 0.1); color: var(--text-muted); font-size: 0.7rem; padding: 0.1rem 0.3rem; border-radius: 4px; font-family: monospace; font-weight: 600; }
.nav-group { margin-bottom: 1.5rem; }
.nav-group-header { display: flex; justify-content: space-between; align-items: center; cursor: pointer; margin-bottom: 0.5rem; padding-right: 0.5rem; }
.nav-group-header h3 { font-size: 0.9rem; font-weight: 600; color: var(--text-main); margin: 0; }
.chevron { width: 16px; height: 16px; color: var(--text-muted); transition: transform 0.3s ease; }
.chevron.is-closed { transform: rotate(-90deg); }
.menu-slide-enter-active, .menu-slide-leave-active { transition: all 0.3s ease-in-out; max-height: 500px; opacity: 1; overflow: hidden; }
.menu-slide-enter-from, .menu-slide-leave-to { max-height: 0; opacity: 0; overflow: hidden; }
.nav-list { list-style: none; padding: 0; margin: 0; border-left: 1px solid rgba(255, 255, 255, 0.1); margin-left: 0.5rem; }
.nav-list li { margin-bottom: 0.1rem; }
.nav-list a { display: flex; align-items: center; gap: 0.75rem; padding: 0.4rem 0.75rem; color: var(--text-muted); text-decoration: none; font-size: 0.9rem; border-radius: 6px; transition: 0.2s; margin-left: -1px; border-left: 1px solid transparent; }
.nav-list a:hover { color: var(--text-main); }
.nav-list a.active { color: var(--primary); border-left-color: var(--primary); background: rgba(56, 189, 248, 0.05); font-weight: 500; }
.nav-icon { width: 16px; height: 16px; flex-shrink: 0; opacity: 0.7; }
.nav-list a.active .nav-icon { opacity: 1; }
</style>