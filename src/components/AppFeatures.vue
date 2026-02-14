<script setup>
import { useContentStore } from '../stores/useContent'
const store = useContentStore()
</script>

<template>
  <section id="features" class="features-section container">
    <div v-for="feature in store.features" :key="feature.id" class="feature-row" :class="{ 'row-reverse': feature.reverse }">
      <div class="feature-text">
        <h2>{{ feature.title }}</h2>
        <p class="description">{{ feature.description }}</p>
        <ul class="feature-list">
          <li v-for="(item, idx) in feature.items" :key="idx">
            <span class="icon">{{ item.icon }}</span>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </div>
      <div class="feature-visual glass">
        <img :src="feature.image" :alt="feature.title" class="feature-img" />
      </div>
    </div>

    <div class="grid-section">
      <div class="section-header">
        <h2>Everything You Need to Ship</h2>
        <p>Stop building from scratch. Focus on your unique features.</p>
      </div>
      <div class="grid-layout">
        <div v-for="item in store.gridFeatures" :key="item.title" class="feature-card glass">
          <div class="card-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section { padding: 80px 0; }
.feature-row { display: flex; align-items: center; gap: 4rem; margin-bottom: 120px; }
.row-reverse { flex-direction: row-reverse; }
.feature-text { flex: 1; }
.feature-text h2 { font-size: 3rem; font-weight: 800; margin-bottom: 1.5rem; }
.description { color: var(--text-muted); font-size: 1.2rem; margin-bottom: 2rem; }
.feature-list { list-style: none; }
.feature-list li { display: flex; gap: 1rem; margin-bottom: 1rem; }
.feature-visual { flex: 1; aspect-ratio: 16/10; border-radius: 24px; overflow: hidden; border: 1px solid var(--border-color); }
.feature-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: 0.3s; }
.feature-img:hover { opacity: 1; }
.grid-section { margin-top: 150px; }
.section-header { text-align: center; margin-bottom: 4rem; }
.grid-layout { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
.feature-card { padding: 2.5rem; border-radius: 20px; border: 1px solid var(--border-color); transition: 0.3s; }
.feature-card:hover { border-color: var(--primary); transform: translateY(-5px); }
</style>