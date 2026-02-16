<script setup>
defineProps({
  currentPage: String,
  activeHeading: String,
  isMobile: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <aside :class="isMobile ? 'sidebar-mobile-toc' : 'sidebar-right'">
    <div class="toc-container">
      <h4 v-if="!isMobile">On this page</h4>
      
      <ul class="toc-list" v-if="currentPage === 'introduction'">
        <li><a href="#key-features" :class="{ 'active': activeHeading === 'key-features' }">Key Features</a></li>
      </ul>
      
      <ul class="toc-list" v-if="currentPage === 'installation'">
        <li><a href="#quick-start" :class="{ 'active': activeHeading === 'quick-start' }">Quick Start</a></li>
      </ul>
      
      <ul class="toc-list" v-if="currentPage === 'usage'">
        <li><a href="#writing-content" :class="{ 'active': activeHeading === 'writing-content' }">Writing content</a></li>
      </ul>
      
      <ul class="toc-list" v-if="currentPage === 'markdown'">
        <li><a href="#titles" :class="{ 'active': activeHeading === 'titles' }">Titles</a></li>
        <li><a href="#subtitles" class="toc-sub" :class="{ 'active': activeHeading === 'subtitles' }">Subtitles</a></li>
        <li><a href="#text-formatting" :class="{ 'active': activeHeading === 'text-formatting' }">Text Formatting</a></li>
        <li><a href="#links" :class="{ 'active': activeHeading === 'links' }">Links</a></li>
        <li><a href="#internal-links" class="toc-sub" :class="{ 'active': activeHeading === 'internal-links' }">Internal links</a></li>
        <li><a href="#lists" :class="{ 'active': activeHeading === 'lists' }">Lists</a></li>
        <li><a href="#unordered" class="toc-sub" :class="{ 'active': activeHeading === 'unordered' }">Unordered</a></li>
        <li><a href="#ordered" class="toc-sub" :class="{ 'active': activeHeading === 'ordered' }">Ordered</a></li>
        <li><a href="#nested" class="toc-sub" :class="{ 'active': activeHeading === 'nested' }">Nested</a></li>
        <li><a href="#tables" :class="{ 'active': activeHeading === 'tables' }">Tables</a></li>
        <li><a href="#blockquotes" :class="{ 'active': activeHeading === 'blockquotes' }">Blockquotes</a></li>
        <li><a href="#singleline" class="toc-sub" :class="{ 'active': activeHeading === 'singleline' }">Singleline</a></li>
        <li><a href="#multiline" class="toc-sub" :class="{ 'active': activeHeading === 'multiline' }">Multiline</a></li>
      </ul>
      
      <ul class="toc-list" v-if="currentPage === 'codeblocks'">
        <li class="toc-heading">Basic</li>
        <li><a href="#inline-code" :class="{ 'active': activeHeading === 'inline-code' }">Inline Code</a></li>
        <li><a href="#code-blocks" :class="{ 'active': activeHeading === 'code-blocks' }">Code Blocks</a></li>
        <li class="toc-heading">Advanced</li>
        <li><a href="#code-group" :class="{ 'active': activeHeading === 'code-group' }">CodeGroup</a></li>
        <li><a href="#code-tree" :class="{ 'active': activeHeading === 'code-tree' }">CodeTree</a></li>
        <li><a href="#code-preview" :class="{ 'active': activeHeading === 'code-preview' }">CodePreview</a></li>
        <li><a href="#code-collapse" :class="{ 'active': activeHeading === 'code-collapse' }">CodeCollapse</a></li>
      </ul>

      <ul class="toc-list" v-if="currentPage === 'prose'">
        <li><a href="#accordion" :class="{ 'active': activeHeading === 'accordion' }">Accordion</a></li>
        <li><a href="#badge" :class="{ 'active': activeHeading === 'badge' }">Badge</a></li>
        <li><a href="#callout" :class="{ 'active': activeHeading === 'callout' }">Callout</a></li>
        <li><a href="#card" :class="{ 'active': activeHeading === 'card' }">Card</a></li>
        <li><a href="#card-group" :class="{ 'active': activeHeading === 'card-group' }">CardGroup</a></li>
        <li><a href="#collapsible" :class="{ 'active': activeHeading === 'collapsible' }">Collapsible</a></li>
        <li><a href="#field" :class="{ 'active': activeHeading === 'field' }">Field</a></li>
        <li><a href="#field-group" :class="{ 'active': activeHeading === 'field-group' }">FieldGroup</a></li>
        <li><a href="#icon" :class="{ 'active': activeHeading === 'icon' }">Icon</a></li>
        <li><a href="#kbd" :class="{ 'active': activeHeading === 'kbd' }">Kbd</a></li>
        <li><a href="#tabs" :class="{ 'active': activeHeading === 'tabs' }">Tabs</a></li>
        <li><a href="#steps" :class="{ 'active': activeHeading === 'steps' }">Steps</a></li>
      </ul>
      
      <ul class="toc-list" v-if="currentPage === 'images'">
        <li><a href="#image" :class="{ 'active': activeHeading === 'image' }">Image</a></li>
        <li><a href="#using-markdown" class="toc-sub" :class="{ 'active': activeHeading === 'using-markdown' }">Using Markdown</a></li>
        <li><a href="#using-embeds" class="toc-sub" :class="{ 'active': activeHeading === 'using-embeds' }">Using Embeds</a></li>
        <li><a href="#embeds-and-html-elements" :class="{ 'active': activeHeading === 'embeds-and-html-elements' }">Embeds and HTML elements</a></li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-right { position: sticky; top: 100px; height: calc(100vh - 100px); padding-top: 1rem; overflow-y: auto; }
.sidebar-mobile-toc { width: 100%; padding-top: 0; }

.toc-container h4 { font-size: 0.85rem; font-weight: 600; color: var(--text-main); margin: 0 0 1rem 0; }
.toc-list { list-style: none; padding: 0; margin: 0; border-left: 1px solid rgba(255, 255, 255, 0.1); }
.toc-list a { display: block; padding: 0.3rem 0 0.3rem 1rem; color: var(--text-muted); text-decoration: none; font-size: 0.85rem; transition: 0.2s; margin-left: -1px; border-left: 1px solid transparent; }
.toc-list a.toc-sub { padding-left: 1.5rem; color: #64748b; }
.toc-list a:hover { color: var(--text-main); }
.toc-list a.active { color: var(--primary); font-weight: 500; border-left-color: var(--primary); }
.toc-heading { padding: 0.5rem 0 0.2rem 1rem; font-size: 0.8rem; font-weight: 600; color: var(--text-main); text-transform: uppercase; letter-spacing: 0.05em; margin-top: 0.5rem; }
</style>