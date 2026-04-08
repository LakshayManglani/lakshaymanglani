<script setup lang="ts">
import { useTemplateRef, onMounted, onUnmounted } from 'vue';

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

const { $gsap: gsap } = useNuxtApp();

const { x, y } = useMouse({
  type: 'page',
});

const follower = useTemplateRef<HTMLElement>('follower');

const followerText = ref('');
const isVisible = ref(false);

let setX: ReturnType<typeof gsap.quickTo> | null = null;
let setY: ReturnType<typeof gsap.quickTo> | null = null;

const showFollower = (text: string) => {
  if (!follower.value) return;

  followerText.value = text;

  if (!isVisible.value) {
    isVisible.value = true;

    gsap.fromTo(
      follower.value,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      },
    );
  }
};

// hide tooltip
const hideFollower = () => {
  if (!follower.value) return;

  isVisible.value = false;

  gsap.to(follower.value, {
    opacity: 0,
    scale: 0.8,
    duration: 0.25,
    ease: 'power2.out',
  });
};

onMounted(() => {
  if (!follower.value) return;

  gsap.set(follower.value, {
    xPercent: -50,
    yPercent: -50,
    opacity: 0,
  });

  setX = gsap.quickTo(follower.value, 'x', {
    duration: 0.4,
    ease: 'power3.out',
  });

  setY = gsap.quickTo(follower.value, 'y', {
    duration: 0.4,
    ease: 'power3.out',
  });
});

// smooth follow
watch([x, y], ([newX, newY]) => {
  if (setX && setY) {
    setX(newX);
    setY(newY - window.scrollY - 16);
  }
});

onUnmounted(() => {
  setX = null;
  setY = null;
});
</script>

<template>
  <div
    ref="follower"
    class="fixed top-0 left-0 z-50 pointer-events-none flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none"
  >
    {{ followerText }}
    <UIcon name="i-lucide-arrow-right" class="size-4" />
  </div>

  <UPageGrid class="lg:grid-cols-2">
    <div v-for="(card, index) in cards" :key="index" class="rounded-lg">
      <NuxtLink :to="card.to">
        <div
          class="aspect-video w-full rounded-t-lg rounded-b-sm ring-0 ring-transparent hover:ring-primary hover:ring-4 duration-300 hover:scale-95"
        >
          <div
            class="aspect-video w-full rounded-t-lg rounded-b-sm overflow-hidden isolate"
            @pointerenter="showFollower('View Case Study')"
            @pointerleave="hideFollower"
          >
            <img
              :src="card.banner"
              class="aspect-video object-cover hover:scale-110 duration-300"
            >
          </div>
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
