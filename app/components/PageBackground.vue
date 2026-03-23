<script setup lang="ts">
import { useTemplateRef, onMounted, onUnmounted } from 'vue';
const { $gsap: gsap } = useNuxtApp();
const { x, y } = useMouse({
  type: 'page',
});

const follower = useTemplateRef<HTMLElement>('follower');

let setX: ReturnType<typeof gsap.quickTo> | null = null;
let setY: ReturnType<typeof gsap.quickTo> | null = null;

onMounted(() => {
  if (!follower.value) return;

  gsap.set(follower.value, { xPercent: -50, yPercent: -50 });

  setX = gsap.quickTo(follower.value, 'x', {
    duration: 0.6,
    ease: 'power3.out',
  });

  setY = gsap.quickTo(follower.value, 'y', {
    duration: 0.6,
    ease: 'power3.out',
  });
});

watch([x, y], ([newX, newY]) => {
  if (setX && setY) {
    setX(newX);
    setY(newY - window.scrollY);
  }
});

onUnmounted(() => {
  setX = null;
  setY = null;
});
</script>

<template>
  <div class="relative">
    <div class="fixed inset-0 -z-50 bg-shade" />
    <div class="fixed inset-0 -z-50 backdrop-blur-3xl" />
    <div class="fixed inset-0 -z-50 bg-noise" />

    <div
      ref="follower"
      class="fixed w-8 h-8 bg-white rounded-full pointer-events-none -z-50 blur-xl"
    />

    <div
      class="fixed inset-0 -z-50 pointer-events-none bg-grid"
      :style="{
        maskImage: `radial-gradient(circle 128px at ${x}px ${y}px, black 0%, transparent 100%)`,
      }"
    />
  </div>
</template>
