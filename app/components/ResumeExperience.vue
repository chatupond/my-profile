<template>
  <section class="section">
    <div class="section__header">
      <h2>Experience</h2>
      <p>Selected roles and impact highlights.</p>
    </div>
    <div class="timeline">
      <article class="timeline__item" v-for="role in roles" :key="role.company">
        <div class="timeline__meta">
          <p class="timeline__company">{{ role.company }}</p>
          <p class="timeline__period">{{ role.period }}</p>
        </div>
        <span class="timeline__indicator" aria-hidden="true"></span>
        <div class="timeline__content">
          <h3>{{ role.title }}</h3>
          <p class="timeline__summary">{{ role.summary }}</p>
          <ul class="timeline__list">
            <li v-for="item in role.highlights" :key="item">{{ item }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const { roles } = useResumeData();
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

.timeline {
  display: grid;
  gap: 32px;
}

.timeline__item {
  position: relative;
  display: grid;
  grid-template-columns: minmax(200px, 0.4fr) 24px minmax(0, 1fr);
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
}

.timeline__indicator {
  position: relative;
}

.timeline__indicator::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: var(--border);
  transform: translateX(-50%);
}

.timeline__indicator::after {
  content: "";
  position: absolute;
  top: 28px;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--text);
  box-shadow: 0 0 0 4px var(--bg);
  transform: translateX(-50%);
}

.timeline__company {
  font-weight: 600;
  margin: 0;
}

.timeline__period {
  color: var(--text-muted);
  margin-top: 6px;
}

.timeline__content h3 {
  margin: 0 0 12px;
  font-size: 20px;
  font-weight: 600;
}

.timeline__summary {
  margin: 0 0 12px;
  color: var(--text-soft);
}

.timeline__list {
  margin: 0;
  padding-left: 18px;
  color: var(--text-soft);
  display: grid;
  gap: 8px;
}

@media (max-width: 720px) {
  .timeline__item {
    grid-template-columns: 1fr 20px;
  }

  .timeline__meta,
  .timeline__content {
    grid-column: 1;
  }

  .timeline__indicator {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
}
</style>
