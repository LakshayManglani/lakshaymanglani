<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui';

const features = ref<PageFeatureProps[]>([
  {
    title: 'lakshaymanglani2212@gmail.com',
    icon: 'i-lucide-mail',
    to: 'mailto:lakshaymanglani2212@gmail.com',
  },
]);

const socialLinks: {
  label: string;
  icon: string;
  to: string;
  invert?: boolean;
}[] = [
  {
    label: 'Github',
    icon: 'devicon:github',
    to: 'https://github.com/LakshayManglani',
    invert: true,
  },
  {
    label: 'LinkedIn',
    icon: 'devicon:linkedin',
    to: 'https://www.linkedin.com/in/lakshay-manglani',
  },
];
</script>

<template>
  <UPageSection
    title="Get In Touch"
    description="Let’s work together to build something great."
    orientation="horizontal"
    :features="features"
    reverse
    :ui="{
      root: 'isolation-auto',
      links: 'text-shadow-md/0',
    }"
    class="text-shadow-md/100 text-shadow-white dark:text-shadow-black"
  >
    <ul class="flex gap-4 md:gap-8 justify-center items-center flex-wrap px-4 mt-8">
      <li v-for="(item, index) in socialLinks" :key="index">
        <NuxtLink :to="item.to">
          <AppCard class="rounded-md">
            <div class="relative px-12 py-12">
              <div class="absolute inset-0 flex items-center justify-center blur-2xl">
                <UIcon
                  :name="item.icon"
                  class="size-16"
                  :class="{
                    'dark:invert': item.invert,
                  }"
                />
              </div>

              <div class="flex items-center justify-center">
                <UIcon
                  :name="item.icon"
                  class="size-16"
                  :class="{
                    'dark:invert': item.invert,
                  }"
                />
              </div>
            </div>

            <template #title>{{ item.label }}</template>
          </AppCard>
        </NuxtLink>
      </li>
    </ul>
  </UPageSection>
</template>
