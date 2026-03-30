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

const libs = [
  {
    label: 'TypeScript',
    icon: 'devicon:typescript',
  },
  {
    label: 'React',
    icon: 'devicon:react',
  },
  {
    label: 'Express',
    icon: 'devicon:express',
    invert: true,
  },
  {
    label: 'Linux',
    icon: 'devicon:linux',
  },
];
</script>

<template>
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
      <!-- <div class="relative w-fit mx-auto"> -->
      <!-- Background -->
      <!--   <div class="absolute rounded-md inset-0 backdrop-blur-2xl m-px" /> -->
      <!--   <div -->
      <!--     class="absolute rounded-md inset-0 blend-border mix-blend-overlay" -->
      <!--     :style="{ -->
      <!--       '--bb-width': '2px', -->
      <!--     }" -->
      <!--   /> -->
      <!--   <div class="absolute rounded-md inset-0 blend-border mix-blend-overlay" /> -->
      <!---->
      <!--   <div class="relative w-fit px-4 py-2 rounded-md m-px text-muted"> -->
      <!--     Delivered <span class="font-bold text-highlighted">8+ client projects</span> including -->
      <!--     custom -->
      <!--     <br /> -->
      <!--     CMS platforms, admin panels, and -->
      <!--     <br /> -->
      <!--     production-ready web apps. -->
      <!--   </div> -->
      <!-- </div> -->

      <!-- Background -->
      <div class="relative text-muted text-shadow-md/100 text-shadow-white dark:text-shadow-black">
        Delivered <span class="font-bold text-highlighted">8+ client projects</span> including
        custom
        <br >
        CMS platforms, admin panels, and
        <br >
        production-ready web apps.
      </div>

      <AppCard class="rounded-full mx-auto mt-16" transparent>
        <ul class="flex gap-4 px-8 py-4">
          <li v-for="(item, index) in libs" :key="index">
            <div class="relative">
              <div class="absolute inset-0 flex items-center justify-center blur-md">
                <UIcon
                  :name="item.icon"
                  class="size-6"
                  :class="{
                    'dark:invert': item.invert,
                  }"
                />
              </div>

              <div class="flex items-center justify-center">
                <UIcon
                  :name="item.icon"
                  class="size-6"
                  :class="{
                    'dark:invert': item.invert,
                  }"
                />
              </div>
            </div>
          </li>
        </ul>
      </AppCard>
    </template>
  </UPageHero>
</template>
