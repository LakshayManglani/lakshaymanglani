<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([
  {
    label: 'View Projects',
    to: '/projects',
    trailingIcon: 'i-lucide-external-link',
  },
  {
    label: 'Download Resume',
    to: '#',
    color: 'neutral',
    variant: 'outline',
    trailingIcon: 'i-lucide-file-text',
  },
]);
</script>

<template>
  <div>
    <UPageHero
      title="Full Stack Developer"
      headline="Hey, I’m Lakshay Manglani 👋"
      :links="links"
      :ui="{
        root: 'isolation-auto',
        headline: 'text-shadow-md/100 text-shadow-white dark:text-shadow-black',
      }"
    >
      <template #description>
        <div class="relative w-fit mx-auto">
          <!-- Background -->
          <div class="absolute rounded-md inset-0 backdrop-blur-2xl m-px" />
          <div
            class="absolute rounded-md inset-0 blend-border mix-blend-overlay"
            :style="{
              '--bb-width': '2px',
            }"
          />
          <div class="absolute rounded-md inset-0 blend-border mix-blend-overlay" />

          <div class="relative w-fit px-4 py-2 rounded-md m-px text-muted">
            Delivered <span class="font-bold">8+ client projects</span> including custom
            <br >
            CMS platforms, admin panels, and
            <br >
            production-ready web apps.
          </div>
        </div>
      </template>
    </UPageHero>
  </div>
</template>
