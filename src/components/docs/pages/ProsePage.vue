<script setup>
import { ref } from 'vue'

const emit = defineEmits(['set-ref', 'navigate'])
const copyToClipboard = (text) => navigator.clipboard.writeText(text)

// Reaktif Durumlar
const activeAccordion = ref(null)
const isCollapsibleOpen = ref(false)
const activeTab = ref('preview')

const toggleAccordion = (index) => {
  activeAccordion.value = activeAccordion.value === index ? null : index
}
</script>

<template>
  <div>
    <div class="content-header">
      <h1>Prose Components</h1>
      <p class="subtitle">Components to help you structure your content.</p>
    </div>
    
    <div class="prose">
      
      <h2 id="accordion" :ref="(el) => emit('set-ref', el)">Accordion</h2>
      <p>Use <code>accordion</code> and <code>accordion-item</code> to create collapsible content sections. Accordions are useful for organizing FAQs, expandable details, or grouped information in an interactive way.</p>
      
      <div class="component-preview">
        <div class="accordion">
          <div class="accordion-item" :class="{ active: activeAccordion === 1 }">
            <button class="accordion-trigger" @click="toggleAccordion(1)">
              <div class="trigger-content">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="acc-icon"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <span>What are the main considerations when upgrading to Nuxt UI v3?</span>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="accordion-content" v-show="activeAccordion === 1">
              <p>The transition to v3 involves significant changes, including new component structures, updated theming approaches, and revised TypeScript definitions. We recommend a careful, incremental upgrade process, starting with thorough testing in a development environment.</p>
            </div>
          </div>
          
          <div class="accordion-item" :class="{ active: activeAccordion === 2 }">
            <button class="accordion-trigger" @click="toggleAccordion(2)">
              <div class="trigger-content">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="acc-icon"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <span>Is Nuxt UI v3 compatible with standalone Vue projects?</span>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="accordion-content" v-show="activeAccordion === 2">
              <p>Nuxt UI is now compatible with Vue! You can follow the <a href="#">installation guide</a> to get started.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="nuxt-prose-code">
        <pre><code><span class="line"><span class="token-punctuation">::accordion</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">:::accordion-item</span><span class="token-text">{label="What are the main considerations when upgrading to Nuxt UI v3?" icon="i-lucide-circle-help"}</span></span>
<span class="line"><span class="token-text">The transition to v3 involves significant changes...</span></span>
<span class="line"><span class="token-punctuation">:::</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">:::accordion-item</span><span class="token-text">{label="Is Nuxt UI v3 compatible with standalone Vue projects?" icon="i-lucide-circle-help"}</span></span>
<span class="line"><span class="token-text">Nuxt UI is now compatible with Vue!</span></span>
<span class="line"><span class="token-punctuation">:::</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">::</span></span></code></pre>
      </div>

      <h2 id="badge" :ref="(el) => emit('set-ref', el)">Badge</h2>
      <p>Use badge to display status indicators or labels. Badges are great for highlighting version numbers, statuses, or categories within your content.</p>
      
      <div class="component-preview">
        <span class="badge">v3.0.0-alpha.10</span>
      </div>

      <div class="nuxt-prose-code">
        <pre><code><span class="line"><span class="token-punctuation">::badge</span></span>
<span class="line"><span class="token-text">**v3.0.0-alpha.10**</span></span>
<span class="line"><span class="token-punctuation">::</span></span></code></pre>
      </div>

      <h2 id="callout" :ref="(el) => emit('set-ref', el)">Callout</h2>
      <p>Use callout to emphasize important contextual information. Callouts draw attention to notes, tips, warnings, or cautions, making key information stand out.</p>
      <p>Customize with <code>icon</code> and <code>color</code> props or use <code>note</code>, <code>tip</code>, <code>warning</code>, <code>caution</code> shortcuts for pre-defined semantic styles.</p>
      
      <div class="callout callout-default">
        <div class="callout-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        </div>
        <div class="callout-content">This is a <code>callout</code> with full <strong>markdown</strong> support.</div>
      </div>

      <div class="nuxt-prose-code">
        <pre><code><span class="line"><span class="token-punctuation">::callout</span></span>
<span class="line"><span class="token-text">This is a `callout` with full **markdown** support.</span></span>
<span class="line"><span class="token-punctuation">::</span></span></code></pre>
      </div>

      <div class="component-preview grid-layout">
        <div class="callout callout-note">
          <div class="callout-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>
          <div class="callout-content">Here's some additional information for you.</div>
        </div>
        <div class="callout callout-tip">
          <div class="callout-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a5 5 0 0 1 5 5c0 2-1 3-2 5a3 3 0 0 0-1 2H10a3 3 0 0 0-1-2c-1-2-2-3-2-5a5 5 0 0 1 5-5z"></path></svg></div>
          <div class="callout-content">Here's a helpful suggestion.</div>
        </div>
        <div class="callout callout-warning">
          <div class="callout-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
          <div class="callout-content">Be careful with this action as it might have unexpected results.</div>
        </div>
        <div class="callout callout-caution">
          <div class="callout-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></div>
          <div class="callout-content">This action cannot be undone.</div>
        </div>
      </div>

      <div class="nuxt-prose-code">
        <pre><code><span class="line"><span class="token-punctuation">::note</span></span>
<span class="line"><span class="token-text">Here's some additional information.</span></span>
<span class="line"><span class="token-punctuation">::</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">::tip</span></span>
<span class="line"><span class="token-text">Here's a helpful suggestion.</span></span>
<span class="line"><span class="token-punctuation">::</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">::warning</span></span>
<span class="line"><span class="token-text">Be careful with this action...</span></span>
<span class="line"><span class="token-punctuation">::</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">::caution</span></span>
<span class="line"><span class="token-text">This action cannot be undone.</span></span>
<span class="line"><span class="token-punctuation">::</span></span></code></pre>
      </div>

      <h2 id="card" :ref="(el) => emit('set-ref', el)">Card</h2>
      <p>Use <code>card</code> to highlight content blocks. Cards are useful for showcasing features, resources, or related information in visually distinct and interactive containers.</p>
      
      <div class="component-preview">
        <a href="#" class="prose-card">
          <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></div>
          <div class="card-content">
            <h3>Dashboard</h3>
            <p>A dashboard with multi-column layout.</p>
          </div>
        </a>
      </div>

      <div class="nuxt-prose-code">
        <pre><code><span class="line"><span class="token-punctuation">::card</span></span>
<span class="line"><span class="token-punctuation">---</span></span>
<span class="line"><span class="token-property">title:</span> <span class="token-text">Dashboard</span></span>
<span class="line"><span class="token-property">icon:</span> <span class="token-text">i-simple-icons-github</span></span>
<span class="line"><span class="token-property">to:</span> <span class="token-text">https://github.com/nuxt-ui-templates/dashboard</span></span>
<span class="line"><span class="token-property">target:</span> <span class="token-text">_blank</span></span>
<span class="line"><span class="token-punctuation">---</span></span>
<span class="line"><span class="token-text">A dashboard with multi-column layout.</span></span>
<span class="line"><span class="token-punctuation">::</span></span></code></pre>
      </div>

      <h2 id="card-group" :ref="(el) => emit('set-ref', el)">CardGroup</h2>
      <p>Use <code>card-group</code> to arrange cards in a grid layout. <code>card-group</code> is ideal for displaying collections of cards in a structured, visually appealing, and responsive grid.</p>
      
      <div class="component-preview">
        <div class="card-group-grid">
          <a href="#" class="prose-card">
            <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></div>
            <div class="card-content">
              <h3>Dashboard</h3>
              <p>A dashboard with multi-column layout.</p>
            </div>
          </a>
          <a href="#" class="prose-card">
            <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></div>
            <div class="card-content">
              <h3>SaaS</h3>
              <p>A template with landing, pricing, docs and blog.</p>
            </div>
          </a>
          <a href="#" class="prose-card">
            <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></div>
            <div class="card-content">
              <h3>Docs</h3>
              <p>A documentation with <code>@nuxt/content</code>.</p>
            </div>
          </a>
          <a href="#" class="prose-card">
            <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></div>
            <div class="card-content">
              <h3>Landing</h3>
              <p>A landing page you can use as starting point.</p>
            </div>
          </a>
        </div>
      </div>

      <div class="nuxt-prose-code">
        <pre><code><span class="line"><span class="token-punctuation">::card-group</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">::card</span></span>
<span class="line"><span class="token-punctuation">---</span></span>
<span class="line"><span class="token-property">title:</span> <span class="token-text">Dashboard</span></span>
<span class="line"><span class="token-punctuation">---</span></span>
<span class="line"><span class="token-text">A dashboard with multi-column layout.</span></span>
<span class="line"><span class="token-punctuation">::</span></span>
<span class="line"></span>
<span class="line"><span class="token-comment">&lt;!-- Diğer kartlar... --&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token-punctuation">::</span></span></code></pre>
      </div>

      <h2 id="collapsible" :ref="(el) => emit('set-ref', el)">Collapsible</h2>
      <p>Use <code>collapsible</code> to hide and reveal content sections. <code>collapsible</code> is ideal for showing optional details, technical specifications, or less frequently needed information.</p>
      
      <div class="component-preview">
        <div class="collapsible-wrapper">
          <button class="collapsible-trigger" @click="isCollapsibleOpen = !isCollapsibleOpen">
            <span>Show properties</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="chevron" :class="{ 'is-open': isCollapsibleOpen }"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="collapsible-content" v-show="isCollapsibleOpen">
            <div class="table-wrapper">
              <table>
                <thead><tr><th>Prop</th><th>Default</th><th>Type</th></tr></thead>
                <tbody>
                  <tr><td><code>name</code></td><td></td><td><code>string</code></td></tr>
                  <tr><td><code>size</code></td><td><code>md</code></td><td><code>string</code></td></tr>
                  <tr><td><code>color</code></td><td><code>neutral</code></td><td><code>string</code></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <h2 id="field" :ref="(el) => emit('set-ref', el)">Field</h2>
      <p>Use <code>field</code> to describe a specific field, property, or parameter. <code>field</code> components are perfect for documenting API parameters, component props, or configuration options.</p>
      
      <div class="component-preview">
        <div class="field-item">
          <div class="field-header">
            <span class="field-name">name</span>
            <span class="field-type">string</span>
            <span class="field-required">required</span>
          </div>
          <div class="field-desc">The <code>description</code> can be set as prop or in the default slot with full <strong>markdown</strong> support.</div>
        </div>
      </div>

      <h2 id="field-group" :ref="(el) => emit('set-ref', el)">FieldGroup</h2>
      <p>Use <code>field-group</code> to group related fields together in a list. <code>field-group</code> helps organize and structure documentation for multiple related fields or properties.</p>
      
      <div class="component-preview">
        <div class="field-group">
          <div class="field-item">
            <div class="field-header"><span class="field-name">analytics</span><span class="field-type">boolean</span></div>
            <div class="field-desc">Default to <code>false</code> - Enables analytics for your project (coming soon).</div>
          </div>
          <div class="field-item">
            <div class="field-header"><span class="field-name">blob</span><span class="field-type">boolean</span></div>
            <div class="field-desc">Default to <code>false</code> - Enables blob storage to store static assets.</div>
          </div>
          <div class="field-item">
            <div class="field-header"><span class="field-name">database</span><span class="field-type">boolean</span></div>
            <div class="field-desc">Default to <code>false</code> - Enables SQL database to store your application's data.</div>
          </div>
        </div>
      </div>

      <h2 id="icon" :ref="(el) => emit('set-ref', el)">Icon</h2>
      <p>Use <code>icon</code> to insert icons from icon libraries. Icons provide visual cues and enhance the user interface of your documentation.</p>
      
      <div class="component-preview">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="demo-icon"><path d="M12 2L2 22h20L12 2z"></path></svg>
      </div>

      <h2 id="kbd" :ref="(el) => emit('set-ref', el)">Kbd</h2>
      <p>Use <code>kbd</code> to display keyboard keys or shortcuts. <code>kbd</code> components clearly indicate keyboard inputs for instructions or command references.</p>
      
      <div class="component-preview">
        <div class="kbd-wrapper">
          <kbd>Ctrl</kbd>
          <span> </span>
          <kbd>K</kbd>
        </div>
      </div>

      <h2 id="tabs" :ref="(el) => emit('set-ref', el)">Tabs</h2>
      <p>Use <code>tabs</code> and <code>tabs-item</code> to organize content into tabbed interfaces. Tabs are effective for separating content into logical sections.</p>
      
      <div class="component-preview" style="padding: 0; background: transparent; border: none;">
        <div class="prose-tabs">
          <div class="tabs-header">
            <button :class="{ active: activeTab === 'code' }" @click="activeTab = 'code'">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              Code
            </button>
            <button :class="{ active: activeTab === 'preview' }" @click="activeTab = 'preview'">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Preview
            </button>
          </div>
          <div class="tabs-content">
            <div v-if="activeTab === 'code'" class="nuxt-prose-code no-margin no-border">
              <pre><code><span class="line"><span class="token-punctuation">::callout</span></span>
<span class="line"><span class="token-text">Lorem velit voluptate ex reprehenderit ullamco et culpa.</span></span>
<span class="line"><span class="token-punctuation">::</span></span></code></pre>
            </div>
            <div v-if="activeTab === 'preview'" class="preview-area">
              <div class="callout callout-default" style="margin: 0;">
                <div class="callout-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>
                <div class="callout-content">Lorem velit voluptate ex reprehenderit ullamco et culpa.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 id="steps" :ref="(el) => emit('set-ref', el)">Steps</h2>
      <p>Use <code>steps</code> to create step-by-step guides from document headings. <code>steps</code> component automatically numbers headings, creating a numbered guide for processes and tutorials.</p>
      
      <div class="steps-wrapper">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Add the Nuxt UI module in your <code>nuxt.config.ts</code></h4>
            <div class="nuxt-prose-code">
              <div class="code-header"><div class="filename"><span>nuxt.config.ts</span></div></div>
              <pre><code><span class="line"><span class="token-keyword">export default</span> <span class="token-function">defineNuxtConfig</span><span class="token-punctuation">({</span></span>
<span class="line">  <span class="token-property">modules</span><span class="token-punctuation">: [</span><span class="token-string">'@nuxt/ui'</span><span class="token-punctuation">]</span></span>
<span class="line"><span class="token-punctuation">})</span></span></code></pre>
            </div>
          </div>
        </div>
        
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Import Tailwind CSS and Nuxt UI in your CSS</h4>
            <div class="nuxt-prose-code">
              <div class="code-header"><div class="filename"><span>assets/css/main.css</span></div></div>
              <pre><code><span class="line"><span class="token-keyword">@import</span> <span class="token-string">"tailwindcss"</span><span class="token-punctuation">;</span></span>
<span class="line"><span class="token-keyword">@import</span> <span class="token-string">"@nuxt/ui"</span><span class="token-punctuation">;</span></span></code></pre>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="next-page-container">
      <a href="#" class="prev-card" @click.prevent="emit('navigate', 'codeblocks')">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <div class="card-text">
          <span class="direction">Previous</span>
          <h3>Code Blocks</h3>
          <p>Display inline code and code blocks.</p>
        </div>
      </a>
      
      <a href="#" class="next-card">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        </div>
        <div class="card-text">
          <span class="direction">Next</span>
          <h3>Images and Embeds</h3>
          <p>Add image, video, and HTML elements.</p>
        </div>
      </a>
    </div>
  </div>
</template>
<style scoped>
.theme-wrapper {
  /* LIGHT MODE */
  --box-bg: #ffffff;
  --box-border: #e2e8f0;
  --box-hover: #f8fafc;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --icon-color: #64748b;
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
  --icon-color: #94a3b8;
  --preview-bg: rgba(255, 255, 255, 0.02);
}

.component-preview { background: var(--preview-bg); border: 1px solid var(--box-border); border-radius: 0.5rem; padding: 1.5rem; margin: 1.5rem 0 2.5rem 0; }
.component-preview.grid-layout { display: grid; gap: 1rem; }

.accordion { display: flex; flex-direction: column; border-radius: 0.5rem; border: 1px solid var(--box-border); overflow: hidden; background: var(--box-bg); }
.accordion-item { border-bottom: 1px solid var(--box-border); }
.accordion-item:last-child { border-bottom: none; }
.accordion-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.25rem; background: var(--box-bg); border: none; color: var(--text-main); font-size: 0.95rem; font-weight: 500; cursor: pointer; text-align: left; }
.accordion-trigger:hover { background: var(--box-hover); }
.trigger-content { display: flex; align-items: center; gap: 0.75rem; }
.acc-icon, .chevron { width: 1.25rem; height: 1.25rem; color: var(--icon-color); transition: transform 0.3s; }
.accordion-item.active .chevron { transform: rotate(180deg); }
.accordion-content { padding: 0 1.25rem 1.25rem 3.25rem; background: var(--box-bg); color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; }
.accordion-content p { margin: 0; }

.callout { display: flex; gap: 1rem; padding: 1.25rem; border-radius: 0.5rem; margin: 1.5rem 0; font-size: 0.95rem; line-height: 1.6; }
.callout-icon { flex-shrink: 0; width: 1.25rem; height: 1.25rem; }
.callout-default { background: var(--box-hover); border: 1px solid var(--box-border); color: var(--text-main); }
.callout-default .callout-icon { color: var(--icon-color); }
.callout-note { background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.2); color: var(--text-main); }
.callout-note .callout-icon { color: #38bdf8; }
.callout-tip { background: rgba(52, 211, 153, 0.1); border: 1px solid rgba(52, 211, 153, 0.2); color: var(--text-main); }
.callout-tip .callout-icon { color: #34d399; }
.callout-warning { background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.2); color: var(--text-main); }
.callout-warning .callout-icon { color: #fbbf24; }
.callout-caution { background: rgba(248, 113, 113, 0.1); border: 1px solid rgba(248, 113, 113, 0.2); color: var(--text-main); }
.callout-caution .callout-icon { color: #f87171; }

.prose-card { display: block; padding: 1.5rem; background: var(--box-bg); border: 1px solid var(--box-border); border-radius: 0.5rem; text-decoration: none; transition: 0.2s; }
.prose-card:hover { border-color: var(--text-muted); background: var(--box-hover); }
.card-icon { width: 2.5rem; height: 2.5rem; background: var(--box-hover); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
.card-icon svg { width: 1.25rem; height: 1.25rem; color: var(--text-main); }
.card-content h3 { font-size: 1rem; font-weight: 600; color: var(--text-main); margin: 0 0 0.5rem 0; }
.card-content p { font-size: 0.9rem; color: var(--text-muted); margin: 0; line-height: 1.5; }
.card-group-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }

.collapsible-wrapper { background: var(--box-bg); border: 1px solid var(--box-border); border-radius: 0.5rem; overflow: hidden; }
.collapsible-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.25rem; background: transparent; border: none; color: var(--text-main); font-size: 0.95rem; font-weight: 500; cursor: pointer; }
.collapsible-trigger:hover { background: var(--box-hover); }
.collapsible-content { padding: 0 1.25rem 1.25rem 1.25rem; border-top: 1px solid var(--box-border); }
.table-wrapper { overflow-x: auto; margin: 0; }
table { width: 100%; border-collapse: collapse; text-align: left; }
th { border-bottom: 1px solid var(--box-border); padding: 0.75rem 1rem; color: var(--text-main); font-weight: 600; font-size: 0.85rem; }
td { border-bottom: 1px solid var(--box-hover); padding: 0.75rem 1rem; color: var(--text-muted); font-size: 0.85rem; }

.field-group { display: flex; flex-direction: column; gap: 1rem; }
.field-item { padding: 1.25rem; background: var(--box-bg); border: 1px solid var(--box-border); border-radius: 0.5rem; }
.field-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; flex-wrap: wrap; }
.field-name { font-weight: 600; color: var(--text-main); font-size: 0.95rem; font-family: monospace; }
.field-type { color: #38bdf8; font-size: 0.8rem; font-family: monospace; }
.field-desc { color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; }

.prose-tabs { border: 1px solid var(--box-border); border-radius: 0.5rem; overflow: hidden; background: var(--box-bg); }
.tabs-header { display: flex; border-bottom: 1px solid var(--box-border); background: var(--preview-bg); }
.tabs-header button { flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: transparent; border: none; padding: 0.875rem; color: var(--text-muted); font-size: 0.9rem; font-weight: 500; cursor: pointer; border-bottom: 2px solid transparent; transition: 0.2s; }
.tabs-header button:hover { color: var(--text-main); }
.tabs-header button.active { color: #38bdf8; border-bottom-color: #38bdf8; }
.tabs-content { background: var(--box-bg); }

.steps-wrapper { margin: 2rem 0; border-left: 1px solid var(--box-border); padding-left: 1.5rem; margin-left: 0.75rem; }
.step-item { position: relative; margin-bottom: 3rem; }
.step-number { position: absolute; left: -2.3rem; top: 0; width: 1.5rem; height: 1.5rem; background: var(--box-bg); border: 1px solid var(--box-border); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600; color: var(--text-main); }
.step-content h4 { font-size: 1.1rem; font-weight: 600; color: var(--text-main); margin: 0 0 1rem 0; line-height: 1.5rem; }

.demo-icon { width: 3rem; height: 3rem; color: var(--text-main); }
kbd { display: inline-flex; align-items: center; justify-content: center; padding: 0.2rem 0.5rem; background: var(--box-hover); border: 1px solid var(--box-border); border-bottom-width: 2px; border-radius: 0.375rem; color: var(--text-main); font-family: inherit; font-size: 0.85rem; font-weight: 600; min-width: 1.5rem; }
.badge { display: inline-flex; align-items: center; padding: 0.25rem 0.6rem; border-radius: 9999px; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.2); color: #38bdf8; font-size: 0.75rem; font-weight: 600; }

.nuxt-prose-code { background-color: var(--code-bg); border: 1px solid var(--code-border); border-radius: 0.5rem; margin: 1.5rem 0 2.5rem 0; overflow: hidden; }
.nuxt-prose-code.no-margin { margin: 0; border-radius: 0; }
.nuxt-prose-code.no-border { border: none; }
.code-header { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 1rem; border-bottom: 1px solid var(--code-border); background-color: rgba(15, 23, 42, 0.5); }
.filename span { color: #cbd5e1; font-size: 0.85rem; font-family: monospace; }
.nuxt-prose-code pre { margin: 0; padding: 1rem 0; overflow-x: auto; font-size: 0.875rem; line-height: 1.7; font-family: ui-monospace, monospace; }
.line { display: block; padding: 0 1.25rem; min-height: 1.5rem; border-left: 2px solid transparent; }
.token-punctuation { color: #89ddff; }
.token-text { color: #e2e8f0; }
.token-keyword { color: #c678dd; }
.token-function { color: #61afef; }
.token-property { color: #e06c75; }
.token-string { color: #98c379; }
</style>