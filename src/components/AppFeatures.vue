<script setup>
import { useI18n } from 'vue-i18n'
const { tm } = useI18n()
</script>

<template>
  <section id="features" class="features-section">
    <div class="container">
      <div 
        v-for="feature in tm('features')" 
        :key="feature.id" 
        class="feature-row glass"
        :class="{ 'reverse': feature.reverse }"
      >
        <div class="feature-content">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.description }}</p>
          <ul class="feature-list">
            <li v-for="item in feature.items" :key="item.text">
              <span class="icon">{{ item.icon }}</span>
              {{ item.text }}
            </li>
          </ul>
        </div>

        <div class="feature-image">
          <img :src="feature.image" :alt="feature.title" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section { padding: 100px 0; }
.feature-row { display: flex; align-items: center; gap: 4rem; padding: 3rem; border-radius: 24px; border: 1px solid var(--border-color); margin-bottom: 4rem; transition: 0.3s; }
.feature-row:hover { border-color: var(--primary); }
.feature-row.reverse { flex-direction: row-reverse; }

.feature-content { flex: 1; }
.feature-content h2 { font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-main); }
.feature-content p { color: var(--text-muted); font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; }
.feature-list { list-style: none; padding: 0; }
.feature-list li { display: flex; align-items: center; gap: 1rem; font-size: 1.1rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.75rem; }
.icon { font-size: 1.5rem; }

.feature-image { flex: 1; height: 400px; border-radius: 20px; overflow: hidden; border: 1px solid var(--border-color); }
.feature-image img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.feature-row:hover .feature-image img { transform: scale(1.05); }

@media (max-width: 992px) {
  .feature-row { gap: 2rem; padding: 2rem; }
  .feature-content h2 { font-size: 2rem; }
  .feature-image { height: 350px; }
}

@media (max-width: 768px) {
  .feature-row, .feature-row.reverse {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
    gap: 1.5rem;
  }
  .feature-image {
    order: -1;
    width: 100%; 
    height: auto; 
    aspect-ratio: 16/9;
    margin-bottom: 1rem; 
  }

  .feature-content p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  .feature-list {
    display: inline-block; 
    text-align: start;
  }
  .feature-list li {
    justify-content: flex-start;
  }
}
</style>