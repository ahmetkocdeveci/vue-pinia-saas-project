<script setup>
import { useContentStore } from '../stores/useContent'
const store = useContentStore()
const featuredPost = store.posts.find(p => p.featured)
const regularPosts = store.posts.filter(p => !p.featured)
</script>

<template>
  <div class="blog-container container">
    <section v-if="featuredPost" class="featured-section">
      <router-link :to="'/blog/' + featuredPost.slug" class="featured-card">
        <div class="featured-img">
          <img :src="featuredPost.image" :alt="featuredPost.title">
        </div>
        <div class="featured-content">
          <div class="meta">
            <span class="category">{{ featuredPost.category }}</span>
            <span class="date">{{ featuredPost.date }}</span>
          </div>
          <h1>{{ featuredPost.title }}</h1>
          <p>{{ featuredPost.excerpt }}</p>
          <div class="author">
            <img :src="featuredPost.author.avatar" alt="">
            <span>{{ featuredPost.author.name }}</span>
          </div>
        </div>
      </router-link>
    </section>

    <div class="posts-grid">
      <router-link 
        v-for="post in regularPosts" 
        :key="post.id" 
        :to="'/blog/' + post.slug" 
        class="post-card"
      >
        <div class="card-img">
          <img :src="post.image" alt="">
        </div>
        <div class="card-body">
          <div class="meta">
            <span class="category">{{ post.category }}</span>
            <span class="date">{{ post.date }}</span>
          </div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <div class="author">
            <img :src="post.author.avatar" alt="">
            <span>{{ post.author.name }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.blog-container { padding-top: 120px; padding-bottom: 80px; }

.featured-card {
  display: flex;
  gap: 3rem;
  text-decoration: none;
  color: #fff;
  margin-bottom: 5rem;
  align-items: center;
}
.featured-img { flex: 1.5; border-radius: 24px; overflow: hidden; height: 400px; }
.featured-img img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.featured-card:hover .featured-img img { transform: scale(1.05); }
.featured-content { flex: 1; }

.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}
.post-card { text-decoration: none; color: #fff; display: flex; flex-direction: column; }
.card-img { border-radius: 16px; overflow: hidden; height: 220px; margin-bottom: 1.5rem; }
.card-img img { width: 100%; height: 100%; object-fit: cover; }
.meta { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.category { color: var(--primary); font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.date { color: var(--text-muted); font-size: 0.85rem; }
h1 { font-size: 2.8rem; line-height: 1.2; margin-bottom: 1.5rem; }
h3 { font-size: 1.2rem; margin-bottom: 1rem; line-height: 1.4; }
p { color: var(--text-muted); line-height: 1.6; margin-bottom: 2rem; }

.author { display: flex; align-items: center; gap: 0.75rem; }
.author img { width: 32px; height: 32px; border-radius: 50%; }
.author span { font-size: 0.9rem; font-weight: 500; }

@media (max-width: 992px) {
  .featured-card { flex-direction: column; text-align: center; }
  .posts-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>