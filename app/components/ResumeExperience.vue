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
