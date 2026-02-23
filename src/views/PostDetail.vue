<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t, locale } = useI18n()

const post = ref(null)
const relatedPosts = ref([])
const isLoading = ref(true)

const fetchPostData = async () => {
  isLoading.value = true
  try {
    const id = route.params.slug 
    const endpoint = locale.value === 'en' ? 'blogs' : `blogs_${locale.value}`
    const response = await fetch(`http://localhost:3000/${endpoint}/${id}`)
    if (!response.ok) throw new Error('Post not found')
    post.value = await response.json()
    const relatedRes = await fetch(`http://localhost:3000/${endpoint}?id_ne=${id}&_limit=3`)
    if (relatedRes.ok) {
      relatedPosts.value = await relatedRes.json()
    }
    
  } catch (error) {
    console.error("Yazı çekilirken hata:", error)
    post.value = null
  } finally {
    isLoading.value = false
  }
}
watch(locale, () => {
  fetchPostData()
})
watch(() => route.params.slug, (newSlug, oldSlug) => {
  if (newSlug && newSlug !== oldSlug) {
    fetchPostData()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

onMounted(() => {
  fetchPostData()
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template>
  <div class="post-detail-page">
    <div class="container">
      
      <div v-if="isLoading" class="loading-state">
        <p>{{ t('blog.loading') }}</p>
      </div>
      
      <div v-else-if="!post" class="not-found">
        <h2>{{ t('blog.notFound') }}</h2>
        <router-link :to="`/${locale}/blog`" class="btn-back">{{ t('blog.backToBlog') }}</router-link>
      </div>

      <article v-else class="post-content-wrapper">
        <router-link :to="`/${locale}/blog`" class="back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          {{ t('blog.backToBlog') }}
        </router-link>
        
        <div class="post-layout">
          <div class="post-image-col">
            <img :src="post.image" :alt="post.title" class="main-image" />
          </div>
          
          <div class="post-text-col">
            <span class="category-badge">{{ post.category }}</span>
            <time class="post-date">{{ post.date }}</time>
            <h1 class="post-title">{{ post.title }}</h1>
            <div class="post-body">
              <p>{{ post.description }}</p>
            </div>
          </div>
        </div>

        <div v-if="relatedPosts.length > 0" class="related-posts-section">
          <h3>{{ t('blog.relatedPosts') }}</h3>
          <div class="blog-grid">
            <article v-for="rel in relatedPosts" :key="rel.id" class="blog-card">
              <div class="blog-image">
                <img :src="rel.image" :alt="rel.title" loading="lazy" />
                <span class="blog-category">{{ rel.category }}</span>
              </div>
              <div class="blog-content">
                <time class="blog-date">{{ rel.date }}</time>
                <h4 class="blog-title-small">{{ rel.title }}</h4>
                <router-link :to="`/${locale}/blog/${rel.id}`" class="read-more">
                  {{ t('blog.readArticle') }} 
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </router-link>
              </div>
            </article>
          </div>
        </div>

      </article>

    </div>
  </div>
</template>

<style scoped>
.post-detail-page { padding: 120px 0 80px; min-height: 100vh; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

.loading-state, .not-found { text-align: center; padding: 100px 0; }
.not-found h2 { font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--heading); font-weight: 800; }
.btn-back { display: inline-block; background: var(--primary); color: white; padding: 0.8rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: 0.3s; }
.btn-back:hover { filter: brightness(1.1); }

.back-link { display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem; color: var(--text-muted); text-decoration: none; font-weight: 600; font-size: 1rem; transition: 0.2s; }
.back-link:hover { color: var(--primary); }

.post-layout { display: flex; gap: 4rem; align-items: flex-start; }
.post-image-col { flex: 1; max-width: 50%; }
.main-image { width: 100%; border-radius: 16px; object-fit: cover; aspect-ratio: 4/3; border: 1px solid var(--border-color); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }

.post-text-col { flex: 1; display: flex; flex-direction: column; }
.category-badge { align-self: flex-start; background: var(--primary); color: #fff; padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 700; margin-bottom: 1rem; }
.post-date { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem; font-weight: 500; }
.post-title { font-size: 3rem; font-weight: 800; color: var(--heading); margin: 0 0 1.5rem 0; line-height: 1.2; letter-spacing: -0.02em; }
.post-body { font-size: 1.15rem; color: var(--text-main); line-height: 1.8; }

.related-posts-section { margin-top: 6rem; padding-top: 3rem; border-top: 1px solid var(--border-color); }
.related-posts-section h3 { font-size: 2rem; font-weight: 800; color: var(--heading); margin-bottom: 2rem; }

.blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem; }
.blog-card { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 16px; overflow: hidden; transition: transform 0.3s, border-color 0.3s; display: flex; flex-direction: column; }
.blog-card:hover { transform: translateY(-4px); border-color: var(--primary); }

.blog-image { position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; border-bottom: 1px solid var(--border-color); }
.blog-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.blog-card:hover .blog-image img { transform: scale(1.05); }
.blog-category { position: absolute; top: 1rem; left: 1rem; background: rgba(0,0,0,0.7); color: #fff; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; backdrop-filter: blur(4px); }

.blog-content { padding: 1.5rem; display: flex; flex-direction: column; flex: 1; }
.blog-date { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem; font-weight: 500; }
.blog-title-small { font-size: 1.25rem; font-weight: 700; color: var(--heading); margin: 0 0 1rem 0; line-height: 1.4; }
.read-more { display: inline-flex; align-items: center; gap: 0.5rem; color: var(--primary); font-weight: 600; text-decoration: none; font-size: 0.95rem; margin-top: auto; }
.read-more svg { transition: transform 0.2s; }
.blog-card:hover .read-more svg { transform: translateX(4px); }

@media (max-width: 992px) {
  .post-layout { flex-direction: column; gap: 2.5rem; }
  .post-image-col { max-width: 100%; width: 100%; }
  .post-title { font-size: 2.2rem; }
}
</style>