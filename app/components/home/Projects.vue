<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from '@nuxt/ui';

const features = ref<PageFeatureProps[]>([
  {
    title: 'Researched & Built From Scratch',
    description: 'Evaluated block-editor frameworks, then built a custom Slate-based editor',
    icon: 'i-lucide-flask-conical',
  },
  {
    title: 'Full Stack: Editor + API',
    description: 'React/Slate frontend and a Node.js/MongoDB backend, designed together',
    icon: 'i-lucide-workflow',
  },
  {
    title: '6 Custom Block Types',
    description: 'A real visual editor, not a rich-text field bolted onto a page',
    icon: 'i-lucide-blocks',
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
    to: '/projects/bicar',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
]);
</script>

<template>
  <UPageSection
    headline="Client Project"
    title="Bicar"
    description="Researched block-editor frameworks, then designed and built a custom Notion-style visual editor and its backend from scratch for a Bombay research institute — the architecture I later directed the reuse of for a second client."
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
        <div class="rounded-xl aspect-square flex-[36%] overflow-hidden">
          <AppImage
            src="/bicar/bicar-live-page.png"
            alt="BICAR's live homepage"
            :ui="{
              image: 'w-full h-full object-cover rounded-lg',
            }"
          />
        </div>
        <div class="relative rounded-xl aspect-video flex-[64%] overflow-hidden">
          <AppImage
            src="/bicar/bicar-edit-toggle.png"
            alt="Clicking Edit turns the live page into an editable one, with a floating formatting toolbar"
            :ui="{
              image: 'w-full h-full object-cover rounded-lg',
            }"
          />
        </div>
      </div>
      <div class="flex gap-4">
        <div class="rounded-xl aspect-video flex-[64%] overflow-hidden">
          <AppImage
            src="/bicar/bicar-module-elements.png"
            alt="The element picker and structured module system, mid-search"
            :ui="{
              image: 'w-full h-full object-cover rounded-lg',
            }"
          />
        </div>
        <AppCard class="rounded-xl aspect-square flex-[36%] overflow-hidden" transparent>
          <div class="w-full h-full aspect-square">
            <div
              aria-hidden="true"
              class="absolute inset-0 flex items-center justify-center blur-xl flex-col gap-4"
            >
              <UIcon name="i-lucide-code-2" class="size-8 sm:size-16 text-highlighted" />
              <p class="opacity-0 text-transparent text-base sm:text-2xl font-bold">6 Elements</p>
            </div>

            <div class="relative flex items-center justify-center flex-col gap-4 w-full h-full">
              <UIcon name="i-lucide-code-2" class="size-8 sm:size-16 text-highlighted" />
              <p class="text-base sm:text-2xl font-bold text-highlighted">6 Elements</p>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </UPageSection>
</template>
