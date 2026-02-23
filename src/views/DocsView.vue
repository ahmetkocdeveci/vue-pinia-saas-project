<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsSidebar from '../components/docs/DocsSidebar.vue'
import DocsToc from '../components/docs/DocsToc.vue'
import DocsSearchModal from '../components/docs/DocsSearchModal.vue'
import IntroPage from '../components/docs/pages/IntroPage.vue'
import InstallPage from '../components/docs/pages/InstallPage.vue'
import UsagePage from '../components/docs/pages/UsagePage.vue'
import MarkdownPage from '../components/docs/pages/MarkdownPage.vue'
import CodeBlocksPage from '../components/docs/pages/CodeBlocksPage.vue'
import ProsePage from '../components/docs/pages/ProsePage.vue'
import ImagesPage from '../components/docs/pages/ImagesPage.vue'

const { t } = useI18n()

const currentPage = ref('installation')
const activeHeading = ref('')
const headingRefs = ref([])
const isSearchOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileTocOpen = ref(false)
let observer = null

const pages = {
  introduction: IntroPage,
  installation: InstallPage,
  usage: UsagePage,
  markdown: MarkdownPage,
  codeblocks: CodeBlocksPage,
  prose: ProsePage,
  images: ImagesPage
}

const pageTitles = {
  introduction: 'Introduction',
  installation: 'Installation',
  usage: 'Usage',
  markdown: 'Markdown Syntax',
  codeblocks: 'Code Blocks',
  prose: 'Prose Components',
  images: 'Images and Embeds'
}

const currentContentComponent = computed(() => pages[currentPage.value])
const currentTitle = computed(() => t(`docs.pages.${currentPage.value}`))

const initObserver = () => {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver((entries) => {
    let visibleHeadings = entries.filter(e => e.isIntersecting)
    if (visibleHeadings.length > 0) activeHeading.value = visibleHeadings[0].target.id
  }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 })
  headingRefs.value.forEach(el => observer.observe(el))
}

const switchPage = async (page) => {
  if (!pages[page]) return
  currentPage.value = page
  headingRefs.value = []
  isMobileMenuOpen.value = false
  isMobileTocOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
  const defaultHeadings = { 
    introduction: 'key-features', 
    installation: 'quick-start',
    usage: 'writing-content',
    markdown: 'titles',
    codeblocks: 'inline-code',
    prose: 'accordion',
    images: 'image'
  }
  activeHeading.value = defaultHeadings[page] || ''
}

const setHeadingRef = (el) => {
  if (el && !headingRefs.value.includes(el)) {
    headingRefs.value.push(el)
    if (observer) observer.observe(el)
  }
}

const handleKeydown = (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); isSearchOpen.value = true }
  if (e.key === 'Escape') { isSearchOpen.value = false; isMobileMenuOpen.value = false }
}

onMounted(() => { window.addEventListener('keydown', handleKeydown); initObserver() })
onUnmounted(() => { window.removeEventListener('keydown', handleKeydown); if (observer) observer.disconnect() })
watch(currentPage, () => { nextTick(() => initObserver()) })
</script>

<template>
  <div class="docs-wrapper">
    <div class="mobile-header">
      <button class="icon-btn" @click="isMobileMenuOpen = true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      <span class="mobile-title">{{ currentTitle }}</span>
      <button class="icon-btn" @click="isSearchOpen = true">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><circle cx="9" cy="9" r="6"></circle><line x1="13.5" y1="13.5" x2="18" y2="18"></line></svg>
      </button>
    </div>

    <div class="mobile-overlay" v-if="isMobileMenuOpen" @click="isMobileMenuOpen = false"></div>

    <div class="docs-container">
      <aside class="docs-sidebar" :class="{ 'is-open': isMobileMenuOpen }">
        <div class="sidebar-mobile-header">
          <span>{{ t('docs.navigation') }}</span>
          <button class="icon-btn" @click="isMobileMenuOpen = false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <DocsSidebar :current-page="currentPage" @navigate="switchPage" @open-search="isSearchOpen = true" />
      </aside>

      <main class="docs-main">
        <div class="mobile-toc-box" :class="{ 'is-open': isMobileTocOpen }">
          <button class="mobile-toc-btn" @click="isMobileTocOpen = !isMobileTocOpen">
            <span>{{ t('docs.onThisPage') }}</span>
            <svg class="chevron" :class="{ 'open': isMobileTocOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="mobile-toc-content" v-show="isMobileTocOpen">
            <DocsToc :current-page="currentPage" :active-heading="activeHeading" :is-mobile="true" />
          </div>
        </div>

        <transition name="fade" mode="out-in">
          <component :is="currentContentComponent" @set-ref="setHeadingRef" @navigate="switchPage" />
        </transition>
      </main>

      <aside class="docs-toc-column">
        <DocsToc :current-page="currentPage" :active-heading="activeHeading" />
      </aside>
    </div>
    <DocsSearchModal :is-open="isSearchOpen" @close="isSearchOpen = false" @navigate="switchPage" />
  </div>
</template>

<style>
:root {
  --bg: #ffffff;
  --text: #475569;
  --heading: #0f172a;
  --border: #e2e8f0;
  --primary: #42b883;
  --primary-bg: rgba(66, 184, 131, 0.1);
  --card-bg: #ffffff;
  --card-hover: #f8fafc;
  --code-bg: #f8fafc;
  --code-header: #f1f5f9;
  --code-border: #e2e8f0;
  --code-text: #0f172a;
  --icon-bg: #f1f5f9;
}

html.dark, html[data-theme="dark"], .dark {
  --bg: #020420;
  --text: #94a3b8;
  --heading: #ffffff;
  --border: #1e293b;
  --card-bg: #0f172a;
  --card-hover: #1e293b;
  --code-bg: #0f172a;
  --code-header: rgba(15, 23, 42, 0.5);
  --code-border: #1e293b;
  --code-text: #e2e8f0;
  --icon-bg: #1e293b;
}
</style>
<style scoped>
.docs-wrapper {
  background-color: var(--bg);
  color: var(--text);
  min-height: 100vh;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  padding-top: 60px;
  -webkit-font-smoothing: antialiased;
}

.docs-container {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding-inline: 2rem; 
  gap: 3rem;
  align-items: flex-start;
}

.docs-sidebar {
  width: 250px;
  flex-shrink: 0;
  position: sticky;
  top: 90px;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
  padding-bottom: 2rem;
}

.docs-toc-column {
  width: 210px;
  flex-shrink: 0;
  position: sticky;
  top: 90px;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
}

.docs-main {
  flex: 1;
  min-width: 0;
  padding-top: 1.5rem;
  padding-bottom: 10rem;
}

.mobile-header { 
  display: none; 
  position: fixed; 
  top: 60px; 
  inset-inline: 0; 
  z-index: 40; 
  background: var(--bg); 
  border-bottom: 1px solid var(--border); 
  padding: 0.75rem 1.5rem; 
  justify-content: space-between; 
  align-items: center; 
}
.icon-btn { background: transparent; border: none; color: var(--text); cursor: pointer; display: flex; align-items: center; padding: 0; }
.mobile-title { color: var(--heading); font-weight: 600; font-size: 0.95rem; }
.mobile-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px); z-index: 50; }
.sidebar-mobile-header { display: none; padding: 1.5rem; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); color: var(--heading); font-weight: 600; font-size: 1.1rem; }
.mobile-toc-box { display: none; background: var(--card-bg); border: 1px solid var(--border); border-radius: 8px; margin-bottom: 2rem; overflow: hidden; }
.mobile-toc-btn { width: 100%; display: flex; justify-content: space-between; align-items: center; background: transparent; border: none; padding: 1rem; color: var(--heading); font-weight: 600; font-size: 0.9rem; cursor: pointer; }
.chevron { color: var(--text); transition: transform 0.3s; }
.chevron.open { transform: rotate(180deg); }
.mobile-toc-content { padding: 0 1rem 1rem 1rem; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.docs-wrapper :deep(.docs-page-content h1) { font-size: 2.25rem; font-weight: 800; color: var(--heading); margin: 0 0 1rem 0; letter-spacing: -0.025em; }
.docs-wrapper :deep(.docs-page-content .subtitle) { font-size: 1.125rem; color: var(--text); margin: 0 0 2.5rem 0; line-height: 1.6; }
.docs-wrapper :deep(.docs-page-content .divider) { border-top: 1px solid var(--border); margin: 2.5rem 0; }
.docs-wrapper :deep(.docs-page-content h2) { font-size: 1.5rem; font-weight: 700; color: var(--heading); margin: 3.5rem 0 1.5rem 0; scroll-margin-top: 100px; }
.docs-wrapper :deep(.docs-page-content p) { line-height: 1.75; margin-bottom: 1.5rem; font-size: 1rem; color: var(--text); }
.docs-wrapper :deep(.docs-page-content a) { color: var(--primary); text-decoration: none; font-weight: 500; }
.docs-wrapper :deep(.docs-page-content a:hover) { text-decoration: underline; }
.docs-wrapper :deep(.docs-page-content strong) { color: var(--heading); font-weight: 600; }

.docs-wrapper :deep(.docs-page-content ul) { list-style: none; padding: 0; margin: 0 0 2rem 0; }
.docs-wrapper :deep(.docs-page-content ul li) { position: relative; padding-inline-start: 1.5rem; margin-bottom: 0.75rem; line-height: 1.6; color: var(--text); }
.docs-wrapper :deep(.docs-page-content ul li::before) { 
  content: ""; 
  position: absolute; 
  inset-inline-start: 0; 
  top: 0.65rem; 
  width: 5px; 
  height: 5px; 
  border-radius: 50%; 
  background-color: var(--primary); 
}
.docs-wrapper :deep(.docs-page-content ol) { list-style-type: decimal; padding-inline-start: 1.25rem; margin: 0 0 2rem 0; color: var(--text); }
.docs-wrapper :deep(.docs-page-content ol li) { margin-bottom: 0.75rem; line-height: 1.6; padding-inline-start: 0.5rem; color: var(--text); }

.docs-wrapper :deep(.docs-page-content code.inline-code) { background-color: var(--code-header); border: 1px solid var(--code-border); color: var(--text); padding: 0.15rem 0.375rem; border-radius: 0.375rem; font-size: 0.875em; font-family: monospace; }
.docs-wrapper :deep(.docs-code-block) { background-color: var(--code-bg); border: 1px solid var(--code-border); border-radius: 0.5rem; margin: 1.5rem 0 2.5rem 0; overflow: hidden; }
.docs-wrapper :deep(.docs-code-header) { background-color: var(--code-header); border-bottom: 1px solid var(--code-border); display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 1rem; }
.docs-wrapper :deep(.docs-code-title) { color: var(--text); font-size: 0.85rem; font-family: monospace; display: flex; align-items: center; gap: 0.5rem; }
.docs-wrapper :deep(.docs-code-copy) { background: transparent; border: none; color: var(--text); cursor: pointer; display: flex; padding: 0.25rem; border-radius: 0.25rem; transition: 0.2s; }
.docs-wrapper :deep(.docs-code-copy:hover) { color: var(--heading); background: var(--card-hover); }
.docs-wrapper :deep(.docs-code-block pre) { margin: 0; padding: 1.25rem 1rem; overflow-x: auto; }
.docs-wrapper :deep(.docs-code-block code) { color: var(--primary); font-size: 0.875rem; line-height: 1.5; font-family: monospace; }

.docs-wrapper :deep(.docs-nav-cards) { margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; gap: 1.5rem; }
.docs-wrapper :deep(.docs-nav-cards.right-only) { justify-content: flex-end; }
.docs-wrapper :deep(.docs-nav-card) { display: flex; flex-direction: column; width: 100%; max-width: calc(50% - 0.75rem); padding: 1.5rem; border-radius: 12px; background: var(--card-bg); border: 1px solid var(--border); text-decoration: none !important; transition: 0.2s; }
.docs-wrapper :deep(.docs-nav-cards.right-only .docs-nav-card) { max-width: 320px; }

.docs-wrapper :deep(.docs-nav-card.prev) { align-items: flex-start; text-align: start; }
.docs-wrapper :deep(.docs-nav-card.next) { align-items: flex-end; text-align: end; }

.docs-wrapper :deep(.docs-nav-card:hover) { background: var(--card-hover); border-color: var(--primary); }
.docs-wrapper :deep(.docs-nav-icon) { width: 40px; height: 40px; border-radius: 50%; margin-bottom: 1rem; background: var(--icon-bg); display: flex; align-items: center; justify-content: center; color: var(--heading); }
.docs-wrapper :deep(.docs-nav-label) { font-size: 0.75rem; text-transform: uppercase; font-weight: 600; color: var(--text); margin-bottom: 0.25rem; }
.docs-wrapper :deep(.docs-nav-card h3) { font-size: 1rem; font-weight: 600; color: var(--heading); margin: 0; }
.docs-wrapper :deep(.docs-nav-card p) { font-size: 0.85rem; color: var(--text); margin: 0.25rem 0 0 0; }

@media (max-width: 1024px) {
  .docs-container { gap: 2rem; }
  .docs-toc-column { display: none; }
  .mobile-toc-box { display: block; }
}

@media (max-width: 768px) {
  .docs-wrapper { padding-top: 110px; }
  .mobile-header { display: flex; }
  .docs-container { padding: 1rem; }
  
  .docs-sidebar { 
    position: fixed; 
    top: 0; 
    inset-inline-start: 0; 
    bottom: 0; 
    width: 280px; 
    height: 100vh; 
    background: var(--bg); 
    z-index: 60; 
    transform: translateX(-100%); 
    transition: transform 0.3s ease; 
    border-inline-end: 1px solid var(--border); 
    padding-bottom: 0; 
  }
  .docs-sidebar.is-open { transform: translateX(0) !important; }
  .sidebar-mobile-header { display: flex; }
  .docs-wrapper :deep(.docs-nav-cards) { flex-direction: column; }
  .docs-wrapper :deep(.docs-nav-card) { max-width: 100%; }
  .docs-wrapper :deep(.docs-nav-cards.right-only .docs-nav-card) { max-width: 100%; }
}
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--text); }
@media (max-width: 768px) {
  [dir="rtl"] .docs-sidebar {
    transform: translateX(100%);
  }
}
</style>