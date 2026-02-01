<template>
  <section class="section section--grid">
    <div class="section__header section__header--row">
      <div>
        <h2>Projects</h2>
        <p>Recent work with measurable outcomes.</p>
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
    <div class="carousel carousel--projects" ref="carouselRef">
      <div
        class="tile tile--project carousel__item"
        v-for="project in projects"
        :key="project.name"
      >
        <div>
          <p class="tile__title">{{ project.name }}</p>
          <p class="tile__desc">{{ project.description }}</p>
        </div>
        <p class="tile__meta">{{ project.metrics }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { projects } = useResumeData();
const carouselRef = ref<HTMLDivElement | null>(null);

const scrollCarousel = (direction: number) => {
  if (!carouselRef.value) return;
  const cardWidth = carouselRef.value.querySelector<HTMLElement>(".carousel__item")?.offsetWidth ?? 260;
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
  grid-auto-columns: calc((100% - 20px) / 2);
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

.tile--project {
  justify-content: space-between;
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

.tile__meta {
  color: var(--text-muted);
  margin: 0;
  font-size: 13px;
}

@media (max-width: 720px) {
  .section__header--row {
    flex-direction: column;
    align-items: flex-start;
  }

  .carousel {
    grid-auto-columns: minmax(260px, 1fr);
  }
}
</style>
