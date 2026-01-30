<template>
  <section class="section section--grid">
    <div class="section__header">
      <h2>Education</h2>
      <p>Background and continuous learning.</p>
    </div>
    <div class="grid grid--wide">
      <div class="tile tile--education" v-for="edu in education" :key="edu.school">
        <div>
          <p class="tile__title">{{ edu.school }}</p>
          <p class="tile__desc">{{ edu.degree }}</p>
        </div>
        <p class="tile__meta">{{ edu.period }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { education } = useResumeData();
</script>
