<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from '@nuxt/ui';

const features = ref<PageFeatureProps[]>([
  {
    title: 'End-to-End Product Design',
    description: 'Designed complete user flows from onboarding to gift card management',
    icon: 'i-lucide-workflow',
  },
  {
    title: 'Design System & Branding',
    description: 'Created logo, visual identity, and reusable design components',
    icon: 'i-lucide-palette',
  },
  {
    title: '40+ Responsive Screens',
    description: 'Built scalable UI across mobile, tablet, and desktop',
    icon: 'i-lucide-monitor-smartphone',
  },
]);

const links = ref<ButtonProps[]>([
  {
    label: 'View Projects',
    to: '/projects',
    trailingIcon: 'i-lucide-external-link',
    color: 'neutral',
  },
  {
    label: 'View Case Study',
    to: '/projects/gifzi',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
]);
</script>

<template>
  <UPageSection
    headline="Client Project"
    title="Gifzi"
    description="Designed the complete UI/UX for Gifzi, a digital gift card platform. Created responsive screens along with the logo, branding, and design system, graphics, focusing on usability and scalability."
    :features="features"
    :links="links"
    orientation="horizontal"
    reverse
    :ui="{
      root: 'isolation-auto',
      links: 'text-shadow-md/0',
    }"
    class="text-shadow-md/100 text-shadow-white dark:text-shadow-black"
  >
    <div class="flex gap-4 flex-col">
      <div class="flex gap-4">
        <AppCard class="rounded-xl aspect-square flex-[36%] overflow-hidden p-2" transparent>
          <AppImage
            src="/gifzi/gifzi-1.png"
            :ui="{
              image: 'w-full h-full object-cover rounded-lg',
            }"
          />
        </AppCard>
        <AppCard class="rounded-xl aspect-video flex-[64%] overflow-hidden p-2" transparent>
          <AppImage
            src="/gifzi/gifzi-2.png"
            :ui="{
              image: 'w-full h-full object-cover rounded-lg',
            }"
          />
        </AppCard>
      </div>
      <div class="flex gap-4">
        <AppCard class="rounded-xl aspect-video flex-[64%] overflow-hidden p-2" transparent>
          <AppImage
            src="/gifzi/gifzi-3.png"
            :ui="{
              image: 'w-full h-full object-cover rounded-lg',
            }"
          />
        </AppCard>
        <AppCard class="rounded-xl aspect-square flex-[36%] overflow-hidden p-2" transparent>
          <div class="w-full h-full aspect-square">
            <div class="absolute inset-0 flex items-center justify-center blur-xl flex-col gap-4">
              <AseetsGifziLogo class="size-8 sm:size-16" />
              <p class="opactiy-0 text-transparent text-base sm:text-2xl font-bold">40+ Screens</p>
            </div>

            <div class="relative flex items-center justify-center flex-col gap-4 w-full h-full">
              <AseetsGifziLogo class="size-8 sm:size-16" />
              <p class="text-base sm:text-2xl font-bold text-highlighted">40+ Screens</p>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </UPageSection>
</template>
