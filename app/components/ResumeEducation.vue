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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
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

.tile--education {
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
