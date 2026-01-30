<template>
  <section class="section section--grid">
    <div class="section__header">
      <h2>Expertise</h2>
      <p>Core strengths with a focus on product craft.</p>
    </div>
    <div class="grid">
      <div class="tile" v-for="skill in skills" :key="skill.title">
        <p class="tile__title">{{ skill.title }}</p>
        <p class="tile__desc">{{ skill.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { skills } = useResumeData();
</script>
