<template>
  <section class="section section--grid">
    <div class="section__header">
      <h2>Projects</h2>
      <p>Recent work with measurable outcomes.</p>
    </div>
    <div class="grid grid--wide">
      <div class="tile tile--project" v-for="project in projects" :key="project.name">
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
const { projects } = useResumeData();
</script>
