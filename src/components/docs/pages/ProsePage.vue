<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const emit = defineEmits(['set-ref', 'navigate'])

const activeAcc = ref(0) 
const isColOpen = ref(false)
const activeTab = ref('code')

const toggleAccordion = (index) => {
  activeAcc.value = activeAcc.value === index ? null : index
}
</script>
<template>
  <div class="docs-page-content">
    <header class="page-head">
      <h1>{{ t('docs.pages.prose') }}</h1>
      <p class="subtitle">{{ t('docs.prose.subtitle') }}</p>
    </header>

    <div class="divider"></div>

    <h2 id="accordion" :ref="(el) => emit('set-ref', el)">Accordion</h2>
    <p v-html="t('docs.prose.accordionDesc')"></p>
    
    <div class="ui-demo-box">
      <div class="ui-demo-preview no-padding">
        <div class="ui-accordion">
          <div class="ui-acc-item" :class="{ 'is-active': activeAcc === 0 }">
            <button class="ui-acc-trigger" @click="toggleAccordion(0)">
              <div class="ui-acc-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <span>{{ t('docs.prose.accQ1') }}</span>
              </div>
              <svg class="ui-acc-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="ui-acc-panel" v-show="activeAcc === 0">
              <p>{{ t('docs.prose.accA1') }}</p>
            </div>
          </div>
          <div class="ui-acc-item" :class="{ 'is-active': activeAcc === 1 }">
            <button class="ui-acc-trigger" @click="toggleAccordion(1)">
              <div class="ui-acc-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <span>{{ t('docs.prose.accQ2') }}</span>
              </div>
              <svg class="ui-acc-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="ui-acc-panel" v-show="activeAcc === 1">
              <p v-html="t('docs.prose.accA2')"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="ui-demo-code">
        <button class="code-copy-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
        <pre><code><span class="hl-tag">::accordion</span>

<span class="hl-tag">:::accordion-item</span>{label="What are the main considerations when upgrading to Nuxt UI v3?" icon="i-lucide-circle-help"}
The transition to v3 involves significant changes, including new component structures, updated
theming approaches, and revised TypeScript definitions. We recommend a careful, incremental
upgrade process, starting with thorough testing in a development environment.
<span class="hl-tag">:::</span>

<span class="hl-tag">:::accordion-item</span>{label="Is Nuxt UI v3 compatible with standalone Vue projects?" icon="i-lucide-circle-help"}
Nuxt UI is now compatible with Vue! You can follow the [installation guide](/getting-
started/installation) to get started.
<span class="hl-tag">:::</span>

<span class="hl-tag">::</span></code></pre>
      </div>
    </div>

    <h2 id="badge" :ref="(el) => emit('set-ref', el)">Badge</h2>
    <p>{{ t('docs.prose.badgeDesc') }}</p>
    
    <div class="ui-demo-box">
      <div class="ui-demo-preview flex-center p-3xl">
        <span class="ui-badge">v3.0.0-alpha.10</span>
      </div>
      <div class="ui-demo-code">
        <pre><code><span class="hl-tag">::badge</span>
**v3.0.0-alpha.10**
<span class="hl-tag">::</span></code></pre>
      </div>
    </div>

    <h2 id="callout" :ref="(el) => emit('set-ref', el)">Callout</h2>
    <p>{{ t('docs.prose.calloutDesc1') }}</p>
    <p v-html="t('docs.prose.calloutDesc2')"></p>
    
    <div class="ui-demo-box">
      <div class="ui-demo-preview p-2xl">
        <div class="ui-callout base">
          <span v-html="t('docs.prose.calloutBase')"></span>
        </div>
      </div>
      <div class="ui-demo-code">
        <pre><code><span class="hl-tag">::callout</span>
This is a `callout` with full **markdown** support.
<span class="hl-tag">::</span></code></pre>
      </div>
    </div>

    <div class="ui-demo-box">
      <div class="ui-demo-preview flex-col p-2xl">
        <div class="ui-callout note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span>{{ t('docs.prose.calloutNote') }}</span>
        </div>
        <div class="ui-callout tip">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v1m8 8h-1M4.222 4.222l.707.707m14.142 0l-.707.707M12 11a3 3 0 0 0-3 3v2h6v-2a3 3 0 0 0-3-3z"/></svg>
          <span>{{ t('docs.prose.calloutTip') }}</span>
        </div>
        <div class="ui-callout warning">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <span>{{ t('docs.prose.calloutWarn') }}</span>
        </div>
        <div class="ui-callout caution">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          <span>{{ t('docs.prose.calloutCaut') }}</span>
        </div>
      </div>
      <div class="ui-demo-code">
        <pre><code><span class="hl-tag">::note</span>
Here's some additional information.
<span class="hl-tag">::</span>

<span class="hl-tag">::tip</span>
Here's a helpful suggestion.
<span class="hl-tag">::</span>

<span class="hl-tag">::warning</span>
Be careful with this action as it might have unexpected results.
<span class="hl-tag">::</span>

<span class="hl-tag">::caution</span>
This action cannot be undone.
<span class="hl-tag">::</span></code></pre>
      </div>
    </div>

    <h2 id="card" :ref="(el) => emit('set-ref', el)">Card</h2>
    <p v-html="t('docs.prose.cardDesc1')"></p>
    <p v-html="t('docs.prose.cardDesc2')"></p>

    <div class="ui-demo-box">
      <div class="ui-demo-preview flex-center p-3xl">
        <div class="ui-card standalone">
          <div class="card-external-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </div>
          <div class="card-header-row">
            <svg class="card-icon-main" viewBox="0 0 24 24" fill="currentColor" width="20"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            <span class="card-title-text">Dashboard</span>
          </div>
          <p class="card-description">{{ t('docs.prose.cardDash') }}</p>
        </div>
      </div>
      <div class="ui-demo-code">
        <pre><code><span class="hl-tag">::card</span>
<span class="hl-attr">---</span>
<span class="hl-attr">title:</span> Dashboard
<span class="hl-attr">icon:</span> i-simple-icons-github
<span class="hl-attr">to:</span> https://github.com/nuxt-ui-templates/dashboard
<span class="hl-attr">target:</span> _blank
<span class="hl-attr">---</span>
A dashboard with multi-column layout.
<span class="hl-tag">::</span></code></pre>
      </div>
    </div>

    <h2 id="card-group" :ref="(el) => emit('set-ref', el)">CardGroup</h2>
    <p v-html="t('docs.prose.cardGroupDesc')"></p>

    <div class="ui-demo-box">
      <div class="ui-demo-preview p-2xl">
        <div class="ui-card-grid">
          <div class="ui-card">
            <svg class="ui-card-ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            <div class="ui-card-head">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <h3>Dashboard</h3>
            </div>
            <p>{{ t('docs.prose.cardDash') }}</p>
          </div>
          
          <div class="ui-card">
            <svg class="ui-card-ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            <div class="ui-card-head">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <h3>SaaS</h3>
            </div>
            <p>{{ t('docs.prose.cardSaas') }}</p>
          </div>

          <div class="ui-card">
            <svg class="ui-card-ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            <div class="ui-card-head">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <h3>Docs</h3>
            </div>
            <p v-html="t('docs.prose.cardDocs')"></p>
          </div>

          <div class="ui-card">
            <svg class="ui-card-ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            <div class="ui-card-head">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <h3>Landing</h3>
            </div>
            <p>{{ t('docs.prose.cardLanding') }}</p>
          </div>
        </div>
      </div>
      
      <div class="ui-demo-code">
        <pre><code><span class="hl-tag">::card-group</span>

<span class="hl-tag">::card</span>
<span class="hl-attr">---</span>
<span class="hl-attr">title:</span> Dashboard
<span class="hl-attr">icon:</span> i-simple-icons-github
<span class="hl-attr">to:</span> https://github.com/nuxt-ui-templates/dashboard
<span class="hl-attr">target:</span> _blank
<span class="hl-attr">---</span>
A dashboard with multi-column layout.
<span class="hl-tag">::</span>

<span class="hl-tag">::card</span>
<span class="hl-attr">---</span>
<span class="hl-attr">title:</span> SaaS
<span class="hl-attr">icon:</span> i-simple-icons-github
<span class="hl-attr">to:</span> https://github.com/nuxt-ui-templates/saas
<span class="hl-attr">target:</span> _blank
<span class="hl-attr">---</span>
A template with landing, pricing, docs and blog.
<span class="hl-tag">::</span>

<span class="hl-tag">::card</span>
<span class="hl-attr">---</span>
<span class="hl-attr">title:</span> Docs
<span class="hl-attr">icon:</span> i-simple-icons-github
<span class="hl-attr">to:</span> https://github.com/nuxt-ui-templates/docs
<span class="hl-attr">target:</span> _blank
<span class="hl-attr">---</span>
A documentation with `@nuxt/content`.
<span class="hl-tag">::</span>

<span class="hl-tag">::card</span>
<span class="hl-attr">---</span>
<span class="hl-attr">title:</span> Landing
<span class="hl-attr">icon:</span> i-simple-icons-github
<span class="hl-attr">to:</span> https://github.com/nuxt-ui-templates/landing
<span class="hl-attr">target:</span> _blank
<span class="hl-attr">---</span>
A landing page you can use as starting point.
<span class="hl-tag">::</span>

<span class="hl-tag">::</span></code></pre>
      </div>
    </div>

    <h2 id="collapsible" :ref="(el) => emit('set-ref', el)">Collapsible</h2>
    <p v-html="t('docs.prose.colDesc')"></p>

    <div class="ui-demo-box">
      <div class="ui-demo-preview p-2xl">
        <div class="ui-collapsible-container">
          <button class="ui-collapsible-trigger" @click="isColOpen = !isColOpen">
            <svg class="col-chevron" :class="{ 'open': isColOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16"><polyline points="6 9 12 15 18 9"/></svg>
            <span>{{ t('docs.prose.colShow') }}</span>
          </button>
          <div v-show="isColOpen" class="ui-collapsible-panel">
            <table class="ui-props-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Default</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code class="inline-code">name</code></td>
                  <td></td>
                  <td><code class="ts-type-code">string</code></td>
                </tr>
                <tr>
                  <td><code class="inline-code">size</code></td>
                  <td><code class="inline-code">md</code></td>
                  <td><code class="ts-type-code">string</code></td>
                </tr>
                <tr>
                  <td><code class="inline-code">color</code></td>
                  <td><code class="inline-code">neutral</code></td>
                  <td><code class="ts-type-code">string</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ui-demo-code">
        <pre v-pre><code><span class="hl-tag">::collapsible</span>

| Prop    | Default   | Type                     |
|---------|-----------|--------------------------|
| `name`  |           | `string`{lang="ts-type"} |
| `size`  | `md`      | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |

<span class="hl-tag">::</span></code></pre>
      </div>
    </div>

    <h2 id="field" :ref="(el) => emit('set-ref', el)">Field</h2>
    <p v-html="t('docs.prose.fieldDesc')"></p>

    <div class="ui-demo-box">
      <div class="ui-demo-preview p-2xl">
        <div class="ui-field-block">
          <div class="ui-field-header">
            <span class="field-name">name</span>
            <span class="field-type">string</span>
            <span class="field-required">{{ t('docs.prose.fieldReq') }}</span>
          </div>
          <p class="field-description" v-html="t('docs.prose.fieldDemo')"></p>
        </div>
      </div>
      <div class="ui-demo-code">
        <pre v-pre><code><span class="hl-tag">::field</span>{name="name" type="string" required}
The `description` can be set as prop or in the default slot with full **markdown** support.
<span class="hl-tag">::</span></code></pre>
      </div>
    </div>

    <h2 id="field-group" :ref="(el) => emit('set-ref', el)">FieldGroup</h2>
    <p v-html="t('docs.prose.fieldGroupDesc')"></p>

    <div class="ui-demo-box">
      <div class="ui-demo-preview no-padding">
        <div class="ui-field-block border-bottom">
          <div class="ui-field-header">
            <span class="field-name">analytics</span>
            <span class="field-type">boolean</span>
          </div>
          <p class="field-description" v-html="t('docs.prose.fgAnalyt')"></p>
        </div>
        <div class="ui-field-block border-bottom">
          <div class="ui-field-header">
            <span class="field-name">blob</span>
            <span class="field-type">boolean</span>
          </div>
          <p class="field-description" v-html="t('docs.prose.fgBlob')"></p>
        </div>
        <div class="ui-field-block border-bottom">
          <div class="ui-field-header">
            <span class="field-name">cache</span>
            <span class="field-type">boolean</span>
          </div>
          <p class="field-description" v-html="t('docs.prose.fgCache')"></p>
        </div>
        <div class="ui-field-block">
          <div class="ui-field-header">
            <span class="field-name">database</span>
            <span class="field-type">boolean</span>
          </div>
          <p class="field-description" v-html="t('docs.prose.fgDb')"></p>
        </div>
      </div>
      <div class="ui-demo-code">
        <pre v-pre><code><span class="hl-tag">::field-group</span>
<span class="hl-tag">::field</span>{name="analytics" type="boolean"}
Default to `false` - Enables analytics for your project (coming soon).
<span class="hl-tag">::</span>

<span class="hl-tag">::field</span>{name="blob" type="boolean"}
Default to `false` - Enables blob storage to store static assets, such as images, videos and more.
<span class="hl-tag">::</span>

<span class="hl-tag">::field</span>{name="cache" type="boolean"}
Default to `false` - Enables cache storage to cache your server route responses or functions using Nitro's `cachedEventHandler` and `cachedFunction`
<span class="hl-tag">::</span>

<span class="hl-tag">::field</span>{name="database" type="boolean"}
Default to `false` - Enables SQL database to store your application's data.
<span class="hl-tag">::</span>
<span class="hl-tag">::</span></code></pre>
      </div>
    </div>

    <h2 id="icon" :ref="(el) => emit('set-ref', el)">Icon</h2>
    <p v-html="t('docs.prose.iconDesc')"></p>
    
    <div class="ui-demo-box">
      <div class="ui-demo-preview flex-center" style="padding: 3rem;">
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" style="color: var(--heading)"><path d="M12.91 3.424a1.865 1.865 0 0 0-3.153 0L1.134 18.06c-.689 1.157.144 2.656 1.487 2.656h17.214a1.83 1.83 0 0 0 1.576-2.655L12.91 3.424zM11.832 5.3a.62.62 0 0 1 1.05 0l8.5 14.634a.61.61 0 0 1-.525.885H3.642a.61.61 0 0 1-.526-.885l8.716-14.634z"/><path d="M17.896 9.873a1.866 1.866 0 0 0-3.153 0l-4.57 7.828c-.689 1.157.144 2.656 1.488 2.656h9.14a1.83 1.83 0 0 0 1.576-2.655l-4.48-7.829zm-1.077 1.875l3.528 6.07a.61.61 0 0 1-.526.885h-7.056a.61.61 0 0 1-.525-.885l3.528-6.07a.62.62 0 0 1 1.05 0z"/></svg>
      </div>
      <div class="ui-demo-code">
        <pre v-pre><code><span class="hl-tag">:icon</span>{name="i-simple-icons-nuxtdotjs"}</code></pre>
      </div>
    </div>

    <h2 id="kbd" :ref="(el) => emit('set-ref', el)">Kbd</h2>
    <p v-html="t('docs.prose.kbdDesc')"></p>
    
    <div class="ui-demo-box">
      <div class="ui-demo-preview flex-center gap-sm" style="padding: 3rem;">
        <kbd class="ui-kbd-v3">CTRL</kbd>
        <kbd class="ui-kbd-v3">K</kbd>
      </div>
      <div class="ui-demo-code">
        <pre v-pre><code><span class="hl-tag">:kbd</span>{value="meta"} <span class="hl-tag">:kbd</span>{value="K"}</code></pre>
      </div>
    </div>

    <h2 id="tabs" :ref="(el) => emit('set-ref', el)">Tabs</h2>
    <p v-html="t('docs.prose.tabsDesc')"></p>
    
    <div class="ui-demo-box">
      <div class="ui-tabs-nav">
        <button :class="{ active: activeTab === 'code' }" @click="activeTab = 'code'">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          Code
        </button>
        <button :class="{ active: activeTab === 'preview' }" @click="activeTab = 'preview'">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Preview
        </button>
      </div>
      <div class="ui-tabs-content">
        <div v-show="activeTab === 'code'" class="ui-tabs-code">
          <pre v-pre><code>::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::</code></pre>
        </div>
        <div v-show="activeTab === 'preview'" class="ui-tabs-preview">
          <div class="ui-callout base">
            <span>Lorem velit voluptate ex reprehenderit ullamco et culpa.</span>
          </div>
        </div>
      </div>
      <div class="ui-demo-code border-top">
        <pre v-pre><code><span class="hl-tag">::tabs</span>

<span class="hl-tag">:::tabs-item</span>{label="Code" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::<span class="hl-tag">:::</span>

<span class="hl-tag">:::tabs-item</span>{label="Preview" icon="i-lucide-eye"}

::::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::::

<span class="hl-tag">:::</span>

<span class="hl-tag">::</span></code></pre>
      </div>
    </div>

    <h2 id="steps" :ref="(el) => emit('set-ref', el)">Steps</h2>
    <p v-html="t('docs.prose.stepsDesc1')"></p>
    <p v-html="t('docs.prose.stepsDesc2')"></p>

    <div class="ui-demo-box">
      <div class="ui-demo-preview p-2xl">
        <div class="ui-step-list">
          <div class="ui-step-item">
            <div class="ui-step-indicator">1</div>
            <div class="ui-step-content">
              <h4 v-html="t('docs.prose.step1')"></h4>
              <div class="ui-step-codeblock">
                <div class="ui-step-code-header">nuxt.config.ts</div>
                <pre v-pre><code>export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})</code></pre>
              </div>
            </div>
          </div>
          <div class="ui-step-item">
            <div class="ui-step-indicator">2</div>
            <div class="ui-step-content">
              <h4>{{ t('docs.prose.step2') }}</h4>
              <div class="ui-step-codeblock">
                <div class="ui-step-code-header">assets/css/main.css</div>
                <pre v-pre><code>@import "tailwindcss";
@import "@nuxt/ui";</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui-demo-code">
        <pre v-pre><code><span class="hl-tag">::steps</span>{level="4"}<span class="hl-tag">::</span></code></pre>
      </div>
    </div>

  </div>
</template>
<style scoped>
.ui-demo-box {
  border: 1px solid var(--border);
  border-radius: 8px;
  margin: 1.5rem 0 3rem 0;
  background: var(--card-bg);
  overflow: hidden;
}
.ui-demo-preview {
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}
.ui-demo-preview.flex-center { display: flex; justify-content: center; align-items: center; }
.ui-demo-preview.flex-col { display: flex; flex-direction: column; gap: 1rem; }
.ui-demo-preview.no-padding { padding: 0; }
.p-2xl { padding: 2.5rem; }
.p-3xl { padding: 3rem; }

.ui-demo-code {
  position: relative;
  padding: 1.25rem 1.5rem;
  background: var(--code-bg, var(--card-bg));
  overflow-x: auto;
}
.ui-demo-code pre {
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--text);
}
.hl-tag { color: var(--primary); }
.hl-attr { color: #0ea5e9; }
.gap-sm { gap: 0.75rem; }
.border-top { border-top: 1px solid var(--border); }

.code-copy-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  padding: 0.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.code-copy-btn:hover { background: var(--code-header, rgba(125,125,125,0.1)); color: var(--heading); }

.ui-accordion .ui-acc-item { border-bottom: 1px solid var(--border); }
.ui-accordion .ui-acc-item:last-child { border-bottom: none; }
.ui-acc-trigger { width: 100%; padding: 1.25rem 1.5rem; display: flex; justify-content: space-between; align-items: center; background: transparent; border: none; color: var(--heading); cursor: pointer; text-align: start; transition: background 0.2s; }
.ui-acc-trigger:hover { background: rgba(125,125,125,0.05); }
.ui-acc-title { display: flex; align-items: center; gap: 0.85rem; font-size: 0.95rem; font-weight: 500; }
.ui-acc-title svg { width: 18px; height: 18px; color: var(--primary); flex-shrink: 0; }
.ui-acc-chevron { width: 18px; height: 18px; transition: transform 0.2s; color: var(--text); opacity: 0.6; }
.ui-acc-item.is-active .ui-acc-chevron { transform: rotate(180deg); }
.ui-acc-panel { padding-block: 0 1.25rem; padding-inline-start: 3.25rem; padding-inline-end: 1.5rem; font-size: 0.95rem; color: var(--text); line-height: 1.6; }
.ui-acc-panel p { margin: 0; }
.primary-link { color: var(--primary); text-decoration: none; }
.primary-link:hover { text-decoration: underline; }

.ui-badge { background: rgba(66, 184, 131, 0.15); color: var(--primary); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; border: 1px solid rgba(66, 184, 131, 0.3); }

.ui-callout { display: flex; gap: 1rem; padding: 1rem 1.25rem; border-radius: 6px; border: 1px solid transparent; align-items: center; font-size: 0.9rem; }
.ui-callout.base { background: var(--code-header, var(--card-bg)); border-color: var(--border); color: var(--text); }
.ui-callout.note { background: rgba(56, 189, 248, 0.1); border-color: rgba(56, 189, 248, 0.4); color: #0284c7; }
.ui-callout.tip { background: rgba(66, 184, 131, 0.1); border-color: rgba(66, 184, 131, 0.4); color: #059669; }
.ui-callout.warning { background: rgba(251, 191, 36, 0.1); border-color: rgba(251, 191, 36, 0.4); color: #d97706; }
.ui-callout.caution { background: rgba(248, 113, 113, 0.1); border-color: rgba(248, 113, 113, 0.4); color: #dc2626; }
.ui-callout svg { width: 20px; height: 20px; flex-shrink: 0; }

.card-standalone-container { padding: 3rem 2rem; display: flex; justify-content: center; }
.ui-card-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
.ui-card { position: relative; background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; transition: all 0.2s ease; cursor: pointer; }
.ui-card.standalone { width: 100%; max-width: 400px; }
.ui-card:hover { border-color: var(--primary); }
.card-external-link, .ui-card-ext { position: absolute; top: 1.25rem; right: 1.25rem; width: 16px; color: var(--text); opacity: 0.4; }
.card-header-row, .ui-card-head { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
.card-icon-main, .ui-card-head svg { width: 20px; color: var(--primary); }
.card-title-text, .ui-card-head h3 { margin: 0; color: var(--heading); font-size: 1.05rem; font-weight: 600; }
.card-description, .ui-card p { margin: 0; font-size: 0.9rem; color: var(--text); line-height: 1.5; }

.ui-collapsible-container { width: 100%; }
.ui-collapsible-trigger { display: flex; align-items: center; gap: 0.5rem; background: transparent; border: none; color: var(--text); font-size: 0.95rem; cursor: pointer; padding: 0; margin-bottom: 1rem; }
.col-chevron { transition: transform 0.2s; }
.col-chevron.open { transform: rotate(180deg); }
.ui-collapsible-panel { border: 1px solid var(--border); border-radius: 8px; overflow: hidden; background: var(--card-bg); }
.ui-props-table { width: 100%; border-collapse: collapse; text-align: start; }
.ui-props-table th, .ui-props-table td { padding: 0.85rem 1.25rem; border-bottom: 1px solid var(--border); font-size: 0.9rem; text-align: start; }
.ui-props-table tbody tr:last-child td { border-bottom: none; }
.ui-props-table th { background: var(--code-header, rgba(125,125,125,0.05)); color: var(--heading); font-weight: 600; }
.ui-props-table td { color: var(--text); }
.ts-type-code { color: #0ea5e9; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; }

.ui-field-block { padding: 1.5rem; }
.ui-field-block.border-bottom { border-bottom: 1px solid var(--border); }
.ui-field-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem; }
.field-name { color: #0ea5e9; font-family: monospace; font-size: 0.95rem; font-weight: 600; }
.field-type { color: #64748b; font-family: monospace; font-size: 0.9rem; }
.field-required { background: rgba(248, 113, 113, 0.1); color: #dc2626; padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
.field-description { margin: 0; font-size: 0.9rem; color: var(--text); line-height: 1.6; }

.icon-preview-area { display: flex; justify-content: center; padding: 3.5rem; border-bottom: 1px solid var(--border); }
.ui-nuxt-icon { width: 32px; height: 32px; color: var(--heading); }

.kbd-preview-area { display: flex; justify-content: center; gap: 0.75rem; padding: 3.5rem; border-bottom: 1px solid var(--border); }
.ui-kbd-v3 { background: var(--code-header, rgba(125,125,125,0.05)); border: 1px solid var(--border); border-bottom-width: 2px; padding: 0.25rem 0.5rem; border-radius: 6px; font-size: 0.85rem; font-family: monospace; color: var(--heading); font-weight: 600; box-shadow: 0 1px 0 var(--border); }

.ui-tabs-container { width: 100%; }
.ui-tabs-nav { display: flex; background: var(--code-header, rgba(125,125,125,0.05)); border-bottom: 1px solid var(--border); }
.ui-tabs-nav button { display: flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.25rem; border: none; background: transparent; color: var(--text); font-size: 0.85rem; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -1px; transition: color 0.2s; }
.ui-tabs-nav button:hover { color: var(--heading); }
.ui-tabs-nav button svg { width: 16px; }
.ui-tabs-nav button.active { color: var(--primary); border-bottom-color: var(--primary); }
.ui-tabs-content { width: 100%; }
.ui-tabs-code pre { margin: 0; padding: 1.5rem; background: var(--code-bg, var(--card-bg)); color: var(--text); font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; overflow-x: auto; }
.ui-tabs-preview { padding: 2.5rem; border-bottom: 1px solid var(--border); }
.ui-border-top { border-top: 1px solid var(--border); }

.steps-preview-area { padding: 2.5rem; border-bottom: 1px solid var(--border); }
.ui-step-list { display: flex; flex-direction: column; }
.ui-step-item { display: flex; gap: 1.5rem; position: relative; padding-bottom: 2.5rem; }
.ui-step-item:last-child { padding-bottom: 0; }
.ui-step-item::after { content: ''; position: absolute; inset-inline-start: 15px; top: 36px; bottom: 0; width: 1px; background: var(--border); }
.ui-step-item:last-child::after { display: none; }
.ui-step-indicator { width: 32px; height: 32px; border-radius: 50%; background: rgba(66, 184, 131, 0.1); border: 1px dashed var(--primary); color: var(--primary); display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem; flex-shrink: 0; z-index: 1; }
.ui-step-content { width: 100%; }
.ui-step-content h4 { margin: 0 0 1rem 0; color: var(--heading); font-size: 1rem; }
.ui-step-codeblock { background: var(--code-bg, var(--card-bg)); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
.ui-step-code-header { padding: 0.5rem 1rem; background: var(--code-header, rgba(125,125,125,0.05)); border-bottom: 1px solid var(--border); font-family: monospace; font-size: 0.8rem; color: var(--text); }
.ui-step-codeblock pre { margin: 0; padding: 1.25rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; overflow-x: auto; color: var(--text); }

@media (max-width: 640px) {
  .ui-card-grid { grid-template-columns: 1fr; }
  .p-2xl, .p-3xl { padding: 1.5rem; }
}
</style>