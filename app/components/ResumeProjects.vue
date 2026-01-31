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
