<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui';

const features = ref<PageFeatureProps[]>([
  {
    title: 'Real-World Experience',
    description: 'Delivered client projects solving real business problems, live in production',
    icon: 'i-lucide-briefcase',
  },
  {
    title: 'End-to-End Development',
    description: 'From UI/UX design to backend APIs and deployment',
    icon: 'i-lucide-workflow',
  },
  {
    title: 'Design & Performance Focus',
    description: 'Designed 40+ screens and built scalable applications',
    icon: 'i-lucide-sparkles',
  },
]);
</script>

<template>
  <UPageSection
    title="About Me"
    description="Hi, I’m Lakshay — a full-stack developer and UX/UI designer. I’ve shipped multiple production client projects, including CMS platforms with live visual editing and custom web applications. I specialize in Vue, Nuxt, and Node.js — with production experience in React as well — and a strong focus on performance, scalability, and user-centric design."
    orientation="horizontal"
    :features="features"
    :ui="{
      root: 'isolation-auto',
      links: 'text-shadow-md/0',
    }"
    class="text-shadow-md/100 text-shadow-white dark:text-shadow-black"
  >
    <div class="w-full h-full bg-muted" />
  </UPageSection>
</template>
