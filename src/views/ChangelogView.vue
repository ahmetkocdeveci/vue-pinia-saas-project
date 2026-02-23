<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const activeIndex = ref(-1);
const itemRefs = ref([]);
const scrollProgress = ref(0);
const changelogListRef = ref(null);

const setItemRef = (el, index) => {
  if (el) {
    itemRefs.value[index] = el;
  }
};

const formatText = (text) => text.split("\n\n");

const handleScroll = () => {
  if (!changelogListRef.value) return;

  const rect = changelogListRef.value.getBoundingClientRect();
  const triggerPoint = window.innerHeight / 2;
  const scrolled = triggerPoint - rect.top;
  const totalHeight = rect.height;

  let progress = (scrolled / totalHeight) * 100;
  scrollProgress.value = Math.max(0, Math.min(100, progress));

  let newActiveIndex = -1;
  itemRefs.value.forEach((el, index) => {
    if (el) {
      const itemRect = el.getBoundingClientRect();
      if (itemRect.top <= triggerPoint) {
        newActiveIndex = index;
      }
    }
  });

  activeIndex.value = newActiveIndex;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  setTimeout(handleScroll, 50);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="changelog-page">
    <div class="container changelog-container">
      <header class="page-header">
        <h1>{{ t('changelogPage.title') }}</h1>
      </header>

      <div class="changelog-layout">
        <div class="timeline-track-container" ref="changelogListRef">
          <div class="timeline-track">
            <div class="track-bg"></div>
            <div
              class="track-filled"
              :style="{ height: scrollProgress + '%' }"
            ></div>
          </div>

          <div class="changelog-list">
            <article
              v-for="(release, index) in tm('changelogPage.releases')"
              :key="index"
              class="changelog-item"
              :class="{ 'is-active': index <= activeIndex }"
              :ref="(el) => setItemRef(el, index)"
            >
              <div class="changelog-date">
                <time :class="{ 'active-text': index <= activeIndex }">{{
                  release.date
                }}</time>
              </div>

              <div class="changelog-separator">
                <div class="timeline-dot"></div>
              </div>

              <div class="changelog-content">
                <div class="changelog-date-mobile">
                  <time :class="{ 'active-text': index <= activeIndex }">{{
                    release.date
                  }}</time>
                </div>

                <h2 class="release-title">{{ release.title }}</h2>

                <div v-if="release.image" class="release-image">
                  <img
                    :src="release.image"
                    :alt="release.title"
                    loading="lazy"
                  />
                </div>

                <div class="prose">
                  <p
                    v-for="(p, i) in formatText(release.description)"
                    :key="'desc-' + i"
                  >
                    {{ p }}
                  </p>

                  <h3 v-if="release.featuresTitle">
                    {{ release.featuresTitle }}
                  </h3>
                  <ul v-if="release.features">
                    <li
                      v-for="(feat, i) in release.features"
                      :key="'feat-' + i"
                    >
                      {{ feat }}
                    </li>
                  </ul>

                  <h3 v-if="release.behindTheScenes">{{ t('changelogPage.behindTheScenes') }}</h3>
                  <p
                    v-for="(p, i) in formatText(release.behindTheScenes)"
                    :key="'bts-' + i"
                  >
                    {{ p }}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.changelog-page {
  padding: 120px 0 80px;
}
.changelog-container {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header {
  margin-bottom: 4rem;
  text-align: start;
}
.page-header h1 {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.changelog-layout {
  position: relative;
}

.timeline-track-container {
  position: relative;
}

.timeline-track {
  position: absolute;
  top: 10px;
  bottom: 0;
  inset-inline-start: calc(100px + 1.25rem + 11px);
  width: 2px;
  z-index: 0;
}

.track-bg {
  position: absolute;
  top: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 100%;
  background: var(--border-color);
}

.track-filled {
  position: absolute;
  top: 0;
  inset-inline-start: 0;
  width: 100%;
  background: var(--primary);
  transform-origin: top;
  transition: height 0.1s linear;
}

.changelog-list {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.changelog-item {
  display: grid;
  grid-template-columns: 100px 24px 1fr;
  gap: 2.5rem 1.25rem;
  position: relative;
  padding-bottom: 5rem;
}

.changelog-item:last-child {
  padding-bottom: 0;
}

.changelog-date {
  text-align: end;
  padding-top: 0.25rem;
}

.changelog-date time {
  position: sticky;
  top: 100px;
  color: var(--text-muted);
  font-weight: 600;
  font-size: 1.05rem;
  transition: color 0.3s ease;
}

.active-text {
  color: var(--primary) !important;
  font-weight: 700 !important;
}

.changelog-separator {
  position: relative;
  display: flex;
  justify-content: center;
}

.timeline-dot {
  position: relative;
  margin-top: 0.45rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-color);
  border: 3px solid var(--border-color);
  z-index: 2;
  transition: all 0.3s ease;
}

.changelog-item.is-active .timeline-dot {
  background: var(--primary);
  border-color: var(--primary);
  box-shadow: 0 0 0 5px rgba(16, 185, 129, 0.15);
}

.changelog-content {
  width: 100%;
}
.changelog-date-mobile {
  display: none;
}

.release-title {
  font-size: 1.8rem;
  color: var(--text-main);
  margin: 0 0 1.5rem 0;
  font-weight: 800;
  line-height: 1.2;
}

.release-image {
  margin-bottom: 2rem;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}
.release-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.prose p {
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 1.25rem;
  font-size: 1.1rem;
}
.prose h3 {
  color: var(--text-main);
  font-size: 1.25rem;
  font-weight: 700;
  margin: 2rem 0 1rem 0;
}
.prose ul {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}
.prose li {
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  display: flex;
  align-items: flex-start;
}
.prose li::before {
  content: "•";
  color: var(--primary);
  margin-inline-end: 0.75rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .changelog-item {
    grid-template-columns: 24px 1fr;
    gap: 1.5rem;
  }
  .changelog-date {
    display: none;
  }
  .timeline-track {
    inset-inline-start: 11px;
  }
  .changelog-date-mobile {
    display: block;
    margin-bottom: 0.75rem;
  }
  .changelog-date-mobile time {
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 600;
    transition: color 0.3s;
  }
  .page-header h1 {
    font-size: 2.2rem;
  }
}
</style>