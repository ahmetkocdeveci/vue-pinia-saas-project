<script setup>
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['set-ref', 'navigate'])
const { t } = useI18n()
</script>

<template>
  <div class="docs-page-content">
    <h1>{{ t('docs.pages.usage') }}</h1>
    <p class="subtitle">{{ t('docs.usage.subtitle') }}</p>
    
    <div class="divider"></div>

    <h2 id="writing-content" :ref="(el) => emit('set-ref', el)">{{ t('docs.usage.writingContentTitle') }}</h2>
    <p v-html="t('docs.usage.p1')"></p>
    
    <p>{{ t('docs.usage.p2') }}</p>

    <div class="docs-nav-cards">
      <a href="#" class="docs-nav-card prev" @click.prevent="emit('navigate', 'installation')">
        <div class="docs-nav-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </div>
        <span class="docs-nav-label">{{ t('docs.nav.previous') }}</span>
        <h3>{{ t('docs.pages.installation') }}</h3>
        <p>{{ t('docs.searchDesc.installation') }}</p>
      </a>

      <a href="#" class="docs-nav-card next" @click.prevent="emit('navigate', 'markdown')">
        <div class="docs-nav-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M4 12h8"></path><path d="M4 18V6"></path><path d="M12 18V6"></path><path d="M17 12h.01"></path><path d="M21 12h.01"></path></svg>
        </div>
        <span class="docs-nav-label">{{ t('docs.nav.next') }}</span>
        <h3>{{ t('docs.usage.markdownTitle') }}</h3>
        <p>{{ t('docs.usage.markdownDesc') }}</p>
      </a>
    </div>
  </div>
</template>