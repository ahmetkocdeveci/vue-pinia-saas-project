<script setup>
const emit = defineEmits(['set-ref', 'navigate'])
</script>

<template>
  <div class="docs-page-content">
    <h1>Usage</h1>
    <p class="subtitle">Learn how to write and customize.</p>
    
    <div class="divider"></div>

    <h2 id="writing-content" :ref="(el) => emit('set-ref', el)">Writing content</h2>
    <p>All your content lives in the <code class="inline-code">content/</code> directory. This template uses Nuxt Content to turn your Markdown files into pages.</p>
    
    <p>You can use standard Markdown syntax to create your content. Vue components can also be embedded directly within the markdown using the MDC syntax.</p>

    <div class="docs-nav-cards">
      <a href="#" class="docs-nav-card prev" @click.prevent="emit('navigate', 'installation')">
        <div class="docs-nav-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </div>
        <span class="docs-nav-label">Previous</span>
        <h3>Installation</h3>
        <p>Get started with Nuxt UI SaaS template.</p>
      </a>

      <a href="#" class="docs-nav-card next" @click.prevent="emit('navigate', 'markdown')">
        <div class="docs-nav-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M4 12h8"></path><path d="M4 18V6"></path><path d="M12 18V6"></path><path d="M17 12h.01"></path><path d="M21 12h.01"></path></svg>
        </div>
        <span class="docs-nav-label">Next</span>
        <h3>Markdown Syntax</h3>
        <p>Learn how to write markdown content.</p>
      </a>
    </div>
  </div>
</template>