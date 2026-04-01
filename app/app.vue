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

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: blur(1rem);
  scale: 0.8;
}
</style>
