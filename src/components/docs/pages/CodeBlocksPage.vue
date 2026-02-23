<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['set-ref', 'navigate'])
const { t } = useI18n()

const activeGroupTab = ref('pnpm')
const isCollapsed = ref(true)
</script>

<template>
  <div class="docs-page-content">
    <header class="page-head">
      <h1>{{ t('docs.pages.codeblocks') }}</h1>
      <p class="subtitle">{{ t('docs.searchDesc.codeblocks') }}</p>
    </header>

    <div class="divider"></div>

    <h2 id="basic" :ref="(el) => emit('set-ref', el)">{{ t('docs.codeblocks.basicTitle') }}</h2>

    <h3 id="inline-code" :ref="(el) => emit('set-ref', el)">{{ t('docs.codeblocks.inlineCodeTitle') }}</h3>
    <p>{{ t('docs.codeblocks.inlineCodeDesc') }}</p>
    
    <div class="preview-box">
      <div class="preview-display">
        <code class="inline-code">inline code</code>
      </div>
      <div class="preview-code">
        <code>`inline code`</code>
      </div>
    </div>

    <h3 id="code-blocks" :ref="(el) => emit('set-ref', el)">{{ t('docs.codeblocks.codeBlocksTitle') }}</h3>
    <p>{{ t('docs.codeblocks.codeBlocksDesc') }}</p>

    <div class="docs-code-block">
      <pre><code>export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})</code></pre>
    </div>

    <p>{{ t('docs.codeblocks.filenameDesc') }}</p>

    <div class="docs-code-block">
      <div class="docs-code-header">
        <span class="docs-code-title">nuxt.config.ts</span>
        <button class="docs-code-copy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>
      </div>
      <pre><code>export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})</code></pre>
    </div>

    <p>{{ t('docs.codeblocks.copyBtnDesc') }}</p>

    <h3 id="highlight-line" :ref="(el) => emit('set-ref', el)">{{ t('docs.codeblocks.highlightLineTitle') }}</h3>
    <p v-html="t('docs.codeblocks.highlightLineDesc')"></p>

    <div class="docs-code-block">
      <div class="docs-code-header">
        <span class="docs-code-title">nuxt.config.ts</span>
      </div>
      <pre><code>export default defineAppConfig({
  ui: {
<span class="highlighted-line">    icons: {
      copy: 'i-lucide-copy',</span>
      copyCheck: 'i-lucide-copy-check'
    }
  }
})</code></pre>
    </div>

    <div class="divider"></div>

    <h2 id="advanced" :ref="(el) => emit('set-ref', el)">{{ t('docs.codeblocks.advancedTitle') }}</h2>

    <h3 id="codegroup" :ref="(el) => emit('set-ref', el)">{{ t('docs.codeblocks.codeGroupTitle') }}</h3>
    <p v-html="t('docs.codeblocks.codeGroupDesc')"></p>

    <div class="docs-code-block">
      <div class="code-tabs">
        <button class="code-tab" :class="{active: activeGroupTab === 'pnpm'}" @click="activeGroupTab = 'pnpm'">pnpm</button>
        <button class="code-tab" :class="{active: activeGroupTab === 'yarn'}" @click="activeGroupTab = 'yarn'">yarn</button>
        <button class="code-tab" :class="{active: activeGroupTab === 'npm'}" @click="activeGroupTab = 'npm'">npm</button>
        <button class="code-tab" :class="{active: activeGroupTab === 'bun'}" @click="activeGroupTab = 'bun'">bun</button>
      </div>
      <pre v-if="activeGroupTab === 'pnpm'"><code>pnpm add @nuxt/ui</code></pre>
      <pre v-if="activeGroupTab === 'yarn'"><code>yarn add @nuxt/ui</code></pre>
      <pre v-if="activeGroupTab === 'npm'"><code>npm install @nuxt/ui</code></pre>
      <pre v-if="activeGroupTab === 'bun'"><code>bun add @nuxt/ui</code></pre>
    </div>

    <h3 id="codetree" :ref="(el) => emit('set-ref', el)">{{ t('docs.codeblocks.codeTreeTitle') }}</h3>
    <p v-html="t('docs.codeblocks.codeTreeDesc')"></p>

    <div class="file-tree-container">
      <div class="file-tree">
        <div class="tree-item folder">app</div>
        <div class="tree-item folder">assets</div>
        <div class="tree-item file">app.config.ts</div>
        <div class="tree-item file active">nuxt.config.ts</div>
        <div class="tree-item file">package.json</div>
      </div>
      <div class="tree-content">
        <pre><code>export default defineAppConfig({
  ui: {
    colors: { primary: 'sky' }
  }
})</code></pre>
      </div>
    </div>

    <h3 id="codepreview" :ref="(el) => emit('set-ref', el)">{{ t('docs.codeblocks.codePreviewTitle') }}</h3>
    <div class="preview-box">
      <div class="preview-display">
        <code class="inline-code">inline code</code>
      </div>
      <div class="preview-code">
        <code>`inline code`</code>
      </div>
    </div>

    <h3 id="codecollapse" :ref="(el) => emit('set-ref', el)">{{ t('docs.codeblocks.codeCollapseTitle') }}</h3>
    <div class="docs-code-block" :class="{ 'is-collapsed': isCollapsed }">
      <div class="docs-code-header">
        <span class="docs-code-title">main.css</span>
      </div>
      <pre><code>@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --font-sans: 'Public Sans', sans-serif;
  --breakpoint-3xl: 1920px;
  --color-green-50: #EFFDF5;
  --color-green-500: #00C16A;
  --color-green-950: #052E16;
}</code></pre>
      <div class="collapse-overlay" v-if="isCollapsed"></div>
      <button class="collapse-btn" @click="isCollapsed = !isCollapsed">
        {{ isCollapsed ? t('docs.codeblocks.expandCode') : t('docs.codeblocks.collapseCode') }}
      </button>
    </div>

    <div class="docs-nav-cards">
      <a href="#" class="docs-nav-card prev" @click.prevent="emit('navigate', 'markdown')">
        <div class="docs-nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></div>
        <span class="docs-nav-label">{{ t('docs.nav.previous') }}</span>
        <h3>{{ t('docs.pages.markdown') }}</h3>
        <p>{{ t('docs.searchDesc.markdown') }}</p>
      </a>
      <a href="#" class="docs-nav-card next" @click.prevent="emit('navigate', 'prose')">
        <div class="docs-nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        <span class="docs-nav-label">{{ t('docs.nav.next') }}</span>
        <h3>{{ t('docs.pages.prose') }}</h3>
        <p>{{ t('docs.searchDesc.prose') }}</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.preview-box {
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  margin: 1.5rem 0;
  overflow: hidden;
}
.preview-display {
  padding: 2rem;
  display: flex;
  justify-content: center;
  background: var(--card-bg);
  border-bottom: 1px solid var(--border);
}
.preview-code {
  padding: 1rem;
  background: var(--code-bg);
  font-size: 0.875rem;
  color: var(--primary);
  text-align: start;
}
.highlighted-line {
  display: block;
  background: rgba(66, 184, 131, 0.15);
  border-inline-start: 3px solid var(--primary);
  margin-inline-start: -1rem;
  padding-inline-start: 1rem;
}
.code-tabs {
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
  background: var(--code-header);
  border-bottom: 1px solid var(--code-border);
}
.code-tab {
  padding: 0.75rem 0.5rem;
  font-size: 0.8rem;
  background: transparent;
  border: none;
  color: var(--text);
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
.code-tab.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}
.file-tree-container {
  display: flex;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  margin: 1.5rem 0;
  height: 250px;
}
.file-tree {
  width: 200px;
  background: var(--code-header);
  border-inline-end: 1px solid var(--border);
  padding: 1rem;
  font-size: 0.85rem;
  text-align: start;
}
.tree-item {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 2px;
}
.tree-item.active {
  background: var(--primary-bg);
  color: var(--primary);
}
.tree-content {
  flex: 1;
  background: var(--code-bg);
  padding: 1rem;
  overflow: auto;
  text-align: start;
}
.is-collapsed {
  max-height: 200px;
  position: relative;
}
.collapse-overlay {
  position: absolute;
  bottom: 0;
  inset-inline: 0;
  height: 80px;
  background: linear-gradient(transparent, var(--code-bg));
}
.collapse-btn {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--bg);
  border: 1px solid var(--border);
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  color: var(--text);
  cursor: pointer;
  z-index: 5;
}
[dir="rtl"] .collapse-btn {
  transform: translateX(50%);
}
</style>