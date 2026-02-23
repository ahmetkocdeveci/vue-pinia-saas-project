<script setup>
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['set-ref', 'navigate'])
const { t } = useI18n()
</script>

<template>
  <div class="docs-page-content">
    <h1>{{ t('docs.pages.introduction') }}</h1>
    <p class="subtitle">{{ t('docs.intro.subtitle') }}</p>
    
    <div class="divider"></div>

    <p v-html="t('docs.intro.p1')"></p>
    <p>{{ t('docs.intro.p2') }}</p>
    
    <h2 id="key-features" :ref="(el) => emit('set-ref', el)">{{ t('docs.intro.keyFeaturesTitle') }}</h2>
    <p>{{ t('docs.intro.featuresDesc') }}</p>
    
    <ul>
      <li v-html="t('docs.intro.features.nuxt')"></li>
      <li v-html="t('docs.intro.features.ui')"></li>
      <li v-html="t('docs.intro.features.mdc')"></li>
      <li v-html="t('docs.intro.features.sidebar')"></li>
      <li v-html="t('docs.intro.features.search')"></li>
      <li v-html="t('docs.intro.features.typography')"></li>
      <li v-html="t('docs.intro.features.darkMode')"></li>
      <li v-html="t('docs.intro.features.extensive')"></li>
    </ul>

    <div class="docs-nav-cards right-only">
      <a href="#" class="docs-nav-card next" @click.prevent="emit('navigate', 'installation')">
        <div class="docs-nav-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </div>
        <span class="docs-nav-label">{{ t('docs.nav.next') }}</span>
        <h3>{{ t('docs.pages.installation') }}</h3>
        <p>{{ t('docs.searchDesc.installation') }}</p>
      </a>
    </div>
  </div>
</template>