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
          <p class="nickname">{{ profile.nickname }}</p>
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

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
  gap: 48px;
  align-items: center;
}

.hero__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero__header {
  display: flex;
  align-items: center;
  gap: 18px;
}

.title {
  font-size: clamp(32px, 5vw, 56px);
  margin: 0;
  font-weight: 600;
  white-space: nowrap;
}

.nickname {
  margin: 6px 0 0;
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.subtitle {
  font-size: 18px;
  line-height: 1.6;
  color: var(--text-soft);
  max-width: 520px;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 14px;
  color: var(--text-muted);
}

.actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  border-radius: 999px;
  padding: 10px 22px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn--primary {
  background: var(--text);
  color: var(--bg);
  border-color: var(--text);
}

.btn--primary:hover {
  background: #ffffff;
}

.btn--ghost {
  color: var(--text);
  background: transparent;
  border-color: var(--border-strong);
}

.btn--ghost:hover {
  border-color: var(--text);
  background: rgba(255, 255, 255, 0.08);
}

.hero__card {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
}

.profile {
  display: flex;
}

.profile__photo {
  width: 132px;
  height: 132px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--surface);
  box-shadow: var(--shadow-soft);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}

.profile__photo:hover {
  transform: scale(1.06);
  box-shadow: var(--shadow);
}

.modal {
  position: fixed;
  inset: 0;
  background: var(--overlay);
  display: grid;
  place-items: center;
  z-index: 999;
  padding: 24px;
}

.modal__content {
  position: relative;
}

.modal__image {
  max-width: min(560px, 90vw);
  max-height: 80vh;
  width: 100%;
  height: auto;
  border-radius: 28px;
  box-shadow: var(--shadow-strong);
}

.modal__close {
  position: absolute;
  top: -14px;
  right: -14px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: var(--surface);
  color: var(--text);
  font-size: 16px;
  cursor: pointer;
  box-shadow: var(--shadow-soft);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.card {
  background: var(--surface);
  border-radius: 28px;
  padding: 28px;
  box-shadow: var(--shadow);
  min-width: 260px;
}

.card__label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text-muted);
}

.card__title {
  font-size: 20px;
  margin: 8px 0 4px;
  font-weight: 600;
}

.card__subtitle {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.card__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.stat__value {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.stat__label {
  font-size: 12px;
  color: var(--text-muted);
  margin: 0;
}

@media (max-width: 1100px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero__content {
    align-items: center;
    text-align: center;
  }

  .hero__header {
    flex-direction: column;
    align-items: center;
  }

  .meta {
    justify-content: center;
  }

  .hero__card {
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 360px;
  }
}

@media (max-width: 720px) {
  .hero__content {
    align-items: center;
    text-align: center;
  }

  .hero__header {
    flex-direction: column;
    align-items: center;
  }

  .title {
    white-space: normal;
  }

  .meta {
    justify-content: center;
  }

  .hero__card {
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 360px;
  }

  .card__stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
