<script setup>
const emit = defineEmits(['set-ref', 'navigate'])
const copyToClipboard = (text) => navigator.clipboard.writeText(text)
</script>

<template>
  <div>
    <div class="content-header">
      <h1>Installation</h1>
      <p class="subtitle">Get started with Nuxt UI SaaS template.</p>
    </div>
    <div class="prose">
      <h2 id="quick-start" :ref="(el) => emit('set-ref', el)">Quick Start</h2>
      <p>You can start a fresh new project with:</p>
      
      <div class="nuxt-prose-code" style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 0.5rem; margin: 1.5rem 0 2.5rem 0; overflow: hidden;">
        <div class="code-header" style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 1rem; border-bottom: 1px solid #1e293b; background-color: rgba(15, 23, 42, 0.5);">
          <span class="language-badge" style="font-size: 0.75rem; color: #94a3b8; font-weight: 600;">Terminal</span>
          <button @click="copyToClipboard('npx nuxi init -t github:nuxt-ui-templates/saas')" style="background: transparent; border: none; color: #94a3b8; cursor: pointer; padding: 0.25rem; border-radius: 0.375rem; transition: all 0.2s; display: flex; align-items: center; justify-content: center;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          </button>
        </div>
        <pre style="margin: 0; padding: 1.25rem 1.5rem; overflow-x: auto; font-size: 0.875rem; line-height: 1.7; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;"><code style="color: #e2e8f0;">npx nuxi init -t github:nuxt-ui-templates/saas</code></pre>
      </div>

      <p>or create a new repository from GitHub:</p>
      <ol>
        <li>Open <a href="#">https://github.com/nuxt-ui-templates/saas</a></li>
        <li>Click on <strong>Use this template</strong> button</li>
        <li>Enter repository name and click on <strong>Create repository from template</strong> button</li>
        <li>Clone your new repository</li>
        <li>Install dependencies with your favorite package manager</li>
        <li>Start development server</li>
      </ol>
      <p>That's it! You can now start writing your documentation in the <code>content/</code> directory 🚀</p>
    </div>
    <div class="next-page-container">
      <a href="#" class="prev-card" @click.prevent="emit('navigate', 'introduction')">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </div>
        <div class="card-text">
          <span class="direction">Previous</span>
          <h3>Introduction</h3>
          <p>Welcome to Nuxt UI SaaS template.</p>
        </div>
      </a>
      <a href="#" class="next-card" @click.prevent="emit('navigate', 'usage')">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
        </div>
        <div class="card-text">
          <span class="direction">Next</span>
          <h3>Usage</h3>
          <p>Learn how to write and customize.</p>
        </div>
      </a>
    </div>
  </div>
</template>