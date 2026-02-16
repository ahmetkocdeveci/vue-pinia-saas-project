<script setup>
const emit = defineEmits(['set-ref', 'navigate'])
</script>

<template>
  <div>
    <div class="content-header">
      <h1>Images and Embeds</h1>
      <p class="subtitle">Add image, video, and other HTML elements</p>
    </div>
    
    <div class="prose">
      <h2 id="image" :ref="(el) => emit('set-ref', el)">Image</h2>
      
      <h3 id="using-markdown" :ref="(el) => emit('set-ref', el)">Using Markdown</h3>
      <p>Display images using standard Markdown syntax. Markdown images are simple to implement for basic image display.</p>
      
      <div class="image-preview">
        <img src="https://nuxt.com/new-social.jpg" alt="Nuxt Social Image" class="rounded-lg border border-white/10" />
      </div>

      <div class="nuxt-prose-code">
        <pre><code><span class="token-punctuation">![</span><span class="token-text">Nuxt Social Image</span><span class="token-punctuation">](</span><span class="token-string">https://nuxt.com/new-social.jpg</span><span class="token-punctuation">)</span></code></pre>
      </div>

      <div class="callout callout-note">
        <div class="callout-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        </div>
        <div class="callout-content">
          If <code>@nuxt/image</code> is installed, the <code>&lt;NuxtImg&gt;</code> component will be used instead of the native <code>img</code> tag.
        </div>
      </div>

      <h3 id="using-embeds" :ref="(el) => emit('set-ref', el)">Using Embeds</h3>
      <p>Use embeds for more image customization. Embeds offer greater control over image attributes like size and styling.</p>

      <div class="image-preview">
        <img src="https://nuxt.com/new-social.jpg" alt="Nuxt Social Image" style="height: 150px;" class="rounded-lg border border-white/10" />
      </div>

      <div class="nuxt-prose-code">
        <pre><code><span class="token-punctuation">:img{</span><span class="token-property">src</span><span class="token-punctuation">=</span><span class="token-string">"https://nuxt.com/new-social.jpg"</span> <span class="token-property">alt</span><span class="token-punctuation">=</span><span class="token-string">"Nuxt Social Image"</span> <span class="token-property">height</span><span class="token-punctuation">=</span><span class="token-string">"150"</span><span class="token-punctuation">}</span></code></pre>
      </div>

      <h2 id="embeds-and-html-elements" :ref="(el) => emit('set-ref', el)">Embeds and HTML elements</h2>
      <p>Embeds allow adding various HTML elements like videos and iframes. This feature extends documentation capabilities to include interactive and multimedia content.</p>

      <div class="iframe-container">
        <iframe 
          src="https://www.youtube-nocookie.com/embed/_eQxomah-nA?si=pDSzchUBDKb2NQu7" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div>

      <div class="nuxt-prose-code">
        <pre><code><span class="line"><span class="token-punctuation">:iframe{</span><span class="token-property">src</span><span class="token-punctuation">=</span><span class="token-string">"https://www.youtube-nocookie.com/embed/_eQxomah-nA"</span></span>
<span class="line">  <span class="token-property">title</span><span class="token-punctuation">=</span><span class="token-string">"YouTube video player"</span> <span class="token-property">frameborder</span><span class="token-punctuation">=</span><span class="token-string">"0"</span></span>
<span class="line">  <span class="token-property">allow</span><span class="token-punctuation">=</span><span class="token-string">"accelerometer; autoplay; clipboard-write..."</span></span>
<span class="line">  <span class="token-property">style</span><span class="token-punctuation">=</span><span class="token-string">"aspect-ratio: 16/9;"</span><span class="token-punctuation">}</span></span></code></pre>
      </div>
    </div>

    <div class="next-page-container">
      <a href="#" class="prev-card" @click.prevent="emit('navigate', 'prose')">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </div>
        <div class="card-text">
          <span class="direction">Previous</span>
          <h3>Prose Components</h3>
          <p>Components to help you structure your content.</p>
        </div>
      </a>
      <div class="next-card" style="visibility: hidden;"></div>
    </div>
  </div>
</template>

<style scoped>
.image-preview { margin: 1.5rem 0; }
.image-preview img { max-width: 100%; height: auto; display: block; }
.rounded-lg { border-radius: 0.5rem; }
.border { border-style: solid; border-width: 1px; }
.border-white\/10 { border-color: rgba(255, 255, 255, 0.1); }

.iframe-container { position: relative; width: 100%; aspect-ratio: 16 / 9; margin: 1.5rem 0; border-radius: 0.5rem; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1); }
.iframe-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

.callout { display: flex; gap: 1rem; padding: 1.25rem; border-radius: 0.5rem; margin: 1.5rem 0; font-size: 0.95rem; line-height: 1.6; }
.callout-icon { flex-shrink: 0; width: 1.25rem; height: 1.25rem; color: #38bdf8; }
.callout-note { background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.2); color: #e2e8f0; }

.nuxt-prose-code { background-color: #0f172a; border: 1px solid #1e293b; border-radius: 0.5rem; margin: 1.5rem 0 2.5rem 0; overflow: hidden; }
.nuxt-prose-code pre { margin: 0; padding: 1.25rem 1.5rem; overflow-x: auto; font-size: 0.875rem; line-height: 1.7; font-family: ui-monospace, monospace; }
.token-punctuation { color: #89ddff; }
.token-text { color: #e2e8f0; }
.token-string { color: #98c379; }
.token-property { color: #e06c75; }
</style>