<template>
  <section class="section">
    <div class="section__header">
      <h2>Experience</h2>
      <p>Selected roles and impact highlights.</p>
    </div>
    <div class="timeline">
      <article class="timeline__item" v-for="company in roles" :key="company.company">
        <div class="timeline__meta">
          <div class="timeline__company-row">
            <img
              v-if="company.logo"
              class="timeline__company-logo"
              :src="company.logo"
              :alt="`${company.company} logo`"
            />
            <div>
              <p class="timeline__company">{{ company.company }}</p>
              <p class="timeline__period">{{ company.period }}</p>
            </div>
          </div>
        </div>
        <div class="timeline__content">
          <div class="timeline__roles">
            <div
              class="timeline__role"
              v-for="position in company.positions"
              :key="position.title + position.period"
            >
              <div class="timeline__role-header">
                <h3>{{ position.title }}</h3>
                <span class="timeline__role-period">{{ position.period }}</span>
              </div>
              <p class="timeline__summary">{{ position.summary }}</p>
              <ul class="timeline__list">
                <li v-for="item in position.highlights" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
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
  grid-template-columns: minmax(200px, 0.4fr) minmax(0, 1fr);
  gap: 24px;
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
}

.timeline__company {
  font-weight: 600;
  margin: 0;
}

.timeline__company-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.timeline__company-logo {
  width: 44px;
  height: 44px;
  object-fit: contain;
  border-radius: 10px;
  background: transparent;
  border: none;
  padding: 0;
}

.timeline__period {
  color: var(--text-muted);
  margin-top: 6px;
}

.timeline__content h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.timeline__roles {
  display: grid;
  gap: 32px;
}

.timeline__role {
  display: grid;
  gap: 8px;
}

.timeline__role-header {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: baseline;
  justify-content: space-between;
}

.timeline__role-period {
  font-size: 14px;
  color: var(--text-muted);
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
    grid-template-columns: 1fr;
  }

  .timeline__meta,
  .timeline__content {
    grid-column: 1;
  }
}
</style>
