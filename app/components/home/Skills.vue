<script setup lang="ts">
const activeIndex = ref(0);

function onSelect(index: number) {
  activeIndex.value = index;
}

const items = ['Frontend', 'Backend', 'Infrastructure'] as const;
type Item = (typeof items)[number];

const stackItems: Record<
  Item,
  {
    label: string;
    icon: string;
    invert?: boolean;
  }[]
> = {
  Frontend: [
    {
      label: 'TypeScript',
      icon: 'devicon:typescript',
    },
    {
      label: 'React',
      icon: 'devicon:react',
    },
    {
      label: 'Vue',
      icon: 'devicon:vuejs',
    },
  ],
  Backend: [
    {
      label: 'Node.js',
      icon: 'devicon:nodejs',
    },
    {
      label: 'Express',
      icon: 'devicon:express',
      invert: true,
    },
    {
      label: 'Fastify',
      icon: 'devicon:fastify',

      invert: true,
    },
  ],
  Infrastructure: [
    {
      label: 'Linux',
      icon: 'devicon:linux',
    },
    {
      label: 'Docker',
      icon: 'devicon:docker',
    },
    {
      label: 'Nginx',
      icon: 'devicon:nginx',
    },
  ],
};

const loopItems = [];

for (let i = 0; i < 256; i++) {
  for (const item of items) {
    loopItems.push(item);
  }
}

const currentItem = computed(() => {
  return items[(activeIndex.value ?? 0) % items.length];
});

const currentStack = computed(() => {
  return stackItems[currentItem.value ?? 'Frontend'];
});
</script>

<template>
  <div class="pb-32">
    <div class="relative">
      <HomeSkillsBackground />

      <div class="absolute inset-0 flex justify-center items-center text-center">
        <UCarousel
          v-slot="{ item, index }"
          :items="loopItems"
          loop
          :autoplay="{ delay: 4000 }"
          class-names
          class="w-full h-full justify-center items-center"
          :ui="{
            viewport: 'h-full',
            container: 'h-full',
            item: 'basis-1/2 md:basis-1/3 transition-all duration-700 my-auto',
          }"
          @select="onSelect"
        >
          <div class="relative">
            <!-- Active Blur -->
            <!-- <div -->
            <!--   :class="{ -->
            <!--     'opacity-0': activeIndex !== index, -->
            <!--     'text-highlighted font-bold blur-xl text-2xl md:text-5xl': activeIndex === index, -->
            <!--   }" -->
            <!--   class="absolute mx-auto inset-0" -->
            <!-- > -->
            <!--   {{ item }} -->
            <!-- </div> -->

            <div
              :class="{
                'text-muted': activeIndex !== index,
                'text-highlighted font-bold text-2xl md:text-5xl': activeIndex === index,
              }"
            >
              {{ item }}
            </div>
          </div>
        </UCarousel>
      </div>

      <HomeSkillsBackgroundBorder />
    </div>

    <ul class="flex gap-4 md:gap-8 justify-center items-center flex-wrap px-4 mt-8">
      <li v-for="(item, index) in currentStack" :key="index">
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
      </li>
    </ul>
  </div>
</template>
