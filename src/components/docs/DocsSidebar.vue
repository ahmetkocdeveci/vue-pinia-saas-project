<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({ currentPage: String })
const emit = defineEmits(['navigate', 'open-search'])

const openMenus = ref({ gettingStarted: true, essentials: true })
</script>

<template>
  <nav class="sidebar-nav">
    <button class="search-btn" @click="emit('open-search')">
      <div class="search-left">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="9" cy="9" r="6"></circle><line x1="13.5" y1="13.5" x2="18" y2="18"></line></svg>
        <span>{{ t('docs.searchPlaceholder') }}</span>
      </div>
      <div class="search-keys">
        <kbd>CTRL</kbd><kbd>K</kbd>
      </div>
    </button>

    <div class="nav-group">
      <button class="group-title" @click="openMenus.gettingStarted = !openMenus.gettingStarted">
        {{ t('docs.categories.gettingStarted') }}
        <svg :class="{ 'is-closed': !openMenus.gettingStarted }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <ul v-show="openMenus.gettingStarted" class="nav-list">
        <li>
          <a href="#" @click.prevent="emit('navigate', 'introduction')" class="nav-link" :class="{ 'active': currentPage === 'introduction' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            {{ t('docs.pages.introduction') }}
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="emit('navigate', 'installation')" class="nav-link" :class="{ 'active': currentPage === 'installation' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            {{ t('docs.pages.installation') }}
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="emit('navigate', 'usage')" class="nav-link" :class="{ 'active': currentPage === 'usage' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
            {{ t('docs.pages.usage') }}
          </a>
        </li>
      </ul>
    </div>

    <div class="nav-group">
      <button class="group-title" @click="openMenus.essentials = !openMenus.essentials">
        {{ t('docs.categories.essentials') }}
        <svg :class="{ 'is-closed': !openMenus.essentials }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <ul v-show="openMenus.essentials" class="nav-list">
        <li>
          <a href="#" @click.prevent="emit('navigate', 'markdown')" class="nav-link" :class="{ 'active': currentPage === 'markdown' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M4 12h8"></path><path d="M4 18V6"></path><path d="M12 18V6"></path><path d="M17 12h.01"></path><path d="M21 12h.01"></path></svg>
            {{ t('docs.pages.markdown') }}
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="emit('navigate', 'codeblocks')" class="nav-link" :class="{ 'active': currentPage === 'codeblocks' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            {{ t('docs.pages.codeblocks') }}
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="emit('navigate', 'prose')" class="nav-link" :class="{ 'active': currentPage === 'prose' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            {{ t('docs.pages.prose') }}
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="emit('navigate', 'images')" class="nav-link" :class="{ 'active': currentPage === 'images' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            {{ t('docs.pages.images') }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>

.sidebar-nav {
  padding-top: 1rem;
  padding-inline-end: 1rem; 
}

.search-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
  margin-bottom: 2rem;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  color: var(--text);
  cursor: pointer;
  transition: 0.2s;
}

.search-btn:hover {
  border-color: var(--text);
  color: var(--heading);
}

.search-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.search-keys {
  display: flex;
  gap: 0.25rem;
  margin-inline-start: auto; 
}

.search-keys kbd {
  font-family: monospace;
  font-size: 0.7rem;
  padding: 0.1rem 0.3rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
}

.nav-group {
  margin-bottom: 1.5rem;
}

.group-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0.5rem 0;
  cursor: pointer;
  color: var(--heading);
  font-weight: 600;
  font-size: 0.9rem;
}

.group-title svg {
  color: var(--text);
  transition: transform 0.2s;
}

.group-title svg.is-closed {
  transform: rotate(-90deg);
}

[dir="rtl"] .group-title svg.is-closed {
  transform: rotate(90deg);
}

.nav-list {
  list-style: none;
  padding: 0 0 0 0.75rem; 
  padding-block: 0;
  padding-inline-end: 0;
  padding-inline-start: 0.75rem;
  
  margin-block: 0.5rem 0;
  margin-inline-start: 0.25rem;
  margin-inline-end: 0;
  
  border-inline-start: 1px solid var(--border);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.75rem;
  margin-inline-start: -1px; 
  color: var(--text);
  text-decoration: none;
  font-size: 0.875rem;
  border-inline-start: 1px solid transparent; 
  transition: 0.2s;
}

.nav-link:hover {
  color: var(--heading);
  border-inline-start-color: var(--border);
}

.nav-link.active {
  color: var(--primary);
  border-inline-start-color: var(--primary);
  font-weight: 500;
  background: var(--primary-bg);
}
</style>