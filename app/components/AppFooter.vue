<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items: NavigationMenuItem[] = [
  {
    label: 'Figma Kit',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank',
  },
  {
    label: 'Playground',
    to: 'https://stackblitz.com/edit/nuxt-ui',
    target: '_blank',
  },
  {
    label: 'Releases',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank',
  },
];
</script>

<template>
  <div class="mb-15 md:mb-0 pb-16">
    <UFooter>
      <template #top>
        <UContainer>
          <div class="w-full flex justify-between items-center gap-8 flex-wrap">
            <span class="text-3xl font-bold">Lakshay Manglani</span>

            <UNavigationMenu :items="items" variant="link" />
          </div>
        </UContainer>
      </template>

      <template #left>
        <p class="text-muted text-sm">
          Lakshay Manglani © {{ new Date().getFullYear() }}. All rights reserved.
        </p>
      </template>

      <template #right>
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/LakshayManglani"
          target="_blank"
          aria-label="Github"
        />
        <UButton
          icon="i-simple-icons-linkedin"
          color="neutral"
          variant="ghost"
          to="https://www.linkedin.com/in/lakshay-manglani"
          target="_blank"
          aria-label="LinkedIn"
        />
      </template>
    </UFooter>
  </div>
</template>
