<script setup>
defineProps({
  currentPage: String,
  activeHeading: String,
  isMobile: { type: Boolean, default: false }
})
</script>

<template>
  <div class="toc-wrapper">
    <h4 v-if="!isMobile" class="toc-header">On this page</h4>
    
    <nav class="toc-nav">
      <ul v-if="currentPage === 'introduction'">
        <li><a href="#key-features" :class="{active: activeHeading === 'key-features'}" class="toc-link">Key Features</a></li>
      </ul>

      <ul v-else-if="currentPage === 'installation'">
        <li><a href="#quick-start" :class="{active: activeHeading === 'quick-start'}" class="toc-link">Quick Start</a></li>
      </ul>

      <ul v-else-if="currentPage === 'usage'">
        <li><a href="#writing-content" :class="{active: activeHeading === 'writing-content'}" class="toc-link">Writing content</a></li>
      </ul>

      <ul v-else-if="currentPage === 'markdown'">
        <li>
          <a href="#titles" :class="{active: activeHeading === 'titles'}" class="toc-link">Titles</a>
          <ul class="nested">
            <li><a href="#titles-sub" :class="{active: activeHeading === 'titles-sub'}" class="toc-link">Titles</a></li>
          </ul>
        </li>
        <li>
          <a href="#subtitles" :class="{active: activeHeading === 'subtitles'}" class="toc-link">Subtitles</a>
          <ul class="nested">
            <li><a href="#subtitles-sub" :class="{active: activeHeading === 'subtitles-sub'}" class="toc-link">Subtitles</a></li>
          </ul>
        </li>
        <li><a href="#text-formatting" :class="{active: activeHeading === 'text-formatting'}" class="toc-link">Text Formatting</a></li>
        <li>
          <a href="#links" :class="{active: activeHeading === 'links'}" class="toc-link">Links</a>
          <ul class="nested">
            <li><a href="#internal-links" :class="{active: activeHeading === 'internal-links'}" class="toc-link">Internal links</a></li>
          </ul>
        </li>
        <li>
          <a href="#lists" :class="{active: activeHeading === 'lists'}" class="toc-link">Lists</a>
          <ul class="nested">
            <li><a href="#unordered" :class="{active: activeHeading === 'unordered'}" class="toc-link">Unordered</a></li>
            <li><a href="#ordered" :class="{active: activeHeading === 'ordered'}" class="toc-link">Ordered</a></li>
            <li><a href="#nested" :class="{active: activeHeading === 'nested'}" class="toc-link">Nested</a></li>
          </ul>
        </li>
        <li><a href="#tables" :class="{active: activeHeading === 'tables'}" class="toc-link">Tables</a></li>
        <li>
          <a href="#blockquotes" :class="{active: activeHeading === 'blockquotes'}" class="toc-link">Blockquotes</a>
          <ul class="nested">
            <li><a href="#singleline" :class="{active: activeHeading === 'singleline'}" class="toc-link">Singleline</a></li>
            <li><a href="#multiline" :class="{active: activeHeading === 'multiline'}" class="toc-link">Multiline</a></li>
          </ul>
        </li>
      </ul>

      <ul v-else-if="currentPage === 'codeblocks'">
        <li>
          <a href="#basic" :class="{active: activeHeading === 'basic'}" class="toc-link">Basic</a>
          <ul class="nested">
            <li><a href="#inline-code" :class="{active: activeHeading === 'inline-code'}" class="toc-link">Inline Code</a></li>
            <li><a href="#code-blocks" :class="{active: activeHeading === 'code-blocks'}" class="toc-link">Code Blocks</a></li>
            <li><a href="#highlight-line" :class="{active: activeHeading === 'highlight-line'}" class="toc-link">Highlight Line</a></li>
          </ul>
        </li>
        <li>
          <a href="#advanced" :class="{active: activeHeading === 'advanced'}" class="toc-link">Advanced</a>
          <ul class="nested">
            <li><a href="#codegroup" :class="{active: activeHeading === 'codegroup'}" class="toc-link">CodeGroup</a></li>
            <li><a href="#codetree" :class="{active: activeHeading === 'codetree'}" class="toc-link">CodeTree</a></li>
            <li><a href="#codepreview" :class="{active: activeHeading === 'codepreview'}" class="toc-link">CodePreview</a></li>
            <li><a href="#codecollapse" :class="{active: activeHeading === 'codecollapse'}" class="toc-link">CodeCollapse</a></li>
          </ul>
        </li>
      </ul>

      <ul v-else-if="currentPage === 'prose'">
        <li><a href="#accordion" :class="{active: activeHeading === 'accordion'}" class="toc-link">Accordion</a></li>
        <li><a href="#badge" :class="{active: activeHeading === 'badge'}" class="toc-link">Badge</a></li>
        <li><a href="#callout" :class="{active: activeHeading === 'callout'}" class="toc-link">Callout</a></li>
        <li><a href="#card" :class="{active: activeHeading === 'card'}" class="toc-link">Card</a></li>
        <li><a href="#card-group" :class="{active: activeHeading === 'card-group'}" class="toc-link">CardGroup</a></li>
        <li><a href="#collapsible" :class="{active: activeHeading === 'collapsible'}" class="toc-link">Collapsible</a></li>
        <li><a href="#field" :class="{active: activeHeading === 'field'}" class="toc-link">Field</a></li>
        <li><a href="#field-group" :class="{active: activeHeading === 'field-group'}" class="toc-link">FieldGroup</a></li>
        <li><a href="#icon" :class="{active: activeHeading === 'icon'}" class="toc-link">Icon</a></li>
        <li><a href="#kbd" :class="{active: activeHeading === 'kbd'}" class="toc-link">Kbd</a></li>
        <li><a href="#tabs" :class="{active: activeHeading === 'tabs'}" class="toc-link">Tabs</a></li>
        <li><a href="#steps" :class="{active: activeHeading === 'steps'}" class="toc-link">Steps</a></li>
      </ul>

      <ul v-else-if="currentPage === 'images'">
        <li><a href="#image" :class="{active: activeHeading === 'image'}" class="toc-link">Image</a></li>
        <li><a href="#using-markdown" :class="{active: activeHeading === 'using-markdown'}" class="toc-link">Using Markdown</a></li>
        <li><a href="#using-embeds" :class="{active: activeHeading === 'using-embeds'}" class="toc-link">Using Embeds</a></li>
        <li><a href="#embeds-and-html" :class="{active: activeHeading === 'embeds-and-html'}" class="toc-link">Embeds and HTML elements</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.toc-wrapper { padding-bottom: 2rem; }
.toc-header { font-size: 0.85rem; font-weight: 600; color: var(--heading); margin-bottom: 1rem; }
.toc-nav ul { list-style: none; padding: 0; border-left: 1px solid var(--border); }
.toc-nav .nested { border-left: none; padding-left: 1rem; }
.toc-link {
  display: block;
  padding: 0.35rem 0 0.35rem 1rem;
  font-size: 0.85rem;
  color: var(--text);
  text-decoration: none;
  border-left: 2px solid transparent;
  margin-left: -1px;
  transition: all 0.2s ease;
}
.toc-link:hover { color: var(--heading); }
.toc-link.active {
  color: var(--primary);
  border-left-color: var(--primary);
  font-weight: 500;
}
</style>