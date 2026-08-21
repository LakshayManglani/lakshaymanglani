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
    description:
      'From UI/UX design (40+ screens shipped) to backend APIs, built for performance and scale',
    icon: 'i-lucide-workflow',
  },
  {
    title: 'Self-Hosted Infrastructure',
    description:
      'Run production systems on my own bare-metal Linux server — reverse proxy, TLS, and containerized deployments',
    icon: 'i-lucide-server',
  },
]);
</script>

<template>
  <UPageSection
    title="About Me"
    description="Hi, I’m Lakshay — a full-stack developer specializing in Vue and Nuxt, with production experience in React, Node.js, and Fastify. I’ve shipped multiple production client projects, including CMS platforms with live visual editing and custom web applications, and I bring a strong UX/UI sensibility to how I design and build them."
    :features="features"
    :ui="{
      root: 'isolation-auto',
      links: 'text-shadow-md/0',
    }"
    class="text-shadow-md/100 text-shadow-white dark:text-shadow-black"
  />
</template>
