<script setup>
const emit = defineEmits(['set-ref', 'navigate'])
</script>

<template>
  <div class="docs-page-content">
    <header class="page-head">
      <h1>Markdown Syntax</h1>
      <p class="subtitle">Text, title, and styling in standard markdown.</p>
    </header>

    <div class="divider"></div>

    <h2 id="titles" :ref="(el) => emit('set-ref', el)">Titles</h2>
    <p>Use titles to introduce main sections. They structure your documentation and help users navigate content.</p>
    
    <h3 id="titles-sub" :ref="(el) => emit('set-ref', el)">Titles</h3>
    <div class="preview-box">
      <div class="preview-display">
        <span style="font-size: 1.8rem; font-weight: 700; color: var(--heading)">Titles</span>
      </div>
      <div class="preview-code">
        <code><span style="color: var(--primary)">##</span> Titles</code>
      </div>
    </div>

    <h2 id="subtitles" :ref="(el) => emit('set-ref', el)">Subtitles</h2>
    <p>Use subtitles to divide sections further. They create a more detailed content hierarchy for better readability.</p>
    
    <h3 id="subtitles-sub" :ref="(el) => emit('set-ref', el)">Subtitles</h3>
    <div class="preview-box">
      <div class="preview-display">
        <span style="font-size: 1.4rem; font-weight: 600; color: var(--heading)">Subtitles</span>
      </div>
      <div class="preview-code">
        <code><span style="color: var(--primary)">###</span> Subtitles</code>
      </div>
    </div>
    <p>Each title and subtitle creates an anchor and shows up automatically in the table of contents.</p>

    <h2 id="text-formatting" :ref="(el) => emit('set-ref', el)">Text Formatting</h2>
    <p>Nuxt UI supports most Markdown formatting options.</p>

    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr><th>Style</th><th>How to use</th><th>Result</th></tr>
        </thead>
        <tbody>
          <tr><td>Bold</td><td><code class="inline-code">**bold**</code></td><td><strong>Bold</strong></td></tr>
          <tr><td>Italic</td><td><code class="inline-code">*italic*</code></td><td><em>Italic</em></td></tr>
          <tr><td>Strike</td><td><code class="inline-code">~~strike~~</code></td><td><del>Strike</del></td></tr>
        </tbody>
      </table>
    </div>

    <p>Combine formatting for richer text styles and visual emphasis.</p>
    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr><th>Style</th><th>How to use</th><th>Result</th></tr>
        </thead>
        <tbody>
          <tr><td>Bold Italic</td><td><code class="inline-code">**_bold italic_**</code></td><td><strong><em>Bold Italic</em></strong></td></tr>
          <tr><td>Bold Strike</td><td><code class="inline-code">~~**bold**~~</code></td><td><del><strong>Bold</strong></del></td></tr>
          <tr><td>Italic Strike</td><td><code class="inline-code">~~*italic*~~</code></td><td><del><em>Italic</em></del></td></tr>
        </tbody>
      </table>
    </div>

    <p>For exponents, indices, or mathematical notations, use HTML <code>&lt;sup&gt;</code> and <code>&lt;sub&gt;</code> tags.</p>
    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr><th>Style</th><th>How to use</th><th>Result</th></tr>
        </thead>
        <tbody>
          <tr><td>Superscript</td><td><code class="inline-code">&lt;sup&gt;superscript&lt;/sup&gt;</code></td><td><sup>superscript</sup></td></tr>
          <tr><td>Subscript</td><td><code class="inline-code">&lt;sub&gt;subscript&lt;/sub&gt;</code></td><td><sub>subscript</sub></td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="links" :ref="(el) => emit('set-ref', el)">Links</h2>
    <p>Links connect different parts of your documentation and external resources. To create a link, wrap the link text in brackets <code>[]()</code>.</p>
    <div class="preview-box">
      <div class="preview-display">
        <a href="https://ui.nuxt.com" target="_blank" class="preview-link">Nuxt UI</a>
      </div>
      <div class="preview-code">
        <code>[Nuxt UI](https://ui.nuxt.com/getting-started/installation)</code>
      </div>
    </div>

    <h3 id="internal-links" :ref="(el) => emit('set-ref', el)">Internal links</h3>
    <p>For linking within your documentation, use root-relative paths like <code>/getting-started/installation</code>.</p>
    <div class="preview-box">
      <div class="preview-display">
        <a href="#" class="preview-link">Installation</a>
      </div>
      <div class="preview-code">
        <code>[Installation](/getting-started/installation)</code>
      </div>
    </div>

    <h2 id="lists" :ref="(el) => emit('set-ref', el)">Lists</h2>
    <p>Organize related items in a structured, readable format. Markdown supports unordered, ordered, and nested lists.</p>

    <h3 id="unordered" :ref="(el) => emit('set-ref', el)">Unordered</h3>
    <p>Use unordered lists for items without a specific sequence. Start each item with a <code>-</code> symbol.</p>
    <div class="preview-box">
      <div class="preview-display list-v">
        <ul><li>I'm a list item.</li><li>I'm another list item.</li><li>I'm the last list item.</li></ul>
      </div>
      <div class="preview-code pre-wrap">
- I'm a list item.
- I'm another list item.
- I'm the last list item.</div>
    </div>

    <h3 id="ordered" :ref="(el) => emit('set-ref', el)">Ordered</h3>
    <p>Use ordered lists when item order matters. Start each item with a number.</p>
    <div class="preview-box">
      <div class="preview-display list-v">
        <ol><li>I'm a list item.</li><li>I'm another list item.</li><li>I'm the last list item.</li></ol>
      </div>
      <div class="preview-code pre-wrap">
1. I'm a list item.
2. I'm another list item.
3. I'm the last list item.</div>
    </div>

    <h3 id="nested" :ref="(el) => emit('set-ref', el)">Nested</h3>
    <p>Create hierarchical lists with sub-items. Indent sub-items by four spaces.</p>
    <div class="preview-box">
      <div class="preview-display list-v">
        <ul>
          <li>I'm a list item.
            <ul><li>I'm a nested list item.</li><li>I'm another nested list item.</li></ul>
          </li>
          <li>I'm another list item.</li>
        </ul>
      </div>
      <div class="preview-code pre-wrap">
- I'm a list item.
  - I'm a nested list item.
  - I'm another nested list item.
- I'm another list item.</div>
    </div>

    <h2 id="tables" :ref="(el) => emit('set-ref', el)">Tables</h2>
    <p>Present structured data in rows and columns clearly. Tables are ideal for comparing data or listing properties.</p>
    <div class="table-container">
      <table class="custom-table">
        <thead><tr><th>Prop</th><th>Default</th><th>Type</th></tr></thead>
        <tbody>
          <tr><td><code>name</code></td><td></td><td><code class="ts-code">string</code></td></tr>
          <tr><td><code>size</code></td><td><code>md</code></td><td><code class="ts-code">string</code></td></tr>
          <tr><td><code>color</code></td><td><code>neutral</code></td><td><code class="ts-code">string</code></td></tr>
        </tbody>
      </table>
    </div>
    <div class="docs-code-block">
      <pre><code>| Prop    | Default   | Type                     |
|---------|-----------|--------------------------|
| `name`  |           | `string`{lang="ts-type"} |
| `size`  | `md`      | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |</code></pre>
    </div>

    <h2 id="blockquotes" :ref="(el) => emit('set-ref', el)">Blockquotes</h2>
    <p>Highlight important quotations, citations, or emphasized text.</p>
    
    <h3 id="singleline" :ref="(el) => emit('set-ref', el)">Singleline</h3>
    <div class="preview-box">
      <div class="preview-display blockquote-v">
        <blockquote>Nuxt UI is a collection of Vue components, composables and utils designed to create beautiful and accessible user interfaces.</blockquote>
      </div>
      <div class="preview-code">
        <code><span style="color: var(--primary)">&gt;</span> Nuxt UI is a collection of Vue components...</code>
      </div>
    </div>

    <h3 id="multiline" :ref="(el) => emit('set-ref', el)">Multiline</h3>
    <div class="preview-box">
      <div class="preview-display blockquote-v">
        <blockquote>
          <p>Nuxt UI is a collection of Vue components, composables and utils designed to create beautiful and accessible user interfaces.</p>
          <p>Create beautiful, responsive, and accessible Vue applications with Nuxt UI.</p>
        </blockquote>
      </div>
      <div class="preview-code pre-wrap">
<span style="color: var(--primary)">&gt;</span> Nuxt UI is a collection of Vue components...
<span style="color: var(--primary)">&gt;</span>
<span style="color: var(--primary)">&gt;</span> Create beautiful, responsive, and accessible...</div>
    </div>

    <div class="docs-nav-cards">
      <a href="#" class="docs-nav-card prev" @click.prevent="emit('navigate', 'usage')">
        <div class="docs-nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></div>
        <span class="docs-nav-label">Previous</span>
        <h3>Usage</h3>
        <p>Learn how to write and customize.</p>
      </a>
      <a href="#" class="docs-nav-card next" @click.prevent="emit('navigate', 'codeblocks')">
        <div class="docs-nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        <span class="docs-nav-label">Next</span>
        <h3>Code Blocks</h3>
        <p>Display inline code and code blocks.</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.preview-box { border: 1px solid var(--border); border-radius: 0.5rem; margin: 1.5rem 0 2.5rem 0; overflow: hidden; background: var(--card-bg); }
.preview-display { padding: 2.5rem; display: flex; align-items: center; border-bottom: 1px solid var(--border); }
.preview-code { padding: 1rem; background: var(--code-bg); font-family: monospace; font-size: 0.875rem; color: var(--text); }
.preview-link { color: var(--primary); text-decoration: underline; font-weight: 500; }
.pre-wrap { white-space: pre-wrap; }
.list-v ul, .list-v ol { margin: 0; padding-left: 1.2rem; color: var(--text); }
.list-v li { margin-bottom: 0.4rem; }
.list-v ul ul { margin-top: 0.4rem; list-style-type: circle; }
.blockquote-v blockquote { border-left: 4px solid var(--border); padding-left: 1rem; margin: 0; color: var(--text); font-style: italic; }
.blockquote-v p { margin-bottom: 0.8rem; }
.blockquote-v p:last-child { margin-bottom: 0; }
.table-container { border: 1px solid var(--border); border-radius: 0.5rem; overflow: hidden; margin: 1.5rem 0; }
.custom-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; }
.custom-table th, .custom-table td { padding: 0.75rem 1rem; border-bottom: 1px solid var(--border); }
.custom-table th { background: var(--code-header); color: var(--heading); font-weight: 600; }
.custom-table td { color: var(--text); }
.ts-code { color: #38bdf8; font-family: monospace; }
</style>