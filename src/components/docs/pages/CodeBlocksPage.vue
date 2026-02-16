<script setup>
import { ref } from 'vue'

const emit = defineEmits(['set-ref', 'navigate'])

const activeTab = ref('pnpm')
const isExpanded = ref(false)

const copyToClipboard = (text) => navigator.clipboard.writeText(text)
</script>

<template>
  <div>
    <div class="content-header">
      <h1>Code Blocks</h1>
      <p class="subtitle">Display inline code and code blocks</p>
    </div>
    
    <div class="prose">
      <h2 id="basic" :ref="(el) => emit('set-ref', el)" style="display: none;">Basic</h2>
      
      <h3 id="inline-code" :ref="(el) => emit('set-ref', el)">Inline Code</h3>
      <p>Use inline code to display code snippets within text paragraphs. It's ideal for referencing code elements directly in sentences.</p>
      
      <div class="preview-box">
        <code>inline code</code>
      </div>
      
      <div class="nuxt-prose-code">
        <pre><code><span class="token-text">`inline code`</span></code></pre>
      </div>

      <h3 id="code-blocks" :ref="(el) => emit('set-ref', el)">Code Blocks</h3>
      <p>Use code blocks to display multi-line code snippets with syntax highlighting. Code blocks are essential for presenting code examples clearly.</p>

      <div class="nuxt-prose-code">
        <div class="code-header">
          <span class="language-badge">ts</span>
          <button class="copy-button" @click="copyToClipboard('export default defineNuxtConfig({\n  modules: [\'@nuxt/ui\']\n})')">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          </button>
        </div>
        <pre><code><span class="line"><span class="token-keyword">export default</span> <span class="token-function">defineNuxtConfig</span><span class="token-punctuation">({</span></span>
<span class="line">  <span class="token-property">modules</span><span class="token-punctuation">: [</span><span class="token-string">'@nuxt/ui'</span><span class="token-punctuation">]</span></span>
<span class="line"><span class="token-punctuation">})</span></span></code></pre>
      </div>

      <div class="nuxt-prose-code">
        <div class="code-header">
          <span class="language-badge">md</span>
          <button class="copy-button" @click="copyToClipboard('```ts\nexport default defineNuxtConfig({\n  modules: [\'@nuxt/ui\']\n})\n```')">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          </button>
        </div>
        <pre><code><span class="line"><span class="token-punctuation">```ts</span></span>
<span class="line"><span class="token-keyword">export default</span> <span class="token-function">defineNuxtConfig</span><span class="token-punctuation">({</span></span>
<span class="line">  <span class="token-property">modules</span><span class="token-punctuation">: [</span><span class="token-string">'@nuxt/ui'</span><span class="token-punctuation">]</span></span>
<span class="line"><span class="token-punctuation">})</span></span>
<span class="line"><span class="token-punctuation">```</span></span></code></pre>
      </div>

      <p>When writing a code-block, you can specify a filename that will be displayed on top of the code block. An icon will be automatically displayed based on the extension or the name. Filenames help users understand the code's location and purpose within a project.</p>

      <div class="nuxt-prose-code">
        <div class="code-header">
          <div class="filename">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="file-icon"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
            <span>nuxt.config.ts</span>
          </div>
          <button class="copy-button" @click="copyToClipboard('export default defineNuxtConfig({\n  modules: [\'@nuxt/ui\']\n})')">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          </button>
        </div>
        <pre><code><span class="line"><span class="token-keyword">export default</span> <span class="token-function">defineNuxtConfig</span><span class="token-punctuation">({</span></span>
<span class="line">  <span class="token-property">modules</span><span class="token-punctuation">: [</span><span class="token-string">'@nuxt/ui'</span><span class="token-punctuation">]</span></span>
<span class="line"><span class="token-punctuation">})</span></span></code></pre>
      </div>

      <h2 id="advanced" :ref="(el) => emit('set-ref', el)">Advanced</h2>

      <h3 id="code-group" :ref="(el) => emit('set-ref', el)">CodeGroup</h3>
      <p>Group code blocks in tabs using <code>code-group</code>. <code>code-group</code> is perfect for showing code examples in multiple languages or package managers.</p>

      <div class="code-group">
        <div class="tabs">
          <button :class="{ active: activeTab === 'pnpm' }" @click="activeTab = 'pnpm'">pnpm</button>
          <button :class="{ active: activeTab === 'yarn' }" @click="activeTab = 'yarn'">yarn</button>
          <button :class="{ active: activeTab === 'npm' }" @click="activeTab = 'npm'">npm</button>
          <button :class="{ active: activeTab === 'bun' }" @click="activeTab = 'bun'">bun</button>
        </div>
        <div class="tab-content">
          <div class="nuxt-prose-code no-margin no-border-top">
            <div class="code-header">
              <span class="language-badge">bash</span>
              <button class="copy-button" @click="copyToClipboard('')">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
            </div>
            <pre v-if="activeTab === 'pnpm'"><code><span class="line"><span class="token-function">pnpm</span> <span class="token-text">add @nuxt/ui</span></span></code></pre>
            <pre v-if="activeTab === 'yarn'"><code><span class="line"><span class="token-function">yarn</span> <span class="token-text">add @nuxt/ui</span></span></code></pre>
            <pre v-if="activeTab === 'npm'"><code><span class="line"><span class="token-function">npm</span> <span class="token-text">install @nuxt/ui</span></span></code></pre>
            <pre v-if="activeTab === 'bun'"><code><span class="line"><span class="token-function">bun</span> <span class="token-text">add @nuxt/ui</span></span></code></pre>
          </div>
        </div>
      </div>

      <div class="nuxt-prose-code">
        <pre><code><span class="line"><span class="token-punctuation">:::code-group</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">```bash [pnpm]</span></span>
<span class="line"><span class="token-function">pnpm</span> <span class="token-text">add @nuxt/ui</span></span>
<span class="line"><span class="token-punctuation">```</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">```bash [yarn]</span></span>
<span class="line"><span class="token-function">yarn</span> <span class="token-text">add @nuxt/ui</span></span>
<span class="line"><span class="token-punctuation">```</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">```bash [npm]</span></span>
<span class="line"><span class="token-function">npm</span> <span class="token-text">install @nuxt/ui</span></span>
<span class="line"><span class="token-punctuation">```</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">```bash [bun]</span></span>
<span class="line"><span class="token-function">bun</span> <span class="token-text">add @nuxt/ui</span></span>
<span class="line"><span class="token-punctuation">```</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">::</span></span></code></pre>
      </div>

      <p>Like the <code>ProsePre</code> component, the <code>CodeGroup</code> handles filenames, icons and copy button.</p>

      <h3 id="code-tree" :ref="(el) => emit('set-ref', el)">CodeTree</h3>
      <p>Display code blocks in a file tree view using <code>code-tree</code>. <code>code-tree</code> is excellent for showcasing project structures and file relationships.</p>

      <div class="code-tree">
        <div class="tree-sidebar">
          <div class="tree-item folder"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> app</div>
          <div class="tree-item folder"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> assets</div>
          <div class="tree-item file active"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg> app.config.ts</div>
          <div class="tree-item file"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg> app.vue</div>
          <div class="tree-item file"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg> nuxt.config.ts</div>
        </div>
        <div class="tree-content">
          <div class="nuxt-prose-code no-margin no-border">
            <div class="code-header">
              <div class="filename">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="file-icon"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                <span>app/app.config.ts</span>
              </div>
              <button class="copy-button" @click="copyToClipboard('')">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
            </div>
            <pre><code><span class="line"><span class="token-keyword">export default</span> <span class="token-function">defineAppConfig</span><span class="token-punctuation">({</span></span>
<span class="line">  <span class="token-property">ui</span><span class="token-punctuation">: {</span></span>
<span class="line">    <span class="token-property">colors</span><span class="token-punctuation">: {</span></span>
<span class="line">      <span class="token-property">primary</span><span class="token-punctuation">:</span> <span class="token-string">'sky'</span><span class="token-punctuation">,</span></span>
<span class="line">      <span class="token-property">colors</span><span class="token-punctuation">:</span> <span class="token-string">'slate'</span></span>
<span class="line">    <span class="token-punctuation">}</span></span>
<span class="line">  <span class="token-punctuation">}</span></span>
<span class="line"><span class="token-punctuation">})</span></span></code></pre>
          </div>
        </div>
      </div>

      <h3 id="code-preview" :ref="(el) => emit('set-ref', el)">CodePreview</h3>
      <p>Use <code>code-preview</code> to show code output alongside the code. <code>code-preview</code> is ideal for interactive examples and demonstrating code results. Write the code to be previewed in a the <code>default</code> slot and the actual code in the <code>code</code> slot.</p>

      <div class="code-preview">
        <div class="preview-area">
          <code>inline code</code>
        </div>
        <div class="nuxt-prose-code no-margin no-border-top">
          <div class="code-header">
            <span class="language-badge">mdc</span>
            <button class="copy-button" @click="copyToClipboard('')">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
          <pre><code><span class="line"><span class="token-text">`inline code`</span></span></code></pre>
        </div>
      </div>

      <h3 id="code-collapse" :ref="(el) => emit('set-ref', el)">CodeCollapse</h3>
      <p>Use <code>code-collapse</code> for long code blocks to keep pages clean. <code>code-collapse</code> allows users to expand code blocks only when needed, improving readability.</p>

      <div class="code-collapse" :class="{ expanded: isExpanded }">
        <div class="nuxt-prose-code no-margin">
          <div class="code-header">
            <div class="filename">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="file-icon"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
              <span>main.css</span>
            </div>
            <button class="copy-button" @click="copyToClipboard('')">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
          <pre><code><span class="line"><span class="token-keyword">@import</span> <span class="token-string">"tailwindcss"</span><span class="token-punctuation">;</span></span>
<span class="line"><span class="token-keyword">@import</span> <span class="token-string">"@nuxt/ui"</span><span class="token-punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token-keyword">@theme</span> <span class="token-punctuation">{</span></span>
<span class="line">  <span class="token-property">--font-sans</span><span class="token-punctuation">:</span> <span class="token-string">'Public Sans'</span><span class="token-punctuation">,</span> <span class="token-property">sans-serif</span><span class="token-punctuation">;</span></span>
<span class="line">  <span class="token-property">--color-green-50</span><span class="token-punctuation">:</span> <span class="token-text">#EFFDF5</span><span class="token-punctuation">;</span></span>
<span class="line">  <span class="token-property">--color-green-100</span><span class="token-punctuation">:</span> <span class="token-text">#D9FBE8</span><span class="token-punctuation">;</span></span>
<span class="line">  <span class="token-property">--color-green-200</span><span class="token-punctuation">:</span> <span class="token-text">#B3F5D1</span><span class="token-punctuation">;</span></span>
<span class="line">  <span class="token-property">--color-green-300</span><span class="token-punctuation">:</span> <span class="token-text">#75EDAE</span><span class="token-punctuation">;</span></span>
<span class="line">  <span class="token-property">--color-green-400</span><span class="token-punctuation">:</span> <span class="token-text">#00DC82</span><span class="token-punctuation">;</span></span>
<span class="line">  <span class="token-property">--color-green-500</span><span class="token-punctuation">:</span> <span class="token-text">#00C16A</span><span class="token-punctuation">;</span></span>
<span class="line"><span class="token-punctuation">}</span></span></code></pre>
        </div>
        <div class="collapse-action" v-if="!isExpanded">
          <button @click="isExpanded = true">Expand code</button>
        </div>
      </div>
    </div>

    <div class="next-page-container">
      <a href="#" class="prev-card" @click.prevent="emit('navigate', 'markdown')">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h8"></path><path d="M4 18V6"></path><path d="M12 18V6"></path><path d="M17 12h.01"></path><path d="M21 12h.01"></path></svg>
        </div>
        <div class="card-text">
          <span class="direction">Previous</span>
          <h3>Markdown Syntax</h3>
          <p>Text, title, and styling in standard markdown.</p>
        </div>
      </a>
      
      <a href="#" class="next-card" @click.prevent="emit('navigate', 'prose')">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </div>
        <div class="card-text">
          <span class="direction">Next</span>
          <h3>Prose Components</h3>
          <p>Components to help you structure your content.</p>
        </div>
      </a>
    </div>
  </div>
</template><style scoped>
.theme-wrapper {
  --box-bg: #ffffff;
  --box-border: #e2e8f0;
  --box-hover: #f8fafc;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --preview-bg: #f8fafc;
  --code-bg: #0f172a;
  --code-border: #1e293b;
}

:global(.dark) .theme-wrapper {
  --box-bg: #0f172a;
  --box-border: rgba(255, 255, 255, 0.1);
  --box-hover: rgba(255, 255, 255, 0.03);
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --preview-bg: rgba(255, 255, 255, 0.02);
}

.preview-box { background: var(--preview-bg); border: 1px solid var(--box-border); border-radius: 0.5rem; padding: 1.5rem; margin: 1.5rem 0; display: flex; align-items: center; justify-content: center; }

.nuxt-prose-code { background-color: var(--code-bg); border: 1px solid var(--code-border); border-radius: 0.5rem; margin: 1.5rem 0 2.5rem 0; overflow: hidden; }
.nuxt-prose-code.no-margin { margin: 0; border-radius: 0; }
.nuxt-prose-code.no-border { border: none; }
.nuxt-prose-code.no-border-top { border-top: none; border-top-left-radius: 0; border-top-right-radius: 0; }

.code-header { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 1rem; border-bottom: 1px solid var(--code-border); background-color: rgba(15, 23, 42, 0.5); }
.language-badge { font-size: 0.75rem; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.filename { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: #cbd5e1; font-family: 'JetBrains Mono', 'Fira Code', monospace; }
.file-icon { width: 1.1rem; height: 1.1rem; color: #94a3b8; }
.copy-button { background: transparent; border: none; color: #94a3b8; cursor: pointer; padding: 0.25rem; border-radius: 0.375rem; transition: all 0.2s; display: flex; }
.copy-button:hover { color: #f8fafc; background: rgba(255, 255, 255, 0.1); }

.nuxt-prose-code pre { margin: 0; padding: 1.25rem 0; overflow-x: auto; font-size: 0.875rem; line-height: 1.5; font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, monospace; }

.nuxt-prose-code code { display: flex; flex-direction: column; background: transparent; border: none; padding: 0; }

.line { display: block; width: 100%; padding: 0 1.25rem; min-height: 1.5rem; border-left: 2px solid transparent; }
.line.highlight { background-color: rgba(56, 189, 248, 0.1); border-left-color: #38bdf8; }

.token-punctuation { color: #89ddff; }
.token-text { color: #e2e8f0; }
.token-keyword { color: #c678dd; }
.token-function { color: #61afef; }
.token-property { color: #e06c75; }
.token-string { color: #98c379; }
.token-tag { color: #e06c75; }

.code-group { border: 1px solid var(--code-border); border-radius: 0.5rem; overflow: hidden; margin: 1.5rem 0 2.5rem 0; background: var(--code-bg); }
.tabs { display: flex; border-bottom: 1px solid var(--code-border); background: rgba(15, 23, 42, 0.5); }
.tabs button { background: transparent; border: none; padding: 0.75rem 1.25rem; color: #94a3b8; font-size: 0.875rem; font-weight: 500; cursor: pointer; border-bottom: 2px solid transparent; transition: 0.2s; font-family: 'JetBrains Mono', monospace; }
.tabs button:hover { color: #f8fafc; }
.tabs button.active { color: #38bdf8; border-bottom-color: #38bdf8; }

.code-tree { display: flex; border: 1px solid var(--code-border); border-radius: 0.5rem; overflow: hidden; margin: 1.5rem 0 2.5rem 0; background: var(--code-bg); }
.tree-sidebar { width: 220px; border-right: 1px solid var(--code-border); padding: 0.5rem; background: rgba(15, 23, 42, 0.5); }
.tree-item { display: flex; align-items: center; gap: 0.5rem; padding: 0.375rem 0.5rem; font-size: 0.875rem; color: #94a3b8; cursor: pointer; border-radius: 0.375rem; font-family: 'JetBrains Mono', monospace; }
.tree-item:hover { background: rgba(255, 255, 255, 0.05); color: #cbd5e1; }
.tree-item.active { background: rgba(56, 189, 248, 0.1); color: #38bdf8; }
.tree-content { flex: 1; min-width: 0; }

.code-preview { border: 1px solid var(--box-border); border-radius: 0.5rem; overflow: hidden; margin: 1.5rem 0 2.5rem 0; }
.preview-area { padding: 2rem; background: var(--preview-bg); display: flex; align-items: center; justify-content: center; }

.code-collapse { position: relative; margin: 1.5rem 0 2.5rem 0; border-radius: 0.5rem; overflow: hidden; }
.code-collapse:not(.expanded) .nuxt-prose-code { max-height: 250px; }
.collapse-action { position: absolute; bottom: 0; left: 0; right: 0; height: 100px; background: linear-gradient(to bottom, transparent, var(--code-bg)); display: flex; align-items: flex-end; justify-content: center; padding-bottom: 1rem; }
.collapse-action button { background: #1e293b; color: #e2e8f0; border: 1px solid rgba(255,255,255,0.1); padding: 0.375rem 1rem; border-radius: 0.375rem; font-size: 0.875rem; cursor: pointer; }
.collapse-action button:hover { background: #334155; }

@media (max-width: 768px) {
  .code-tree { flex-direction: column; }
  .tree-sidebar { width: 100%; border-right: none; border-bottom: 1px solid var(--code-border); }
}
</style>