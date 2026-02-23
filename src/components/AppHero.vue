<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="hero-glow"></div>
    <div class="container hero-content">
      <h1 class="hero-title">
        {{ t('hero.title') }} <br />
        <span class="highlight">{{ t('hero.highlight') }}</span>
      </h1>
      <p class="hero-description">{{ t('hero.description') }}</p>
      <div class="hero-actions">
        <button class="btn btn-primary">{{ t('hero.cta') }}</button>
        <button class="btn btn-secondary">{{ t('hero.secondaryCta') }}</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 220px 0 100px;
  overflow: hidden;
  text-align: center;
}

.hero-glow {
  position: absolute;
  top: -300px;
  left: 50%;
  transform: translateX(-50%);
  width: 1800px;
  height: 1000px;
  background: radial-gradient(
    circle closest-side,
    rgba(16, 185, 129, 0.12) 0%,
    rgba(2, 6, 23, 0) 100%
  );
  z-index: -1;
  filter: blur(120px);
  pointer-events: none;
}

.hero-title {
  font-size: 5.5rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin: 0 auto 1.5rem;
  max-width: 1000px;
  color: var(--text-main);
}

.highlight {
  color: var(--primary);
}

.hero-description {
  font-size: 1.35rem;
  color: var(--text-muted);
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  position: relative;
  z-index: 10;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: var(--primary);
  color: white;
  border: none;
}

.btn-primary:hover {
  filter: brightness(1.1);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-main);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--glass-bg);
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 4rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.8rem;
  }
  .hero {
    padding: 150px 0 80px;
  }
  .hero-actions {
    flex-direction: column;
    padding: 0 20px;
  }
  .hero-glow {
    width: 1000px;
    height: 600px;
    top: -150px;
    filter: blur(80px);
  }
}
</style>