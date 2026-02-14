<script setup>
import { useContentStore } from '../stores/useContent'
const store = useContentStore()
</script>

<template>
  <section class="testimonials-section container">
    <div class="section-header">
      <h2>Join Thousands Building with SaaSApp</h2>
    </div>
    <div class="testimonials-grid">
      <div v-for="(item, idx) in store.testimonials" :key="idx" class="testimonial-card glass">
        <p class="quote">"{{ item.quote }}"</p>
        <div class="author-info">
          <img :src="item.avatar" class="avatar" />
          <div>
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
.testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
.testimonial-card { padding: 2rem; border-radius: 20px; border: 1px solid var(--border-color); }
.quote { font-style: italic; margin-bottom: 2rem; color: var(--text-main); }
.author-info { display: flex; align-items: center; gap: 1rem; }
.avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; }
</style>