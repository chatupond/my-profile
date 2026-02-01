<template>
  <section class="section section--grid">
    <div class="section__header section__header--row">
      <div>
        <h2>Expertise</h2>
        <p>Core strengths with a focus on product craft.</p>
      </div>
      <div class="carousel__controls">
        <button class="carousel__btn" @click="scrollCarousel(-1)" aria-label="Scroll left">
          ‹
        </button>
        <button class="carousel__btn" @click="scrollCarousel(1)" aria-label="Scroll right">
          ›
        </button>
      </div>
    </div>
    <div class="carousel" ref="carouselRef">
      <div class="tile carousel__item" v-for="skill in skills" :key="skill.title">
        <p class="tile__title">{{ skill.title }}</p>
        <p class="tile__desc">{{ skill.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { skills } = useResumeData();
const carouselRef = ref<HTMLDivElement | null>(null);

const scrollCarousel = (direction: number) => {
  if (!carouselRef.value) return;
  const cardWidth = carouselRef.value.querySelector<HTMLElement>(".carousel__item")?.offsetWidth ?? 240;
  carouselRef.value.scrollBy({
    left: direction * (cardWidth + 20),
    behavior: "smooth",
  });
};
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section__header h2 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.section__header p {
  color: var(--text-muted);
  margin: 8px 0 0;
}

.section__header--row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-end;
}

.carousel__controls {
  display: flex;
  gap: 8px;
}

.carousel__btn {
  border-radius: 999px;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border-strong);
  background: var(--surface-elevated);
  font-size: 18px;
  color: var(--text);
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.carousel__btn:hover {
  border-color: var(--text);
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-1px);
}

.carousel__btn:active {
  background: rgba(255, 255, 255, 0.14);
}

.carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% - 20px) / 3);
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 8px;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
}

.carousel__item {
  scroll-snap-align: start;
}

.tile {
  background: var(--surface);
  border-radius: 24px;
  padding: 24px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tile__title {
  font-weight: 600;
  margin: 0;
}

.tile__desc {
  color: var(--text-soft);
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 720px) {
  .section__header--row {
    flex-direction: column;
    align-items: flex-start;
  }

  .carousel {
    grid-auto-columns: minmax(240px, 1fr);
  }
}
</style>
