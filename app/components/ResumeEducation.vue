<template>
  <section class="section section--grid">
    <div class="section__header">
      <h2>Education</h2>
      <p>Background and continuous learning.</p>
    </div>
    <div class="grid grid--wide">
      <div class="tile tile--education" v-for="edu in education" :key="edu.school">
        <div>
          <div class="education__title">
            <img class="education__logo" src="/utcc.svg" alt="UTCC logo" />
            <p class="tile__title">{{ edu.school }}</p>
          </div>
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

<style scoped>
.education__title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.education__logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
}
</style>
