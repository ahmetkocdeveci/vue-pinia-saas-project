<script setup>
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['set-ref', 'navigate'])
const { t } = useI18n()
</script>

<template>
  <div class="docs-page-content">
    <h1>{{ t('docs.pages.installation') }}</h1>
    <p class="subtitle">{{ t('docs.install.subtitle') }}</p>
    
    <div class="divider"></div>

    <h2 id="quick-start" :ref="(el) => emit('set-ref', el)">{{ t('docs.install.quickStartTitle') }}</h2>
    <p>{{ t('docs.install.startFresh') }}</p>

    <div class="docs-code-block">
      <div class="docs-code-header">
        <span class="docs-code-title">{{ t('docs.install.terminal') }}</span>
        <button class="docs-code-copy">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        </button>
      </div>
      <pre><code>npx nuxi init -t github:nuxt-ui-templates/saas</code></pre>
    </div>

    <p>{{ t('docs.install.orCreate') }}</p>

    <ol>
      <li>{{ t('docs.install.steps.step1') }} <a href="https://github.com/nuxt-ui-templates/saas" target="_blank">https://github.com/nuxt-ui-templates/saas</a></li>
      <li v-html="t('docs.install.steps.step2')"></li>
      <li v-html="t('docs.install.steps.step3')"></li>
      <li>{{ t('docs.install.steps.step4') }}</li>
      <li>{{ t('docs.install.steps.step5') }}</li>
      <li>{{ t('docs.install.steps.step6') }}</li>
    </ol>

    <p v-html="t('docs.install.thatsIt')"></p>

    <div class="docs-nav-cards">
      <a href="#" class="docs-nav-card prev" @click.prevent="emit('navigate', 'introduction')">
        <div class="docs-nav-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </div>
        <span class="docs-nav-label">{{ t('docs.nav.previous') }}</span>
        <h3>{{ t('docs.pages.introduction') }}</h3>
        <p>{{ t('docs.searchDesc.introduction') }}</p>
      </a>

      <a href="#" class="docs-nav-card next" @click.prevent="emit('navigate', 'usage')">
        <div class="docs-nav-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
        </div>
        <span class="docs-nav-label">{{ t('docs.nav.next') }}</span>
        <h3>{{ t('docs.pages.usage') }}</h3>
        <p>{{ t('docs.searchDesc.usage') }}</p>
      </a>
    </div>
  </div>
</template>