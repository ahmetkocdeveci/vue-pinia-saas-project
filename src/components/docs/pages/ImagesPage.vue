<script setup>
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['set-ref', 'navigate'])
const { t } = useI18n()
</script>

<template>
  <div class="docs-page-content">
    <header class="page-head">
      <h1>{{ t('docs.pages.images') }}</h1>
      <p class="subtitle">{{ t('docs.images.subtitle') }}</p>
    </header>

    <div class="divider"></div>

    <h2 id="image" :ref="(el) => emit('set-ref', el)">{{ t('docs.images.imageTitle') }}</h2>
    
    <h3 id="using-markdown" :ref="(el) => emit('set-ref', el)">{{ t('docs.images.usingMarkdownTitle') }}</h3>
    <p>{{ t('docs.images.usingMarkdownDesc') }}</p>

    <div class="ui-demo-box">
      <div class="ui-demo-preview">
        <div class="image-wrapper">
          <img src="https://nuxt.com/new-social.jpg" :alt="t('docs.images.imgAlt')" class="demo-image" />
        </div>
      </div>
      <div class="ui-demo-code">
        <pre v-pre><code>![Nuxt Social Image](https://nuxt.com/new-social.jpg)</code></pre>
      </div>
    </div>
    
    <div class="ui-info-callout" v-html="t('docs.images.imageCallout')"></div>

    <h3 id="using-embeds" :ref="(el) => emit('set-ref', el)">{{ t('docs.images.usingEmbedsTitle') }}</h3>
    <p>{{ t('docs.images.usingEmbedsDesc') }}</p>

    <div class="ui-demo-box">
      <div class="ui-demo-preview flex-center">
        <img src="https://nuxt.com/new-social.jpg" :alt="t('docs.images.imgAlt')" height="150" class="demo-image-small" />
      </div>
      <div class="ui-demo-code">
        <pre v-pre><code>:img{src="https://nuxt.com/new-social.jpg" alt="Nuxt Social Image" height="150"}</code></pre>
      </div>
    </div>

    <h2 id="embeds-and-html" :ref="(el) => emit('set-ref', el)">{{ t('docs.images.embedsHtmlTitle') }}</h2>
    <p>{{ t('docs.images.embedsHtmlDesc') }}</p>

    <div class="ui-demo-box">
      <div class="ui-demo-preview no-padding">
        <div class="iframe-container">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/_eQxomah-nA?si=pDSzchUBDKb2NQu7" 
            :title="t('docs.images.iframeTitle')" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen 
            class="demo-iframe"
          ></iframe>
        </div>
      </div>
      <div class="ui-demo-code">
        <pre v-pre><code>:iframe{src="https://www.youtube-nocookie.com/embed/_eQxomah-nA?si=pDSzchUBDKb2NQu7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="aspect-ratio: 16/9;"}</code></pre>
      </div>
    </div>

    <div class="docs-nav-cards">
      <a href="#" class="docs-nav-card prev" @click.prevent="emit('navigate', 'prose')">
        <div class="docs-nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></div>
        <span class="docs-nav-label">{{ t('docs.nav.previous') }}</span>
        <h3>{{ t('docs.pages.prose') }}</h3>
        <p>{{ t('docs.prose.subtitle') }}</p>
      </a>
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
  padding: 2.5rem;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.ui-demo-preview.flex-center { display: flex; justify-content: center; align-items: center; }
.ui-demo-preview.no-padding { padding: 0; }

.image-wrapper {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.demo-image { display: block; width: 100%; height: auto; object-fit: cover; }
.demo-image-small { display: block; height: 150px; width: auto; border-radius: 8px; border: 1px solid var(--border); }

.ui-demo-code {
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

.ui-info-callout {
  margin: 1.5rem 0 3rem 0;
  padding: 1rem 1.25rem;
  border-radius: 6px;
  background: var(--code-header, var(--card-bg));
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 0.9rem;
  line-height: 1.6;
}

.iframe-container { position: relative; width: 100%; padding-top: 56.25%; }
.demo-iframe { position: absolute; top: 0; inset-inline-start: 0; width: 100%; height: 100%; border: none; }
</style>