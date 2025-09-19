<script setup lang="ts">
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <div class="flex flex-col min-h-dvh">
      <AppHeader />

      <main class="grow">
        <NuxtPage />
      </main>

      <AppFooter />
    </div>
  </UApp>
</template>
