<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const blogs = ref([])
const searchQuery = ref('')
const currentPage = ref(1)
const limit = 6 
const totalPages = ref(1)
const isLoading = ref(false)

const fetchBlogs = async () => {
  isLoading.value = true
  try {
    const endpoint = locale.value === 'en' ? 'blogs' : `blogs_${locale.value}`
    let url = `http://localhost:3000/${endpoint}?_page=${currentPage.value}&_limit=${limit}`
    
    if (searchQuery.value.trim() !== '') {
      url += `&q=${encodeURIComponent(searchQuery.value.trim())}`
    }

    const response = await fetch(url)
    const totalCount = response.headers.get('X-Total-Count')
    totalPages.value = Math.ceil(totalCount / limit) || 1
    
    blogs.value = await response.json()
  } catch (error) {
    console.error("Bloglar çekilirken hata oluştu:", error)
  } finally {
    isLoading.value = false
  }
}
watch(locale, () => {
  currentPage.value = 1
  fetchBlogs()
})

const handleSearch = () => {
  currentPage.value = 1 
  fetchBlogs()
}

const clearSearch = () => {
  searchQuery.value = ''
  currentPage.value = 1
  fetchBlogs()
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    fetchBlogs()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    fetchBlogs()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const goToPage = (pageNumber) => {
  currentPage.value = pageNumber
  fetchBlogs()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  fetchBlogs()
})
</script>

<template>
  <div class="blog-page">
    <div class="container blog-container">
      
      <header class="blog-header">
        <div class="header-texts">
          <h1>{{ t('blog.title') }}</h1>
          <p>{{ t('blog.subtitle') }}</p>
        </div>
        
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchQuery" 
            :placeholder="t('blog.searchPlaceholder')" 
            @keyup.enter="handleSearch"
            @input="handleSearch"
          />
          <button class="search-btn" @click="handleSearch">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            {{ t('blog.searchBtn') }}
          </button>
        </div>
      </header>

      <div v-if="isLoading" class="loading-state">
        <p>{{ t('blog.loading') }}</p>
      </div>

      <div v-else-if="blogs.length === 0" class="empty-state">
        <p>{{ t('blog.noArticles') }} "{{ searchQuery }}".</p>
        <button class="clear-btn" @click="clearSearch">{{ t('blog.clearSearch') }}</button>
      </div>

      <div v-else class="blog-grid">
        <article v-for="blog in blogs" :key="blog.id" class="blog-card">
          <div class="blog-image">
            <img :src="blog.image" :alt="blog.title" loading="lazy" />
            <span class="blog-category">{{ blog.category }}</span>
          </div>
          <div class="blog-content">
            <time class="blog-date">{{ blog.date }}</time>
            <h2 class="blog-title">{{ blog.title }}</h2>
            <p class="blog-desc">{{ blog.description }}</p>
            <router-link :to="`/${locale}/blog/${blog.id}`" class="read-more">
              {{ t('blog.readArticle') }} 
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </router-link>
          </div>
        </article>
      </div>

      <div v-if="totalPages > 1 && !isLoading" class="pagination">
        <button class="page-btn prev" @click="prevPage" :disabled="currentPage === 1">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16"><polyline points="15 18 9 12 15 6"></polyline></svg>
          {{ t('blog.prev') }}
        </button>
        
        <div class="page-numbers">
          <button 
            v-for="page in totalPages" 
            :key="page" 
            class="page-num-btn" 
            :class="{ active: currentPage === page }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
        </div>

        <button class="page-btn next" @click="nextPage" :disabled="currentPage === totalPages">
          {{ t('blog.next') }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.blog-page { padding: 120px 0 80px; min-height: 100vh; }
.blog-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

.blog-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4rem; flex-wrap: wrap; gap: 2rem; }
.header-texts h1 { font-size: 3rem; font-weight: 800; color: var(--heading); margin: 0 0 0.5rem 0; letter-spacing: -0.02em; }
.header-texts p { font-size: 1.1rem; color: var(--text); margin: 0; }

.search-box { display: flex; gap: 0.5rem; width: 100%; max-width: 400px; }
.search-box input { flex: 1; padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid var(--border); background: var(--card-bg); color: var(--heading); font-size: 0.95rem; transition: border-color 0.2s; outline: none; }
.search-box input:focus { border-color: var(--primary); }
.search-btn { display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.25rem; border-radius: 8px; border: none; background: var(--primary); color: #fff; font-weight: 600; cursor: pointer; transition: opacity 0.2s; }
.search-btn:hover { opacity: 0.9; }

.blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 2rem; }
.blog-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; transition: transform 0.3s, border-color 0.3s; display: flex; flex-direction: column; }
.blog-card:hover { transform: translateY(-4px); border-color: var(--primary); }

.blog-image { position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; border-bottom: 1px solid var(--border); }
.blog-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.blog-card:hover .blog-image img { transform: scale(1.05); }
.blog-category { position: absolute; top: 1rem; left: 1rem; background: rgba(0,0,0,0.7); color: #fff; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; backdrop-filter: blur(4px); }

.blog-content { padding: 1.5rem; display: flex; flex-direction: column; flex: 1; }
.blog-date { font-size: 0.85rem; color: var(--text); margin-bottom: 0.75rem; font-weight: 500; }
.blog-title { font-size: 1.25rem; font-weight: 700; color: var(--heading); margin: 0 0 1rem 0; line-height: 1.4; }
.blog-desc { font-size: 0.95rem; color: var(--text); line-height: 1.6; margin: 0 0 1.5rem 0; flex: 1; }
.read-more { display: inline-flex; align-items: center; gap: 0.5rem; color: var(--primary); font-weight: 600; text-decoration: none; font-size: 0.95rem; margin-top: auto; }
.read-more svg { transition: transform 0.2s; }
.blog-card:hover .read-more svg { transform: translateX(4px); }

.pagination { display: flex; justify-content: center; align-items: center; gap: 1rem; margin-top: 5rem; }
.page-btn { display: flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1rem; border: 1px solid var(--border); background: var(--card-bg); color: var(--heading); border-radius: 8px; cursor: pointer; font-weight: 600; transition: 0.2s; }
.page-btn:hover:not(:disabled) { border-color: var(--primary); color: var(--primary); }
.page-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.page-numbers { display: flex; gap: 0.5rem; }
.page-num-btn { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border); background: var(--card-bg); color: var(--text); border-radius: 8px; cursor: pointer; font-weight: 600; transition: 0.2s; }
.page-num-btn:hover { border-color: var(--primary); color: var(--primary); }
.page-num-btn.active { background: var(--primary); border-color: var(--primary); color: #fff; }

.loading-state, .empty-state { text-align: center; padding: 4rem 0; color: var(--text); font-size: 1.1rem; }
.clear-btn { margin-top: 1rem; padding: 0.5rem 1rem; border: 1px solid var(--border); background: transparent; color: var(--heading); border-radius: 6px; cursor: pointer; }

@media (max-width: 768px) {
  .blog-header { flex-direction: column; align-items: flex-start; }
  .search-box { max-width: 100%; }
  .page-numbers { display: none; }
}
</style>