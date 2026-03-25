<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

defineProps<{
  links: NavigationMenuItem[];
}>();
</script>

<template>
  <div class="absolute px-4 top-0 h-min w-full flex p-4 justify-center">
    <div class="relative rounded-full max-w-3xl w-full">
      <div class="absolute inset-0 rounded-full">
        <div class="absolute rounded-full inset-0 backdrop-blur-md overflow-hidden" />
        <div
          class="absolute rounded-full inset-0 bg-shade-2 opacity-30 m-px drop-shadow-white dark:drop-shadow-black drop-shadow-lg"
        />
        <div class="absolute rounded-full inset-0 blend-border mix-blend-overlay" />
      </div>

      <div class="relative flex justify-center">
        <UHeader
          title="Lakshay Manglani"
          :toggle="false"
          class="bg-transparent border-none backdrop-blur-none w-full"
        >
          <UNavigationMenu
            :items="links"
            class="gap-2 py-4 px-8"
            :ui="{
              link: 'px-2 py-1',
              linkLeadingIcon: 'hidden',
            }"
          />

          <template #right>
            <ColorModeButton />

            <UTooltip text="Open Github Profile">
              <UButton
                color="neutral"
                variant="ghost"
                to="https://github.com/LakshayManglani"
                target="_blank"
                icon="i-simple-icons-github"
                aria-label="GitHub"
                class="rounded-full"
              />
            </UTooltip>
          </template>
        </UHeader>
      </div>
    </div>
  </div>
</template>
