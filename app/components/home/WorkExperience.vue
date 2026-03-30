<script setup lang="ts">
import type { ButtonProps, TimelineItem } from '@nuxt/ui';

const links = ref<ButtonProps[]>([
  {
    label: 'Email Me',
    to: 'mailto:lakshaymanglani2212@gmail.com',
    trailingIcon: 'i-lucide-mail',
    color: 'neutral',
  },
]);

const items = ref<TimelineItem[]>([
  {
    date: 'Dec 2024 - Present',
    title: 'Freelance Full-Stack Developer',
    description:
      'Partnering with businesses to transform complex requirements into scalable, performance-first digital products.',
    descriptionList: [
      'Delivered 8+ client projects across different domains',
      'Built 2 custom CMS platforms with inline editing + admin panel.',
      'Designed 40+ high-fidelity screens for a commercial B2B product.',
    ],
    icon: 'i-lucide-briefcase',
  },
  {
    date: 'Dec 2023 – Feb 2024',
    title: 'Backend Developer Intern at TrackOnWeb',
    description:
      'Contributed to the development of a multi-vendor e-commerce platform, focusing on backend architecture, API performance, and database design.',

    descriptionList: [
      'Reduced API response time by 50% using Redis caching',
      'Implemented robust error handling.',
      'Assisted in mentoring junior interns and maintaining version control workflows',
    ],
    icon: 'i-lucide-server',
  },
]);
</script>

<template>
  <UPageSection
    title="Work Experience"
    description="1.5+ years of experience across freelance and internship."
    orientation="horizontal"
    :links="links"
    :ui="{
      root: 'isolation-auto',
      links: 'text-shadow-md/0',
    }"
    class="text-shadow-md/100 text-shadow-white dark:text-shadow-black"
  >
    <UTimeline :items="items" :default-value="0">
      <template #description="{ item }">
        <span>{{ item.description }}</span>
        <ul class="mt-4 list-disc pl-5">
          <li v-for="(listItem, index) in item.descriptionList" :key="index">
            {{ listItem }}
          </li>
        </ul>
      </template>
    </UTimeline>
  </UPageSection>
</template>
