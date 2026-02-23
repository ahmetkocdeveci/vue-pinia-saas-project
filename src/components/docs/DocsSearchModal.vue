<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({ isOpen: Boolean })
const emit = defineEmits(['close', 'navigate'])
const searchQuery = ref('')
const searchInputRef = ref(null)

const { t } = useI18n()

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    searchQuery.value = ''
    nextTick(() => { if (searchInputRef.value) searchInputRef.value.focus() })
  }
})

const searchGroups = computed(() => [
  {
    title: t('docs.categories.gettingStarted'),
    items: [
      { id: 'introduction', title: t('docs.pages.introduction'), desc: t('docs.searchDesc.introduction') },
      { id: 'installation', title: t('docs.pages.installation'), desc: t('docs.searchDesc.installation') },
      { id: 'usage', title: t('docs.pages.usage'), desc: t('docs.searchDesc.usage') }
    ]
  },
  {
    title: t('docs.categories.essentials'),
    items: [
      { id: 'markdown', title: t('docs.pages.markdown'), desc: t('docs.searchDesc.markdown') },
      { id: 'codeblocks', title: t('docs.pages.codeblocks'), desc: t('docs.searchDesc.codeblocks') },
      { id: 'prose', title: t('docs.pages.prose'), desc: t('docs.searchDesc.prose') }
    ]
  }
])

const filteredGroups = computed(() => {
  if (!searchQuery.value) return searchGroups.value
  const q = searchQuery.value.toLowerCase()
  return searchGroups.value.map(group => ({
    ...group,
    items: group.items.filter(i => 
      i.title.toLowerCase().includes(q) || 
      i.desc.toLowerCase().includes(q)
    )
  })).filter(g => g.items.length > 0)
})
</script>

<template>
  <teleport to="body">
    <div v-if="isOpen" class="search-modal-backdrop" @click="emit('close')">
      <div class="search-modal" @click.stop>
        <div class="search-modal-header">
          <input ref="searchInputRef" v-model="searchQuery" type="text" :placeholder="t('docs.searchPlaceholder')" />
          <button class="close-btn" @click="emit('close')">ESC</button>
        </div>
        <div class="search-modal-body">
          <div v-for="group in filteredGroups" :key="group.title" class="search-group">
            <h4>{{ group.title }}</h4>
            <div v-for="item in group.items" :key="item.id" class="search-item" @click="emit('navigate', item.id); emit('close')">
              <span class="search-item-title">{{ item.title }}</span>
              <span class="search-item-desc">{{ item.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.search-modal-backdrop { position: fixed; inset: 0; background: rgba(2, 6, 23, 0.7); backdrop-filter: blur(4px); z-index: 9999; display: flex; justify-content: center; padding-top: 10vh; }
.search-modal { width: 100%; max-width: 600px; background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; height: fit-content; max-height: 80vh; overflow: hidden; }
.search-modal-header { padding: 1rem; border-bottom: 1px solid #1e293b; display: flex; gap: 1rem; }

.search-modal-header input { flex: 1; background: transparent; border: none; color: white; outline: none; font-size: 1.1rem; text-align: start; }

.search-modal-body { padding: 0.5rem; overflow-y: auto; }

.search-group h4 { font-size: 0.75rem; color: #64748b; padding: 0.5rem 1rem; text-transform: uppercase; text-align: start; }
.search-item { padding: 0.75rem 1rem; cursor: pointer; border-radius: 8px; display: flex; flex-direction: column; text-align: start; }
.search-item:hover { background: rgba(56, 189, 248, 0.1); }
.search-item-title { color: white; font-weight: 500; }
.search-item-desc { color: #64748b; font-size: 0.85rem; }
.close-btn { color: #64748b; font-size: 0.75rem; border: 1px solid #1e293b; border-radius: 4px; padding: 0.25rem 0.5rem; background: transparent; }
</style>