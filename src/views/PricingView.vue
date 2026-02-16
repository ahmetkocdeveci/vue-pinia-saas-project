<script setup>
import AppPricing from '../components/AppPricing.vue'
import { ref } from 'vue'

const faqs = ref([
  { question: 'Is your service secure?', answer: 'All your data is end-to-end encrypted and protected by top-tier security protocols.', open: false },
  { question: 'How can I cancel my subscription?', answer: 'You can easily cancel your subscription anytime from your profile settings.', open: false },
  { question: 'Is there a free trial?', answer: 'Yes, you can try our Professional plan for 14 days completely free.', open: false },
  { question: 'Can I change my plan later?', answer: 'Absolutely, you can upgrade or downgrade your plan at any time based on your needs.', open: false }
])
</script>

<template>
  <div class="pricing-page">
    <div class="container">
      <header class="page-header">
        <h1>Choose the Right Plan for You</h1>
        <p>Simple, transparent, and no surprise pricing.</p>
      </header>

      <AppPricing />

      <section class="faq-section">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to your questions here.</p>
        </div>
        
        <div class="faq-list">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item glass" @click="faq.open = !faq.open">
            <div class="faq-question">
              <span>{{ faq.question }}</span>
              <span class="chevron" :class="{ 'rotate': faq.open }">▼</span>
            </div>
            <transition name="faq-slide">
              <div v-show="faq.open" class="faq-answer">
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.pricing-page { padding: 120px 0 80px; }
.page-header { text-align: center; margin-bottom: 4rem; }
.page-header h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 1rem; }
.page-header p { color: var(--text-muted); font-size: 1.25rem; }
.faq-section { margin-top: 120px; }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { font-size: 2.5rem; margin-bottom: 1rem; }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; }
.faq-item { padding: 1.5rem; border-radius: 16px; cursor: pointer; border: 1px solid var(--border-color); transition: border-color 0.3s ease; }
.faq-item:hover { border-color: var(--primary); }
.faq-question { display: flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 1.1rem; }
.chevron { font-size: 0.8rem; transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); color: var(--text-muted); }
.chevron.rotate { transform: rotate(180deg); color: var(--primary); }
.faq-answer { margin-top: 1rem; color: var(--text-muted); line-height: 1.6; border-top: 1px solid var(--border-color); padding-top: 1rem; }

.faq-slide-enter-active,
.faq-slide-leave-active { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); max-height: 300px; opacity: 1; overflow: hidden; }
.faq-slide-enter-from,
.faq-slide-leave-to { max-height: 0; opacity: 0; margin-top: 0; padding-top: 0; overflow: hidden; }
</style>