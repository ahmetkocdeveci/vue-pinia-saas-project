<script setup>
const emit = defineEmits(['set-ref', 'navigate'])
</script>

<template>
  <div class="docs-page-content">
    <h1>Introduction</h1>
    <p class="subtitle">Welcome to Nuxt UI SaaS template.</p>
    
    <div class="divider"></div>

    <p>This template is a ready-to-use SaaS template made with <a href="#">Nuxt UI</a> to create beautiful & responsive Nuxt applications in minutes.</p>
    <p>This template includes a customizable landing page, a pricing page, a documentation, a blog and authentication pages (login, register).</p>
    
    <h2 id="key-features" :ref="(el) => emit('set-ref', el)">Key Features</h2>
    <p>This template includes a range of features designed to streamline documentation management:</p>
    
    <ul>
      <li><strong>Powered by Nuxt:</strong> Utilizes the latest Nuxt framework for optimal performance.</li>
      <li><strong>Built with Nuxt UI:</strong> Integrates a comprehensive suite of UI components.</li>
      <li><strong>MDC Syntax via Nuxt Content:</strong> Supports Markdown with component integration for dynamic content.</li>
      <li><strong>Auto-generated Sidebar Navigation:</strong> Automatically generates navigation from content structure.</li>
      <li><strong>Full-Text Search:</strong> Includes built-in search functionality for content discovery.</li>
      <li><strong>Optimized Typography:</strong> Features refined typography for enhanced readability.</li>
      <li><strong>Dark Mode:</strong> Offers dark mode support for user preference.</li>
      <li><strong>Extensive Functionality:</strong> Explore the template to fully appreciate its capabilities.</li>
    </ul>

    <div class="docs-nav-cards right-only">
      <a href="#" class="docs-nav-card next" @click.prevent="emit('navigate', 'installation')">
        <div class="docs-nav-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </div>
        <span class="docs-nav-label">Next</span>
        <h3>Installation</h3>
        <p>Get started with Nuxt UI SaaS template.</p>
      </a>
    </div>
  </div>
</template>