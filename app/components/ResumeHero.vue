<template>
  <header class="hero">
    <div class="hero__content">
      <div class="hero__header">
        <div class="profile profile--inline">
          <img
            class="profile__photo"
            :src="profile.photo"
            :alt="`Portrait of ${profile.name}`"
            @click="openPhotoModal"
          />
        </div>
        <div>
          <h1 class="title">{{ profile.name }}</h1>
        </div>
      </div>
      <p class="subtitle">
        {{ profile.tagline }}
      </p>
      <div class="meta">
        <template v-for="(item, index) in profile.meta" :key="item">
          <span>{{ item }}</span>
          <span v-if="index < profile.meta.length - 1">•</span>
        </template>
      </div>
      <div class="actions">
        <button
          v-for="action in profile.actions"
          :key="action.label"
          :class="['btn', action.variant === 'primary' ? 'btn--primary' : 'btn--ghost']"
        >
          {{ action.label }}
        </button>
      </div>
    </div>
    <div class="hero__card">
      <div class="card">
        <p class="card__label">{{ currentRole.label }}</p>
        <p class="card__title">{{ currentRole.title }}</p>
        <p class="card__subtitle">{{ currentRole.subtitle }}</p>
        <div class="card__stats">
          <div v-for="stat in currentRole.stats" :key="stat.label">
            <p class="stat__value">{{ stat.value }}</p>
            <p class="stat__label">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="isPhotoModalOpen"
        class="modal"
        ref="modalRef"
        role="dialog"
        aria-modal="true"
        aria-label="Profile photo"
        @click="closePhotoModal"
        @keydown="onModalKeydown"
        tabindex="0"
      >
        <div class="modal__content" @click.stop>
          <img class="modal__image" :src="profile.photo" alt="Profile portrait" />
          <button class="modal__close" @click="closePhotoModal" aria-label="Close">
            ✕
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref } from "vue";

const { profile, currentRole } = useResumeData();

const isPhotoModalOpen = ref(false);
const modalRef = ref<HTMLElement | null>(null);

const openPhotoModal = () => {
  isPhotoModalOpen.value = true;
  document.body.style.overflow = "hidden";
  nextTick(() => modalRef.value?.focus());
};

const closePhotoModal = () => {
  isPhotoModalOpen.value = false;
  document.body.style.overflow = "";
};

const onModalKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closePhotoModal();
  }
};

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});
</script>
