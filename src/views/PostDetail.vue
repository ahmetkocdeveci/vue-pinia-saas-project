<script setup>
import { useRoute } from 'vue-router'
import { useContentStore } from '../stores/useContent'

const route = useRoute()
const store = useContentStore()

// URL'deki slug ile eşleşen yazıyı buluyoruz
const post = store.getPostBySlug(route.params.slug)
</script>

<template>
  <div class="post-container container" v-if="post">
    <router-link to="/blog" class="back-link">← Blog'a Dön</router-link>
    
    <article class="post-content">
      <header class="post-header">
        <span class="post-date">{{ post.date }}</span>
        <h1>{{ post.title }}</h1>
      </header>
      
      <div class="content-body">
        {{ post.content }}
      </div>
    </article>
  </div>
  
  <div v-else class="container not-found">
    <h1>Yazı Bulunamadı :(</h1>
    <router-link to="/blog">Blog listesine dön</router-link>
  </div>
</template>

<style scoped>
.post-container { padding-top: 150px; max-width: 800px !important; margin-bottom: 100px; }
.back-link { color: var(--primary); text-decoration: none; margin-bottom: 2rem; display: block; }
.post-header { margin-bottom: 3rem; }
.post-date { color: var(--text-muted); font-size: 0.9rem; }
.post-header h1 { font-size: 3.5rem; margin-top: 1rem; }
.content-body { font-size: 1.25rem; line-height: 1.8; color: #cbd5e1; }
.not-found { padding-top: 200px; text-align: center; }
</style>