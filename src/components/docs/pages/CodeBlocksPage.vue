<script setup>
import { ref } from 'vue'
const emit = defineEmits(['set-ref', 'navigate'])

const activeGroupTab = ref('pnpm')
const isCollapsed = ref(true)
</script>

<template>
  <div class="docs-page-content">
    <header class="page-head">
      <h1>Code Blocks</h1>
      <p class="subtitle">Display inline code and code blocks</p>
    </header>

    <div class="divider"></div>

    <h2 id="basic" :ref="(el) => emit('set-ref', el)">Basic</h2>

    <h3 id="inline-code" :ref="(el) => emit('set-ref', el)">Inline Code</h3>
    <p>Use inline code to display code snippets within text paragraphs. It's ideal for referencing code elements directly in sentences.</p>
    
    <div class="preview-box">
      <div class="preview-display">
        <code class="inline-code">inline code</code>
      </div>
      <div class="preview-code">
        <code>`inline code`</code>
      </div>
    </div>

    <h3 id="code-blocks" :ref="(el) => emit('set-ref', el)">Code Blocks</h3>
    <p>Use code blocks to display multi-line code snippets with syntax highlighting. Code blocks are essential for presenting code examples clearly.</p>

    <div class="docs-code-block">
      <pre><code>export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})</code></pre>
    </div>

    <p>When writing a code-block, you can specify a filename that will be displayed on top of the code block. An icon will be automatically displayed based on the extension or the name.</p>

    <div class="docs-code-block">
      <div class="docs-code-header">
        <span class="docs-code-title">nuxt.config.ts</span>
        <button class="docs-code-copy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>
      </div>
      <pre><code>export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})</code></pre>
    </div>

    <p>Every code-block has a built-in copy button that will copy the code to your clipboard.</p>

    <h3 id="highlight-line" :ref="(el) => emit('set-ref', el)">Highlight Line</h3>
    <p>To highlight lines of code, add <code class="inline-code">{}</code> around the line numbers you want to highlight.</p>

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

    <h2 id="advanced" :ref="(el) => emit('set-ref', el)">Advanced</h2>

    <h3 id="codegroup" :ref="(el) => emit('set-ref', el)">CodeGroup</h3>
    <p>Group code blocks in tabs using <code class="inline-code">code-group</code>. Perfect for showing multiple package managers.</p>

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

    <h3 id="codetree" :ref="(el) => emit('set-ref', el)">CodeTree</h3>
    <p>Display code blocks in a file tree view using <code class="inline-code">code-tree</code>.</p>

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

    <h3 id="codepreview" :ref="(el) => emit('set-ref', el)">CodePreview</h3>
    <div class="preview-box">
      <div class="preview-display">
        <code class="inline-code">inline code</code>
      </div>
      <div class="preview-code">
        <code>`inline code`</code>
      </div>
    </div>

    <h3 id="codecollapse" :ref="(el) => emit('set-ref', el)">CodeCollapse</h3>
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
        {{ isCollapsed ? 'Expand code' : 'Collapse code' }}
      </button>
    </div>

    <div class="docs-nav-cards">
      <a href="#" class="docs-nav-card prev" @click.prevent="emit('navigate', 'markdown')">
        <div class="docs-nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></div>
        <span class="docs-nav-label">Previous</span>
        <h3>Markdown Syntax</h3>
        <p>Text, title, and styling in standard markdown.</p>
      </a>
      <a href="#" class="docs-nav-card next" @click.prevent="emit('navigate', 'prose')">
        <div class="docs-nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        <span class="docs-nav-label">Next</span>
        <h3>Prose Components</h3>
        <p>Components to help you structure content.</p>
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
}
.highlighted-line {
  display: block;
  background: rgba(66, 184, 131, 0.15);
  border-left: 3px solid var(--primary);
  margin-left: -1rem;
  padding-left: 1rem;
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
  border-right: 1px solid var(--border);
  padding: 1rem;
  font-size: 0.85rem;
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
}
.is-collapsed {
  max-height: 200px;
  position: relative;
}
.collapse-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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
</style>