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
