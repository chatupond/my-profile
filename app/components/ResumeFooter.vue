<template>
  <footer class="footer">
    <p>{{ footer.message }}</p>
    <div class="footer__links">
      <span v-for="link in footer.links" :key="link">{{ link }}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { footer } = useResumeData();
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border);
  padding-top: 32px;
  color: var(--text-muted);
  gap: 20px;
  flex-wrap: wrap;
}

.footer__links {
  display: flex;
  gap: 18px;
  font-size: 14px;
}

@media (max-width: 520px) {
  .footer {
    align-items: flex-start;
  }
}
</style>
