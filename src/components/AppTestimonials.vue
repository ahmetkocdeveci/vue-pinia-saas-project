<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="testimonials-section container">
    <div class="section-header">
      <h2>{{ t('testimonials.title') }}</h2>
    </div>
    <div class="testimonials-grid">
      <div v-for="(item, idx) in tm('testimonials.list')" :key="idx" class="testimonial-card glass">
        <p class="quote">"{{ item.quote }}"</p>
        <div class="author-info">
          <img :src="item.avatar" class="avatar" />
          <div class="author-details">
            <h4>{{ item.author }}</h4>
            <span>{{ item.role }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section { padding: 100px 0; border-top: 1px solid var(--border-color); }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { color: var(--text-main); font-size: 2.2rem; }
.testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
.testimonial-card { padding: 2rem; border-radius: 20px; border: 1px solid var(--border-color); text-align: start; }
.quote { font-style: italic; margin-bottom: 2rem; color: var(--text-main); line-height: 1.6; }
.author-info { display: flex; align-items: center; gap: 1rem; }
.avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; }
.author-details h4 { margin: 0; color: var(--text-main); font-size: 1.05rem; }
.author-details span { color: var(--text-muted); font-size: 0.85rem; }
</style>