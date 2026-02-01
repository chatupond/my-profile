<template>
  <div class="page">
    <ResumeHero />
    <ResumeExperience />
    <ResumeSkills />
    <ResumeProjects />
    <ResumeEducation />
    <ResumeFooter />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 96px;
  padding: 80px 8vw 120px;
}

@media (max-width: 720px) {
  .page {
    padding: 60px 6vw 100px;
    gap: 72px;
  }
}
</style>
