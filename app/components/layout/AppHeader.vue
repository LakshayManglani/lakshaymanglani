<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useWindowScroll } from '@vueuse/core';

const headerRef = ref<HTMLElement | null>(null);
const { y } = useWindowScroll();

const headerHeight = ref(56);
const offset = ref(0);
const lastY = ref(0);

onMounted(() => {
  headerHeight.value = headerRef.value?.offsetHeight ?? headerHeight.value;
  lastY.value = y.value;
});

watch(y, (newY) => {
  const delta = newY - lastY.value;

  lastY.value = newY;

  offset.value = Math.min(Math.max(offset.value + delta, 0), headerHeight.value);
});
</script>

<template>
  <header
    ref="headerRef"
    class="fixed z-50 top-0 left-0 right-0 h-14 border-b border-default bg-default/80 backdrop-blur-2xl"
    :style="{
      transform: `translateY(-${offset}px)`,
      willChange: 'transform',
    }"
  >
    <UContainer class="h-full grid items-center justify-center">
      <p>Header</p>
    </UContainer>
  </header>
</template>
