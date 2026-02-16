<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
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

const currentPage = ref('introduction')
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
const currentTitle = computed(() => pageTitles[currentPage.value])

const initObserver = () => {
  if (observer) observer.disconnect()
  
  observer = new IntersectionObserver((entries) => {
    let visibleHeadings = entries.filter(e => e.isIntersecting)
    if (visibleHeadings.length > 0) {
      activeHeading.value = visibleHeadings[0].target.id
    }
  }, { 
    rootMargin: '-80px 0px -60% 0px', 
    threshold: 0 
  })

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
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { 
    e.preventDefault() 
    isSearchOpen.value = true 
  }
  if (e.key === 'Escape') {
    isSearchOpen.value = false
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  initObserver()
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (observer) observer.disconnect()
})

watch(currentPage, () => {
  nextTick(() => {
    initObserver()
  })
})
</script>
<template>
  <div class="docs-page">
    
    <div class="mobile-top-nav">
      <button class="mobile-menu-btn" @click="isMobileMenuOpen = true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      <span class="mobile-page-title">{{ currentTitle }}</span>
      <button class="mobile-search-btn" @click="isSearchOpen = true">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="9" r="6"></circle><line x1="13.5" y1="13.5" x2="18" y2="18"></line></svg>
      </button>
    </div>

    <div v-if="isMobileMenuOpen" class="mobile-overlay" @click="isMobileMenuOpen = false"></div>

    <div class="container docs-layout">
      
      <div class="sidebar-wrapper" :class="{ 'is-mobile-open': isMobileMenuOpen }">
        <div class="mobile-drawer-header">
          <span class="drawer-title">Navigation</span>
          <button class="close-drawer-btn" @click="isMobileMenuOpen = false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <DocsSidebar :current-page="currentPage" @navigate="switchPage" @open-search="isSearchOpen = true" />
      </div>

      <main class="main-content">
        
        <div class="mobile-toc-accordion" :class="{ 'is-open': isMobileTocOpen }">
          <button class="mobile-toc-btn" @click="isMobileTocOpen = !isMobileTocOpen">
            <span>On this page</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="toc-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="mobile-toc-content" v-show="isMobileTocOpen">
            <DocsToc :current-page="currentPage" :active-heading="activeHeading" :is-mobile="true" />
          </div>
        </div>

        <transition name="fade" mode="out-in">
          <component 
            :is="currentContentComponent" 
            @set-ref="setHeadingRef" 
            @navigate="switchPage" 
          />
        </transition>
      </main>

      <div class="desktop-toc">
        <DocsToc :current-page="currentPage" :active-heading="activeHeading" />
      </div>

    </div>

    <DocsSearchModal :is-open="isSearchOpen" @close="isSearchOpen = false" @navigate="switchPage" />
  </div>
</template>
<style scoped>
.docs-page { 
  padding: 100px 0 80px 0; 
  min-height: 100vh; 
  background: transparent; 
  font-family: 'Inter', 'Public Sans', ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.docs-layout { display: flex; align-items: flex-start; max-width: 1400px; padding: 0 2rem; margin: 0 auto; gap: 4rem; }
.main-content { flex: 1; min-width: 0; max-width: 800px; padding-top: 1rem; }
.mobile-top-nav { display: none; position: sticky; top: 60px; z-index: 40; padding: 0.75rem 1.5rem; justify-content: space-between; align-items: center; backdrop-filter: blur(8px); }
.mobile-menu-btn, .mobile-search-btn { background: transparent; border: none; cursor: pointer; display: flex; align-items: center; }
.sidebar-wrapper { width: 240px; flex-shrink: 0; position: sticky; top: 100px; height: calc(100vh - 100px); overflow-y: auto; }
.mobile-drawer-header { display: none; padding: 1.5rem; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.close-drawer-btn { background: transparent; border: none; cursor: pointer; display: flex; align-items: center; }
.desktop-toc { display: block; width: 200px; flex-shrink: 0; position: sticky; top: 100px; height: calc(100vh - 100px); overflow-y: auto; padding-top: 1rem; }
.mobile-toc-accordion { display: none; border-radius: 8px; margin-bottom: 2rem; overflow: hidden; }
.mobile-toc-btn { width: 100%; display: flex; justify-content: space-between; align-items: center; background: transparent; border: none; padding: 1rem; font-weight: 600; font-size: 0.9rem; cursor: pointer; }
.mobile-top-nav { background: #ffffff; border-bottom: 1px solid #e2e8f0; }
.mobile-page-title, .drawer-title { color: #0f172a; font-weight: 600; }
.mobile-menu-btn, .mobile-search-btn, .close-drawer-btn { color: #64748b; }
.mobile-toc-accordion { background: #ffffff; border: 1px solid #e2e8f0; }
.mobile-toc-btn { color: #0f172a; }
.toc-chevron { color: #64748b; }

.main-content :deep(.content-header h1),
.main-content :deep(.prose h2),
.main-content :deep(.prose h3) { color: #0f172a; }
.main-content :deep(.content-header h1) { font-size: 2.25rem; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: -0.025em; }
.main-content :deep(.prose h2) { font-size: 1.5rem; font-weight: 600; margin: 3.5rem 0 1.5rem 0; padding-top: 1rem; border-top: 1px solid #e2e8f0; scroll-margin-top: 120px; letter-spacing: -0.02em; }
.main-content :deep(.prose h3) { scroll-margin-top: 120px; font-size: 1.25rem; font-weight: 600; margin: 2.5rem 0 1rem 0; padding-top: 0.5rem; letter-spacing: -0.01em; }
.main-content :deep(.prose h2:first-of-type) { border-top: none; padding-top: 0; margin-top: 0; }

.main-content :deep(.subtitle),
.main-content :deep(.prose p), 
.main-content :deep(.prose li) { color: #475569; }
.main-content :deep(.subtitle) { font-size: 1.125rem; margin: 0; line-height: 1.5; }
.main-content :deep(.prose p), .main-content :deep(.prose li) { line-height: 1.75; font-size: 1rem; margin-bottom: 1.5rem; }
.main-content :deep(.prose strong) { color: #1e293b; font-weight: 600; }
.main-content :deep(.prose a) { color: #38bdf8; text-decoration: none; font-weight: 500; }
.main-content :deep(.feature-list li::before) { content: ""; position: absolute; left: 0; top: 0.6rem; width: 6px; height: 6px; border-radius: 50%; background-color: #38bdf8; }

.main-content :deep(code), .main-content :deep(pre), .main-content :deep(kbd) { font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, monospace; }
.main-content :deep(.prose code:not(pre code)) { background-color: #f1f5f9; border: 1px solid #e2e8f0; color: #0f172a; padding: 0.15rem 0.375rem; border-radius: 0.375rem; font-size: 0.875em; }

.main-content :deep(.next-page-container) { display: flex; justify-content: space-between; align-items: stretch; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid #e2e8f0; gap: 1.5rem; }
.main-content :deep(.next-page-container.right-only) { justify-content: flex-end; }
.main-content :deep(.prev-card), .main-content :deep(.next-card) { display: flex; flex-direction: column; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; text-decoration: none; transition: 0.2s; width: 100%; max-width: calc(50% - 0.75rem); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
.main-content :deep(.prev-card:hover), .main-content :deep(.next-card:hover) { background: #f8fafc; border-color: #cbd5e1; }
.main-content :deep(.card-text h3) { color: #0f172a; font-size: 1rem; font-weight: 600; margin: 0; }
.main-content :deep(.card-text p) { color: #64748b; font-size: 0.85rem; margin: 0.25rem 0 0 0; }
.main-content :deep(.direction) { color: #64748b; font-size: 0.75rem; text-transform: uppercase; font-weight: 600; display: block; margin-bottom: 0.5rem; }
.main-content :deep(.icon-wrapper) { width: 36px; height: 36px; border-radius: 50%; background: #f1f5f9; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
.main-content :deep(.icon-wrapper svg) { width: 18px; height: 18px; color: #64748b; }

:global(.dark) .mobile-top-nav { background: #020617 !important; border-bottom-color: rgba(255,255,255,0.1) !important; }
:global(.dark) .mobile-page-title, :global(.dark) .drawer-title { color: #ffffff !important; }
:global(.dark) .mobile-menu-btn, :global(.dark) .mobile-search-btn, :global(.dark) .close-drawer-btn { color: #94a3b8 !important; }
:global(.dark) .mobile-toc-accordion { background: #0f172a !important; border-color: rgba(255,255,255,0.1) !important; }
:global(.dark) .mobile-toc-btn { color: #ffffff !important; }
:global(.dark) .toc-chevron { color: #94a3b8 !important; }

:global(.dark) .main-content :deep(.content-header h1),
:global(.dark) .main-content :deep(.prose h2),
:global(.dark) .main-content :deep(.prose h3) { color: #ffffff !important; }

:global(.dark) .main-content :deep(.prose h2) { border-top-color: rgba(255,255,255,0.1) !important; }

:global(.dark) .main-content :deep(.subtitle),
:global(.dark) .main-content :deep(.prose p), 
:global(.dark) .main-content :deep(.prose li) { color: #cbd5e1 !important; }

:global(.dark) .main-content :deep(.prose strong) { color: #f8fafc !important; }

:global(.dark) .main-content :deep(.prose code:not(pre code)) { background-color: rgba(30, 41, 59, 0.7) !important; border-color: rgba(51, 65, 85, 0.5) !important; color: #e2e8f0 !important; }

:global(.dark) .main-content :deep(.next-page-container) { border-top-color: rgba(255,255,255,0.1) !important; }
:global(.dark) .main-content :deep(.prev-card), 
:global(.dark) .main-content :deep(.next-card) { background: #0f172a !important; border-color: rgba(255,255,255,0.1) !important; box-shadow: none !important; }
:global(.dark) .main-content :deep(.prev-card:hover), 
:global(.dark) .main-content :deep(.next-card:hover) { background: rgba(255,255,255,0.05) !important; border-color: rgba(255,255,255,0.2) !important; }
:global(.dark) .main-content :deep(.card-text h3) { color: #ffffff !important; }
:global(.dark) .main-content :deep(.card-text p) { color: #94a3b8 !important; }
:global(.dark) .main-content :deep(.direction) { color: #94a3b8 !important; }
:global(.dark) .main-content :deep(.icon-wrapper) { background: rgba(255,255,255,0.05) !important; }
:global(.dark) .main-content :deep(.icon-wrapper svg) { color: #cbd5e1 !important; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 1024px) {
  .docs-layout { gap: 2rem; }
  .desktop-toc { display: none; }
  .mobile-toc-accordion { display: block; }
}
@media (max-width: 768px) {
  .docs-page { padding-top: 0; }
  .mobile-top-nav { display: flex; }
  .docs-layout { padding: 1.5rem; }
  .sidebar-wrapper { position: fixed; top: 0; left: 0; bottom: 0; width: 280px; background: #ffffff; z-index: 60; transform: translateX(-100%); transition: transform 0.3s ease; border-right: 1px solid #e2e8f0; }
  :global(.dark) .sidebar-wrapper { background: #020617 !important; border-right-color: rgba(255,255,255,0.1) !important; }
  .sidebar-wrapper.is-mobile-open { transform: translateX(0); }
  .mobile-drawer-header { display: flex; }
  .main-content { max-width: 100%; padding-top: 0; }
  .main-content :deep(.next-page-container) { flex-direction: column; }
  .main-content :deep(.prev-card), .main-content :deep(.next-card) { max-width: 100%; }
}
</style>