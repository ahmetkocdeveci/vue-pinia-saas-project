<script setup>
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['set-ref', 'navigate'])
const { t } = useI18n()
</script>

<template>
  <div class="docs-page-content">
    <header class="page-head">
      <h1>{{ t('docs.pages.markdown') }}</h1>
      <p class="subtitle">{{ t('docs.searchDesc.markdown') }}</p>
    </header>

    <div class="divider"></div>

    <h2 id="titles" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.titlesTitle') }}</h2>
    <p>{{ t('docs.markdown.titlesDesc') }}</p>
    
    <h3 id="titles-sub" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.titlesTitle') }}</h3>
    <div class="preview-box">
      <div class="preview-display">
        <span style="font-size: 1.8rem; font-weight: 700; color: var(--heading)">{{ t('docs.markdown.titlesTitle') }}</span>
      </div>
      <div class="preview-code">
        <code><span style="color: var(--primary)">##</span> {{ t('docs.markdown.titlesTitle') }}</code>
      </div>
    </div>

    <h2 id="subtitles" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.subtitlesTitle') }}</h2>
    <p>{{ t('docs.markdown.subtitlesDesc') }}</p>
    
    <h3 id="subtitles-sub" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.subtitlesTitle') }}</h3>
    <div class="preview-box">
      <div class="preview-display">
        <span style="font-size: 1.4rem; font-weight: 600; color: var(--heading)">{{ t('docs.markdown.subtitlesTitle') }}</span>
      </div>
      <div class="preview-code">
        <code><span style="color: var(--primary)">###</span> {{ t('docs.markdown.subtitlesTitle') }}</code>
      </div>
    </div>
    <p>{{ t('docs.markdown.anchorDesc') }}</p>

    <h2 id="text-formatting" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.formattingTitle') }}</h2>
    <p>{{ t('docs.markdown.formattingDesc') }}</p>

    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr><th>{{ t('docs.markdown.tableStyle') }}</th><th>{{ t('docs.markdown.tableHow') }}</th><th>{{ t('docs.markdown.tableResult') }}</th></tr>
        </thead>
        <tbody>
          <tr><td>{{ t('docs.markdown.bold') }}</td><td><code class="inline-code">**{{ t('docs.markdown.bold').toLowerCase() }}**</code></td><td><strong>{{ t('docs.markdown.bold') }}</strong></td></tr>
          <tr><td>{{ t('docs.markdown.italic') }}</td><td><code class="inline-code">*{{ t('docs.markdown.italic').toLowerCase() }}*</code></td><td><em>{{ t('docs.markdown.italic') }}</em></td></tr>
          <tr><td>{{ t('docs.markdown.strike') }}</td><td><code class="inline-code">~~{{ t('docs.markdown.strike').toLowerCase() }}~~</code></td><td><del>{{ t('docs.markdown.strike') }}</del></td></tr>
        </tbody>
      </table>
    </div>

    <p>{{ t('docs.markdown.combineDesc') }}</p>
    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr><th>{{ t('docs.markdown.tableStyle') }}</th><th>{{ t('docs.markdown.tableHow') }}</th><th>{{ t('docs.markdown.tableResult') }}</th></tr>
        </thead>
        <tbody>
          <tr><td>{{ t('docs.markdown.boldItalic') }}</td><td><code class="inline-code">**_{{ t('docs.markdown.boldItalic').toLowerCase() }}_**</code></td><td><strong><em>{{ t('docs.markdown.boldItalic') }}</em></strong></td></tr>
          <tr><td>{{ t('docs.markdown.boldStrike') }}</td><td><code class="inline-code">~~**{{ t('docs.markdown.bold').toLowerCase() }}**~~</code></td><td><del><strong>{{ t('docs.markdown.bold') }}</strong></del></td></tr>
          <tr><td>{{ t('docs.markdown.italicStrike') }}</td><td><code class="inline-code">~~*{{ t('docs.markdown.italic').toLowerCase() }}*~~</code></td><td><del><em>{{ t('docs.markdown.italic') }}</em></del></td></tr>
        </tbody>
      </table>
    </div>

    <p v-html="t('docs.markdown.mathDesc')"></p>
    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr><th>{{ t('docs.markdown.tableStyle') }}</th><th>{{ t('docs.markdown.tableHow') }}</th><th>{{ t('docs.markdown.tableResult') }}</th></tr>
        </thead>
        <tbody>
          <tr><td>{{ t('docs.markdown.sup') }}</td><td><code class="inline-code">&lt;sup&gt;{{ t('docs.markdown.sup').toLowerCase() }}&lt;/sup&gt;</code></td><td><sup>{{ t('docs.markdown.sup').toLowerCase() }}</sup></td></tr>
          <tr><td>{{ t('docs.markdown.sub') }}</td><td><code class="inline-code">&lt;sub&gt;{{ t('docs.markdown.sub').toLowerCase() }}&lt;/sub&gt;</code></td><td><sub>{{ t('docs.markdown.sub').toLowerCase() }}</sub></td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="links" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.linksTitle') }}</h2>
    <p v-html="t('docs.markdown.linksDesc')"></p>
    <div class="preview-box">
      <div class="preview-display">
        <a href="https://ui.nuxt.com" target="_blank" class="preview-link">Nuxt UI</a>
      </div>
      <div class="preview-code">
        <code>[Nuxt UI](https://ui.nuxt.com/getting-started/installation)</code>
      </div>
    </div>

    <h3 id="internal-links" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.internalLinksTitle') }}</h3>
    <p v-html="t('docs.markdown.internalLinksDesc')"></p>
    <div class="preview-box">
      <div class="preview-display">
        <a href="#" class="preview-link">{{ t('docs.pages.installation') }}</a>
      </div>
      <div class="preview-code">
        <code>[{{ t('docs.pages.installation') }}](/getting-started/installation)</code>
      </div>
    </div>

    <h2 id="lists" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.listsTitle') }}</h2>
    <p>{{ t('docs.markdown.listsDesc') }}</p>

    <h3 id="unordered" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.unorderedTitle') }}</h3>
    <p v-html="t('docs.markdown.unorderedDesc')"></p>
    <div class="preview-box">
      <div class="preview-display list-v">
        <ul><li>{{ t('docs.markdown.listItem1') }}</li><li>{{ t('docs.markdown.listItem2') }}</li><li>{{ t('docs.markdown.listItem3') }}</li></ul>
      </div>
      <div class="preview-code pre-wrap">
- {{ t('docs.markdown.listItem1') }}
- {{ t('docs.markdown.listItem2') }}
- {{ t('docs.markdown.listItem3') }}</div>
    </div>

    <h3 id="ordered" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.orderedTitle') }}</h3>
    <p>{{ t('docs.markdown.orderedDesc') }}</p>
    <div class="preview-box">
      <div class="preview-display list-v">
        <ol><li>{{ t('docs.markdown.listItem1') }}</li><li>{{ t('docs.markdown.listItem2') }}</li><li>{{ t('docs.markdown.listItem3') }}</li></ol>
      </div>
      <div class="preview-code pre-wrap">
1. {{ t('docs.markdown.listItem1') }}
2. {{ t('docs.markdown.listItem2') }}
3. {{ t('docs.markdown.listItem3') }}</div>
    </div>

    <h3 id="nested" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.nestedTitle') }}</h3>
    <p>{{ t('docs.markdown.nestedDesc') }}</p>
    <div class="preview-box">
      <div class="preview-display list-v">
        <ul>
          <li>{{ t('docs.markdown.listItem1') }}
            <ul><li>{{ t('docs.markdown.nestedItem1') }}</li><li>{{ t('docs.markdown.nestedItem2') }}</li></ul>
          </li>
          <li>{{ t('docs.markdown.listItem2') }}</li>
        </ul>
      </div>
      <div class="preview-code pre-wrap">
- {{ t('docs.markdown.listItem1') }}
  - {{ t('docs.markdown.nestedItem1') }}
  - {{ t('docs.markdown.nestedItem2') }}
- {{ t('docs.markdown.listItem2') }}</div>
    </div>

    <h2 id="tables" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.tablesTitle') }}</h2>
    <p>{{ t('docs.markdown.tablesDesc') }}</p>
    <div class="table-container">
      <table class="custom-table">
        <thead><tr><th>{{ t('docs.markdown.tableProp') }}</th><th>{{ t('docs.markdown.tableDefault') }}</th><th>{{ t('docs.markdown.tableType') }}</th></tr></thead>
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

    <h2 id="blockquotes" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.blockquotesTitle') }}</h2>
    <p>{{ t('docs.markdown.blockquotesDesc') }}</p>
    
    <h3 id="singleline" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.singlelineTitle') }}</h3>
    <div class="preview-box">
      <div class="preview-display blockquote-v">
        <blockquote>{{ t('docs.markdown.quote1') }}</blockquote>
      </div>
      <div class="preview-code">
        <code><span style="color: var(--primary)">&gt;</span> {{ t('docs.markdown.quote1Short') }}</code>
      </div>
    </div>

    <h3 id="multiline" :ref="(el) => emit('set-ref', el)">{{ t('docs.markdown.multilineTitle') }}</h3>
    <div class="preview-box">
      <div class="preview-display blockquote-v">
        <blockquote>
          <p>{{ t('docs.markdown.quote1') }}</p>
          <p>{{ t('docs.markdown.quote2') }}</p>
        </blockquote>
      </div>
      <div class="preview-code pre-wrap">
<span style="color: var(--primary)">&gt;</span> {{ t('docs.markdown.quote1Short') }}
<span style="color: var(--primary)">&gt;</span>
<span style="color: var(--primary)">&gt;</span> {{ t('docs.markdown.quote2Short') }}</div>
    </div>

    <div class="docs-nav-cards">
      <a href="#" class="docs-nav-card prev" @click.prevent="emit('navigate', 'usage')">
        <div class="docs-nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></div>
        <span class="docs-nav-label">{{ t('docs.nav.previous') }}</span>
        <h3>{{ t('docs.pages.usage') }}</h3>
        <p>{{ t('docs.searchDesc.usage') }}</p>
      </a>
      <a href="#" class="docs-nav-card next" @click.prevent="emit('navigate', 'codeblocks')">
        <div class="docs-nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        <span class="docs-nav-label">{{ t('docs.nav.next') }}</span>
        <h3>{{ t('docs.pages.codeblocks') }}</h3>
        <p>{{ t('docs.searchDesc.codeblocks') }}</p>
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
.list-v ul, .list-v ol { margin: 0; padding-inline-start: 1.2rem; color: var(--text); }
.list-v li { margin-bottom: 0.4rem; }
.list-v ul ul { margin-top: 0.4rem; list-style-type: circle; }
.blockquote-v blockquote { border-inline-start: 4px solid var(--border); padding-inline-start: 1rem; margin: 0; color: var(--text); font-style: italic; }
.blockquote-v p { margin-bottom: 0.8rem; }
.blockquote-v p:last-child { margin-bottom: 0; }
.table-container { border: 1px solid var(--border); border-radius: 0.5rem; overflow: hidden; margin: 1.5rem 0; }
.custom-table { width: 100%; border-collapse: collapse; text-align: start; font-size: 0.9rem; }
.custom-table th, .custom-table td { padding: 0.75rem 1rem; border-bottom: 1px solid var(--border); text-align: start; }
.custom-table th { background: var(--code-header); color: var(--heading); font-weight: 600; }
.custom-table td { color: var(--text); }
.ts-code { color: #38bdf8; font-family: monospace; }
</style>