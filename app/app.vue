<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () =>
  queryCollectionNavigation('content'),
);

provide('navigation', navigation);
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />

    <div class="relative overflow-hidden">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active {
  transition: all 0.4s cubic-bezier(0.19, 0.675, 0.055, 0.55);
}

.layout-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.layout-enter-from {
  opacity: 0;
  transform: translateY(100%) scale(0.95);
  filter: blur(0.25rem);
}

.layout-enter-to {
  filter: blur(0);
  transform: translateY(0) scale(1);
}

.layout-leave-to {
  opacity: 0;
  transform: translateY(-100%) scale(1.05);
  filter: blur(0.25rem);
}
</style>
