<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const isYearly = ref(false)

const displayPricing = computed(() => {
  const plans = tm('pricing.plans')
  
  return plans.map(plan => {
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
      <span :class="{ 'active': !isYearly }">{{ t('pricing.toggle.monthly') }}</span>
      <div class="switch" @click="isYearly = !isYearly">
        <div class="dot" :class="{ 'slide': isYearly }"></div>
      </div>
      <span :class="{ 'active': isYearly }">
        {{ t('pricing.toggle.yearly') }}
        <small class="discount-badge">{{ t('pricing.toggle.discount') }}</small>
      </span>
    </div>

    <div class="pricing-grid">
      <div 
        v-for="plan in displayPricing" 
        :key="plan.name" 
        class="pricing-card glass"
        :class="{ 'popular': plan.popular }"
      >
        <div v-if="plan.popular" class="popular-tag">{{ t('pricing.mostPopular') }}</div>
        <h3>{{ plan.name }}</h3>
        
        <div class="price-box">
          <span class="currency">$</span>
          <transition name="price-fade" mode="out-in">
            <span class="amount" :key="plan.currentPrice">{{ plan.currentPrice }}</span>
          </transition>
          <span class="period">{{ t('pricing.period') }}</span>
        </div>
        
        <div class="yearly-info-container">
          <transition name="fade">
            <p v-if="isYearly" class="yearly-info">{{ t('pricing.billedAnnually') }}</p>
          </transition>
        </div>

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
.switch { position: relative; width: 50px; height: 26px; background: var(--input-bg); border-radius: 20px; padding: 3px; cursor: pointer; border: 1px solid var(--border-color); }
.dot { position: absolute; inset-inline-start: 3px; width: 18px; height: 18px; background: var(--primary); border-radius: 50%; transition: inset-inline-start 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.dot.slide { inset-inline-start: 27px; }
.discount-badge { background: rgba(16, 185, 129, 0.2); color: var(--primary); padding: 2px 8px; border-radius: 10px; font-size: 0.7rem; margin-inline-start: 5px; }
.pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.pricing-card { padding: 3rem 2rem; border-radius: 24px; text-align: center; border: 1px solid var(--border-color); transition: 0.3s; position: relative; }
.pricing-card.popular { border-color: var(--primary); transform: scale(1.05); }
.popular-tag { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--primary); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; white-space: nowrap; }
.price-box { margin-top: 1.5rem; display: flex; align-items: center; justify-content: center; gap: 0.2rem; }
.amount { font-size: 3.5rem; font-weight: 800; color: var(--text-main); display: inline-block; }
.yearly-info-container { height: 24px; margin-top: -5px; margin-bottom: 20px; }
.yearly-info { font-size: 0.8rem; color: var(--primary); margin: 0; }
.feature-list { list-style: none; text-align: start; margin-bottom: 2.5rem; padding: 0; }
.feature-list li { margin-bottom: 0.75rem; color: var(--text-muted); display: flex; gap: 0.5rem; }
.check { color: var(--primary); }
.btn-plan { width: 100%; padding: 1rem; border-radius: 12px; font-weight: 700; cursor: pointer; border: none; transition: 0.3s; }
.btn-plan.primary { background: var(--primary); color: white; }
.btn-plan.primary:hover { filter: brightness(1.1); }
.btn-plan.secondary { background: var(--input-bg); color: var(--text-main); border: 1px solid var(--border-color); }
.btn-plan.secondary:hover { background: var(--glass-bg); }

.price-fade-enter-active,
.price-fade-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.price-fade-enter-from { opacity: 0; transform: translateY(-10px); }
.price-fade-leave-to { opacity: 0; transform: translateY(10px); }

.fade-enter-active,
.fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>