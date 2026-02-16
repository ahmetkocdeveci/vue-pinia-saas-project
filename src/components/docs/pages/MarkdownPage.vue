<script setup>
const emit = defineEmits(['set-ref', 'navigate'])
</script>

<template>
  <div>
    <div class="content-header">
      <h1>Markdown Syntax</h1>
      <p class="subtitle">Text, title, and styling in standard markdown.</p>
    </div>
    
    <div class="prose">
      <h2 id="titles" :ref="(el) => emit('set-ref', el)">Titles</h2>
      <p>Use titles to introduce main sections. They structure your documentation and help users navigate content.</p>
      
      <div class="nuxt-prose-code">
        <pre><code><span class="token-punctuation">##</span> <span class="token-text">Titles</span></code></pre>
      </div>

      <h3 id="subtitles" :ref="(el) => emit('set-ref', el)">Subtitles</h3>
      <p>Use subtitles to divide sections further. They create a more detailed content hierarchy for better readability.</p>
      
      <div class="nuxt-prose-code">
        <pre><code><span class="token-punctuation">###</span> <span class="token-text">Subtitles</span></code></pre>
      </div>

      <p>Each title and subtitle creates an anchor and shows up automatically in the table of contents.</p>

      <h2 id="text-formatting" :ref="(el) => emit('set-ref', el)">Text Formatting</h2>
      <p>Nuxt UI supports most Markdown formatting options.</p>
      
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Style</th><th>How to use</th><th>Result</th></tr>
          </thead>
          <tbody>
            <tr><td>Bold</td><td><code>**bold**</code></td><td><strong>Bold</strong></td></tr>
            <tr><td>Italic</td><td><code>*italic*</code></td><td><em>Italic</em></td></tr>
            <tr><td>Strike</td><td><code>~~strike~~</code></td><td><del>Strike</del></td></tr>
          </tbody>
        </table>
      </div>

      <p>Combine formatting for richer text styles and visual emphasis.</p>
      
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Style</th><th>How to use</th><th>Result</th></tr>
          </thead>
          <tbody>
            <tr><td>Bold Italic</td><td><code>**_bold italic_**</code></td><td><strong><em>Bold Italic</em></strong></td></tr>
            <tr><td>Bold Strike</td><td><code>~~**bold**~~</code></td><td><strong><del>Bold</del></strong></td></tr>
            <tr><td>Italic Strike</td><td><code>~~*italic*~~</code></td><td><em><del>Italic</del></em></td></tr>
          </tbody>
        </table>
      </div>

      <p>For exponents, indices, or mathematical notations, use HTML <code>&lt;sup&gt;</code> and <code>&lt;sub&gt;</code> tags.</p>

      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Style</th><th>How to use</th><th>Result</th></tr>
          </thead>
          <tbody>
            <tr><td>Superscript</td><td><code>&lt;sup&gt;superscript&lt;/sup&gt;</code></td><td><sup>superscript</sup></td></tr>
            <tr><td>Subscript</td><td><code>&lt;sub&gt;subscript&lt;/sub&gt;</code></td><td><sub>subscript</sub></td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="links" :ref="(el) => emit('set-ref', el)">Links</h2>
      <p>Links connect different parts of your documentation and external resources, essential for user navigation and providing references. To create a link, wrap the link text in brackets <code>[]()</code>.</p>
      
      <div class="table-wrapper">
        <table>
          <tbody>
            <tr><td><a href="#">Nuxt UI</a></td><td><code>[Nuxt UI](https://ui.nuxt.com/getting-started/installation)</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="internal-links" :ref="(el) => emit('set-ref', el)">Internal links</h3>
      <p>For linking within your documentation, use root-relative paths like <code>/getting-started/installation</code>.</p>
      <div class="table-wrapper">
        <table>
          <tbody>
            <tr><td><a href="#">Installation</a></td><td><code>[Installation](/getting-started/installation)</code></td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="lists" :ref="(el) => emit('set-ref', el)">Lists</h2>
      <p>Organize related items in a structured, readable format. Markdown supports unordered, ordered, and nested lists for various content needs.</p>
      
      <h3 id="unordered" :ref="(el) => emit('set-ref', el)">Unordered</h3>
      <p>Use unordered lists for items without a specific sequence. Start each item with a <code>-</code> symbol.</p>
      <div class="split-preview">
        <div class="split-left">
          <ul><li>I'm a list item.</li><li>I'm another list item.</li><li>I'm the last list item.</li></ul>
        </div>
        <div class="split-right nuxt-prose-code no-margin">
          <pre><code><span class="line"><span class="token-punctuation">-</span> <span class="token-text">I'm a list item.</span></span>
<span class="line"><span class="token-punctuation">-</span> <span class="token-text">I'm another list item.</span></span>
<span class="line"><span class="token-punctuation">-</span> <span class="token-text">I'm the last list item.</span></span></code></pre>
        </div>
      </div>

      <h3 id="ordered" :ref="(el) => emit('set-ref', el)">Ordered</h3>
      <p>Use ordered lists when item order matters, like steps in a process. Start each item with a number.</p>
      <div class="split-preview">
        <div class="split-left">
          <ol><li>I'm a list item.</li><li>I'm another list item.</li><li>I'm the last list item.</li></ol>
        </div>
        <div class="split-right nuxt-prose-code no-margin">
          <pre><code><span class="line"><span class="token-punctuation">1.</span> <span class="token-text">I'm a list item.</span></span>
<span class="line"><span class="token-punctuation">2.</span> <span class="token-text">I'm another list item.</span></span>
<span class="line"><span class="token-punctuation">3.</span> <span class="token-text">I'm the last list item.</span></span></code></pre>
        </div>
      </div>

      <h3 id="nested" :ref="(el) => emit('set-ref', el)">Nested</h3>
      <p>Create hierarchical lists with sub-items for complex structures. Indent sub-items by four spaces for nesting.</p>
      <div class="split-preview">
        <div class="split-left">
          <ul>
            <li>I'm a list item.
              <ul class="nested-list"><li>I'm a nested list item.</li><li>I'm another nested list item.</li></ul>
            </li>
            <li>I'm another list item.</li>
          </ul>
        </div>
        <div class="split-right nuxt-prose-code no-margin">
          <pre><code><span class="line"><span class="token-punctuation">-</span> <span class="token-text">I'm a list item.</span></span>
<span class="line">    <span class="token-punctuation">-</span> <span class="token-text">I'm a nested list item.</span></span>
<span class="line">    <span class="token-punctuation">-</span> <span class="token-text">I'm another nested list item.</span></span>
<span class="line"><span class="token-punctuation">-</span> <span class="token-text">I'm another list item.</span></span></code></pre>
        </div>
      </div>

      <h2 id="tables" :ref="(el) => emit('set-ref', el)">Tables</h2>
      <p>Present structured data in rows and columns clearly. Tables are ideal for comparing data or listing properties.</p>
      
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>Prop</th><th>Default</th><th>Type</th></tr>
          </thead>
          <tbody>
            <tr><td><code>name</code></td><td></td><td><code>string</code></td></tr>
            <tr><td><code>size</code></td><td><code>md</code></td><td><code>string</code></td></tr>
            <tr><td><code>color</code></td><td><code>neutral</code></td><td><code>string</code></td></tr>
          </tbody>
        </table>
      </div>

      <div class="nuxt-prose-code">
        <pre><code><span class="line"><span class="token-text">| Prop    | Default   | Type                     |</span></span>
<span class="line"><span class="token-text">|---------|-----------|--------------------------|</span></span>
<span class="line"><span class="token-text">| `name`  |           | `string`{lang="ts-type"} |</span></span>
<span class="line"><span class="token-text">| `size`  | `md`      | `string`{lang="ts-type"} |</span></span>
<span class="line"><span class="token-text">| `color` | `neutral` | `string`{lang="ts-type"} |</span></span></code></pre>
      </div>

      <h2 id="blockquotes" :ref="(el) => emit('set-ref', el)">Blockquotes</h2>
      <p>Highlight important quotations, citations, or emphasized text. Blockquotes visually distinguish quoted content.</p>
      
      <h3 id="singleline" :ref="(el) => emit('set-ref', el)">Singleline</h3>
      <p>Single-line blockquotes are best for short, impactful quotes or citations that fit within a single line. To create a single-line blockquote, add a <code>&gt;</code> in front of a paragraph. Ideal for short and impactful quotes.</p>
      
      <div class="split-preview blockquote-split">
        <div class="split-left">
          <blockquote><p>Nuxt UI is a collection of Vue components, composables and utils designed to create beautiful and accessible user interfaces.</p></blockquote>
        </div>
        <div class="split-right nuxt-prose-code no-margin">
          <pre><code><span class="line"><span class="token-punctuation">></span> <span class="token-text">Nuxt UI is a collection of Vue components, composables and utils designed to create beautiful and accessible user interfaces.</span></span></code></pre>
        </div>
      </div>
      
      <h3 id="multiline" :ref="(el) => emit('set-ref', el)">Multiline</h3>
      <p>Multi-line blockquotes are suitable for longer quotes or when you need to include multiple paragraphs within a single quotation.</p>
      
      <div class="split-preview blockquote-split">
        <div class="split-left">
          <blockquote>
            <p>Nuxt UI is a collection of Vue components, composables and utils designed to create beautiful and accessible user interfaces.</p>
            <p>Create beautiful, responsive, and accessible Vue applications with Nuxt UI.</p>
          </blockquote>
        </div>
        <div class="split-right nuxt-prose-code no-margin">
          <pre><code><span class="line"><span class="token-punctuation">></span> <span class="token-text">Nuxt UI is a collection of Vue components, composables and utils designed to create beautiful and accessible user interfaces.</span></span>
<span class="line"><span class="token-punctuation">></span></span>
<span class="line"><span class="token-punctuation">></span> <span class="token-text">Create beautiful, responsive, and accessible Vue applications with Nuxt UI.</span></span></code></pre>
        </div>
      </div>
    </div>

    <div class="next-page-container">
      <a href="#" class="prev-card" @click.prevent="emit('navigate', 'usage')">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </div>
        <div class="card-text">
          <span class="direction">Previous</span>
          <h3>Usage</h3>
          <p>Learn how to write and customize.</p>
        </div>
      </a>
      
      <a href="#" class="next-card" @click.prevent="emit('navigate', 'codeblocks')">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <div class="card-text">
          <span class="direction">Next</span>
          <h3>Code Blocks</h3>
          <p>Display inline code and code blocks.</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.prose h3 { font-size: 1.25rem; font-weight: 600; color: var(--text-main, #ffffff); margin: 2.5rem 0 1rem 0; padding-top: 1rem; }

.table-wrapper { overflow-x: auto; margin: 2rem 0; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; background: rgba(255, 255, 255, 0.02); }
table { width: 100%; border-collapse: collapse; text-align: left; }
th { border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding: 1rem 1.5rem; color: var(--text-main); font-weight: 600; font-size: 0.95rem; background: rgba(255, 255, 255, 0.03); }
td { border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 1rem 1.5rem; color: var(--text-muted); font-size: 0.95rem; }
tr:last-child td { border-bottom: none; }

blockquote { border-left: 4px solid var(--primary); padding: 1rem 1.5rem; margin: 0; background: rgba(56, 189, 248, 0.05); border-radius: 0 8px 8px 0; }
blockquote p { margin: 0 0 0.5rem 0; color: var(--text-main); font-style: italic; }
blockquote p:last-child { margin-bottom: 0; }

.split-preview { display: flex; flex-direction: column; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; overflow: hidden; margin: 1.5rem 0 2.5rem 0; }
.split-left { padding: 1.5rem; background: rgba(255, 255, 255, 0.02); border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.split-right { background: #0f172a; }
.split-left ul, .split-left ol { margin: 0; padding-left: 1.25rem; color: var(--text-muted); line-height: 1.7; }
.split-left ul { list-style: disc; }
.split-left ol { list-style: decimal; }
.split-left li { margin-bottom: 0.5rem; }
.split-left li:last-child { margin-bottom: 0; }
.nested-list { margin-top: 0.5rem !important; }

.blockquote-split .split-left { padding: 0; }
.blockquote-split blockquote { border-radius: 0; margin: 0; border-top: 0; border-right: 0; border-bottom: 0; }

.nuxt-prose-code { background-color: #0f172a; border: 1px solid #1e293b; border-radius: 0.5rem; margin: 1.5rem 0 2.5rem 0; overflow: hidden; }
.nuxt-prose-code.no-margin { margin: 0; border-radius: 0; border: none; }
.nuxt-prose-code pre { margin: 0; padding: 1rem 0; overflow-x: auto; font-size: 0.875rem; line-height: 1.7; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
.nuxt-prose-code code { background: transparent; border: none; padding: 0; color: inherit; font-size: inherit; }
.line { display: block; padding: 0 1.25rem; min-height: 1.5rem; border-left: 2px solid transparent; }
.token-punctuation { color: #89ddff; }
.token-text { color: #e2e8f0; }

.prose code { background-color: rgba(30, 41, 59, 0.7); border: 1px solid rgba(51, 65, 85, 0.5); padding: 0.15rem 0.375rem; border-radius: 0.375rem; font-size: 0.875em; color: #e2e8f0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }

@media (min-width: 768px) {
  .split-preview { flex-direction: row; }
  .split-left { flex: 1; border-bottom: none; border-right: 1px solid rgba(255, 255, 255, 0.1); }
  .split-right { flex: 1; }
}
</style>