<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
]);
</script>

<template>
  <div class="absolute bottom-0 h-min w-full flex justify-center lg:hidden">
    <div class="relative w-full">
      <div class="absolute inset-0">
        <div class="absolute inset-0 backdrop-blur-md overflow-hidden" />
        <div
          class="absolute inset-0 bg-shade-2 opacity-30 m-px drop-shadow-white dark:drop-shadow-black drop-shadow-lg"
        />
        <div class="absolute inset-0 blend-border mix-blend-overlay" />
      </div>

      <div class="relative flex justify-center">
        <UNavigationMenu
          :items="items"
          class="gap-2 py-2 px-8"
          :ui="{
            link: 'px-2 py-1',
            linkLeadingIcon: 'hidden',
          }"
          variant="link"
        />
      </div>
    </div>
  </div>
</template>
