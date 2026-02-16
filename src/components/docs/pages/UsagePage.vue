<script setup>
const emit = defineEmits(['set-ref', 'navigate'])
</script>

<template>
  <div>
    <div class="content-header">
      <h1>Usage</h1>
      <p class="subtitle">Learn how to write and customize your documentation.</p>
    </div>
    
    <div class="prose">
      <p>This is only a basic example of what you can achieve with <a href="#">Nuxt UI</a>, you can tweak it to match your needs. The template uses several Nuxt modules underneath like <code>@nuxt/content</code> for the content and <code>nuxt-og-image</code> for social previews.</p>
      <p><a href="#">Learn more on how to take the most out of Nuxt UI!</a></p>
      
      <h2 id="writing-content" :ref="(el) => emit('set-ref', el)">Writing content</h2>
      <p>You can just start writing <code>.md</code> or <code>.yml</code> files in the <code>content/</code> directory to have your pages updated. The navigation will be automatically generated in the left aside and in the mobile menu. You will also be able to go through your content with full-text search.</p>
    </div>

    <div class="next-page-container">
      <a href="#" class="prev-card" @click.prevent="emit('navigate', 'installation')">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </div>
        <div class="card-text">
          <span class="direction">Previous</span>
          <h3>Installation</h3>
          <p>Get started with Nuxt UI SaaS template.</p>
        </div>
      </a>
      
      <a href="#" class="next-card" @click.prevent="emit('navigate', 'markdown')">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h8"></path><path d="M4 18V6"></path><path d="M12 18V6"></path><path d="M17 12h.01"></path><path d="M21 12h.01"></path></svg>
        </div>
        <div class="card-text">
          <span class="direction">Next</span>
          <h3>Markdown Syntax</h3>
          <p>Text, title, and styling in standard markdown.</p>
        </div>
      </a>
    </div>
  </div>
</template>