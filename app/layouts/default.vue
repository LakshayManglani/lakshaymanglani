<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';
import AppBackground from '~/components/AppBackground.vue';
</script>

<template>
  <div class="relative isolate max-w-dvw max-h-dvh h-dvh w-dvw overflow-hidden">
    <AppBackground />
    <div class="absolute inset-0 overflow-y-auto scroll-smooth">
      <slot />
      <AppFooter />
    </div>

    <AppHeader
      :links="[
        {
          label: 'Home',
          to: '/',
        },
        {
          label: 'Projects',
          to: '/projects',
        },
      ]"
    />
    <AppNavbar />
  </div>
</template>
