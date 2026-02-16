<script setup>
import { useContentStore } from '../stores/useContent'
const store = useContentStore()
</script>

<template>
  <div class="blog-page">
    <div class="container">
      <header class="page-header">
        <h1>Our Blog</h1>
        <p>Insights, thoughts, and announcements.</p>
      </header>

      <div v-if="store.featuredPost" class="featured-post glass">
        <div class="featured-image">
          <img :src="store.featuredPost.image" :alt="store.featuredPost.title" loading="lazy" />
        </div>
        <div class="featured-content">
          <div class="post-meta">
            <span class="category">{{ store.featuredPost.category }}</span>
            <span class="date">{{ store.featuredPost.date }}</span>
          </div>
          <h2>
            <router-link :to="`/blog/${store.featuredPost.slug}`">{{ store.featuredPost.title }}</router-link>
          </h2>
          <p>{{ store.featuredPost.excerpt }}</p>
          <div class="author">
            <img :src="store.featuredPost.author.avatar" :alt="store.featuredPost.author.name" />
            <span>{{ store.featuredPost.author.name }}</span>
          </div>
        </div>
      </div>

      <div class="blog-grid">
        <div v-for="post in store.regularPosts" :key="post.id" class="post-card glass">
          <div class="post-image">
            <img :src="post.image" :alt="post.title" loading="lazy" />
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span class="category">{{ post.category }}</span>
              <span class="date">{{ post.date }}</span>
            </div>
            <h3>
              <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
            </h3>
            <p>{{ post.excerpt }}</p>
            <div class="author">
              <img :src="post.author.avatar" :alt="post.author.name" />
              <span>{{ post.author.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-page { padding: 120px 0 80px; }
.page-header { text-align: center; margin-bottom: 4rem; }
.page-header h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 1rem; }
.page-header p { color: var(--text-muted); font-size: 1.25rem; }
.featured-post { display: flex; gap: 3rem; align-items: center; padding: 2rem; border-radius: 24px; border: 1px solid var(--border-color); margin-bottom: 4rem; transition: 0.3s; }
.featured-post:hover { border-color: var(--primary); }
.featured-image { flex: 1; height: 350px; border-radius: 16px; overflow: hidden; }
.featured-image img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.featured-post:hover .featured-image img { transform: scale(1.05); }
.featured-content { flex: 1; }

.post-meta { display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
.category { color: var(--primary); }
.date { color: var(--text-muted); }

.featured-content h2 { font-size: 2.5rem; margin-bottom: 1rem; line-height: 1.2; }
.featured-content h2 a { color: var(--text-main); text-decoration: none; transition: 0.3s; }
.featured-content h2 a:hover { color: var(--primary); }
.featured-content p { color: var(--text-muted); font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; }

.author { display: flex; align-items: center; gap: 0.75rem; }
.author img { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-color); }
.author span { font-weight: 600; color: var(--text-main); }
.blog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; }

.post-card { display: flex; flex-direction: column; padding: 1.5rem; border-radius: 20px; border: 1px solid var(--border-color); transition: 0.3s; }
.post-card:hover { border-color: var(--primary); transform: translateY(-5px); }
.post-image { height: 200px; border-radius: 12px; overflow: hidden; margin-bottom: 1.5rem; }
.post-image img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.post-card:hover .post-image img { transform: scale(1.05); }

.post-content { display: flex; flex-direction: column; flex: 1; }
.post-content h3 { font-size: 1.4rem; margin-bottom: 1rem; line-height: 1.3; }
.post-content h3 a { color: var(--text-main); text-decoration: none; transition: 0.3s; }
.post-content h3 a:hover { color: var(--primary); }
.post-content p { color: var(--text-muted); line-height: 1.5; margin-bottom: 1.5rem; flex: 1; }
@media (max-width: 992px) {
  .featured-post { flex-direction: column; gap: 2rem; }
  .featured-image { width: 100%; height: 300px; }
  .page-header h1 { font-size: 2.8rem; }
}

@media (max-width: 768px) {
  .page-header { margin-bottom: 2rem; }
  .page-header h1 { font-size: 2.2rem; }
  .featured-content h2 { font-size: 1.8rem; }
  .blog-grid { 
    grid-template-columns: 1fr; 
    gap: 1.5rem; 
  }
}
</style>