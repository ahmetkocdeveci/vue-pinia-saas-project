<script setup>
import { useContentStore } from '../stores/useContent'
const store = useContentStore()
</script>

<template>
  <section class="video-section container">
    <div class="video-wrapper glass">
      <iframe 
        :src="store.hero.videoUrl" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
      <div class="video-glow"></div>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  margin-top: -20px; 
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px; 
  aspect-ratio: 16 / 9;
  border-radius: 24px;
  padding: 8px; 
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.02); 
  border: 1px solid rgba(255, 255, 255, 0.05);
}

iframe {
  width: 100%;
  height: 100%;
  border-radius: 18px;
  border: none;
}

.video-glow {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 50px;
  background: var(--primary);
  filter: blur(60px);
  opacity: 0.25;
  z-index: -1;
}

@media (max-width: 1280px) {
  .video-wrapper { max-width: 90%; }
}
</style>