<script setup lang="ts">
const cards = ref([
  {
    title: 'Gifzi',
    type: 'client',
    role: 'Product Design',
    description: 'Designed a scalable digital gifting experience with 40+ responsive screens.',
    icon: 'i-lucide-smile',
    to: '/projects/gifzi',
    keywords: ['Figma', 'UI/UX', 'Design System'],
    buttonLabel: '40+ Screens',
    banner: '/gifzi/gifzi-mobile-experience.png',
  },
  {
    title: 'Kathika',
    type: 'client',
    role: 'Full Stack',
    description: 'Built a flexible CMS with live editing, dynamic components, and admin control',
    icon: 'i-lucide-a-large-small',
    to: '/projects/kathika',
    keywords: ['React', 'Slate', 'Express'],
    buttonLabel: '20+ Components',
    banner: '/kathika/kathika-editor-preview.png',
  },
  {
    title: 'Dev Sync',
    role: 'Microservices Architecture',
    type: 'personal',
    description:
      'Architected a microservices-based developer platform with event-driven communication',
    icon: 'i-lucide-sun-moon',
    to: 'projects/dev-sync',
    keywords: ['Node.js', 'Express', 'Kafka', 'MicroServices'],
    buttonLabel: 'Event-Driven System',
    banner: '/dev-sync/dev-sync-kafka-flow.png',
  },
  {
    title: 'Server Template',
    type: 'personal',

    role: 'Backend Infrastructure',
    description:
      'Created a production-ready backend template with opinionated structure and tooling',
    icon: 'i-lucide-sun-moon',
    to: 'projects/server-template',
    keywords: ['Fasify', 'TypeScript', 'Docker', 'CI/CD'],
    buttonLabel: 'Scalable & Resuable',
    banner: '/server-template/server-template-docs.png',
  },
]);
</script>

<template>
  <UPageGrid class="lg:grid-cols-2">
    <div v-for="(card, index) in cards" :key="index" class="rounded-lg overflow-hidden">
      <NuxtLink :to="card.to">
        <div class="aspect-video w-full rounded-sm overflow-hidden">
          <img :src="card.banner" class="aspect-video object-cover hover:scale-110 duration-300" >
        </div>
      </NuxtLink>

      <div class="relative p-4 space-y-4">
        <div class="space-y-2">
          <UBadge
            :label="`${card.type === 'client' ? 'Client Work' : 'Personal Work'} - ${card.role}`"
            variant="outline"
            color="neutral"
            class="rounded-full"
          />
          <div>
            <p class="text-xl text-highlighted font-bold">{{ card.title }}</p>
            <p class="text-muted">
              {{ card.description }}
            </p>
          </div>

          <div class="flex gap-2">
            <UBadge
              v-for="(item, index) in card.keywords"
              :key="index"
              :label="item"
              variant="outline"
              color="neutral"
              class="rounded-full bg-transparent text-muted"
            />
          </div>
        </div>

        <UButton
          variant="outline"
          class="w-full p-0 ring-muted rounded-l-md rounded-r-3xl group"
          :to="card.to"
        >
          <template #default>
            <div class="px-3 py-2 flex gap-2 items-center justify-center">
              <UIcon :name="card.icon" />
              <span class="text-highlighted">{{ card.buttonLabel }}</span>
            </div>
          </template>
          <template #trailing>
            <div
              class="border rounded-full ml-auto aspect-square h-full p-2 flex justify-center items-center duration-300 bg-white dark:bg-black shadow-[0_0_0px_0px_var(--ui-color-primary-500)] group-hover:shadow-[0_0_8px_4px_var(--ui-color-primary-500)]"
            >
              <UIcon name="i-lucide-arrow-right" class="size-5" />
            </div>
          </template>
        </UButton>
      </div>
    </div>
  </UPageGrid>
</template>
