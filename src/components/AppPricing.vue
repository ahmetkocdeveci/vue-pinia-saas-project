<script setup>
import { ref, computed } from 'vue'
import { useContentStore } from '../stores/useContent'

const store = useContentStore()
const isYearly = ref(false)

const displayPricing = computed(() => {
  return store.pricing.map(plan => {
    const monthlyPrice = parseFloat(plan.price)
    const finalPrice = isYearly.value 
      ? Math.floor(monthlyPrice * 0.8) 
      : monthlyPrice

    return {
      ...plan,
      currentPrice: finalPrice
    }
  })
})
</script>

<template>
  <section id="pricing" class="pricing-section">
    <div class="pricing-toggle">
      <span :class="{ 'active': !isYearly }">Monthly</span>
      <div class="switch" @click="isYearly = !isYearly">
        <div class="dot" :class="{ 'slide': isYearly }"></div>
      </div>
      <span :class="{ 'active': isYearly }">
        Yearly 
        <small class="discount-badge">20% Off</small>
      </span>
    </div>

    <div class="pricing-grid">
      <div 
        v-for="plan in displayPricing" 
        :key="plan.name" 
        class="pricing-card glass"
        :class="{ 'popular': plan.popular }"
      >
        <div v-if="plan.popular" class="popular-tag">Most Popular</div>
        <h3>{{ plan.name }}</h3>
        
        <div class="price-box">
          <span class="currency">$</span>
          <span class="amount">{{ plan.currentPrice }}</span>
          <span class="period">/mo</span>
        </div>
        
        <p v-if="isYearly" class="yearly-info">Billed annually</p>

        <ul class="feature-list">
          <li v-for="feat in plan.features" :key="feat">
            <span class="check">✓</span> {{ feat }}
          </li>
        </ul>

        <button class="btn-plan" :class="plan.popular ? 'primary' : 'secondary'">
          {{ plan.buttonText }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-section { padding: 40px 0; }
.pricing-toggle { display: flex; justify-content: center; align-items: center; gap: 1.5rem; margin-bottom: 4rem; font-weight: 600; }
.pricing-toggle span { color: var(--text-muted); transition: 0.3s; }
.pricing-toggle span.active { color: var(--text-main); }
.switch { width: 50px; height: 26px; background: var(--input-bg); border-radius: 20px; padding: 3px; cursor: pointer; border: 1px solid var(--border-color); }
.dot { width: 18px; height: 18px; background: var(--primary); border-radius: 50%; transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.dot.slide { transform: translateX(24px); }
.discount-badge { background: rgba(16, 185, 129, 0.2); color: var(--primary); padding: 2px 8px; border-radius: 10px; font-size: 0.7rem; margin-left: 5px; }
.pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.pricing-card { padding: 3rem 2rem; border-radius: 24px; text-align: center; border: 1px solid var(--border-color); transition: 0.3s; }
.pricing-card.popular { border-color: var(--primary); transform: scale(1.05); }
.popular-tag { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--primary); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; }
.price-box { margin-top: 1.5rem; }
.amount { font-size: 3.5rem; font-weight: 800; color: var(--text-main); }
.yearly-info { font-size: 0.8rem; color: var(--primary); margin-top: -10px; margin-bottom: 20px; }
.feature-list { list-style: none; text-align: left; margin-bottom: 2.5rem; }
.feature-list li { margin-bottom: 0.75rem; color: var(--text-muted); display: flex; gap: 0.5rem; }
.check { color: var(--primary); }
.btn-plan { width: 100%; padding: 1rem; border-radius: 12px; font-weight: 700; cursor: pointer; border: none; }
.btn-plan.primary { background: var(--primary); color: white; }
.btn-plan.secondary { background: var(--input-bg); color: var(--text-main); border: 1px solid var(--border-color); }
</style>