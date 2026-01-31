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
