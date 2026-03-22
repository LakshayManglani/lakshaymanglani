<script setup lang="ts">
const { x, y } = useMouse();
const el = useTemplateRef('el');

const { $gsap: gsap } = useNuxtApp();

let timeline: gsap.core.Timeline | null = null;

onMounted(() => {
  if (!el.value) return;
  timeline = gsap.timeline({ paused: true });

  timeline.to(el.value, {
    duration: 0.8,
    scale: 2,
    ease: 'power3.out',
  });
});

function onEnter() {
  if (!timeline) return;
  timeline.play();
}
function onLeave() {
  if (timeline) {
    timeline.reverse();
  }
}

onUnmounted(() => {
  if (!timeline) return;

  timeline.kill();
  timeline = null;
});
</script>

<template>
  <div class="h-dvh flex flex-col">
    <div>pos: {{ x }}, {{ y }}</div>
    <h1 class="text-5xl text-highlighted">Hello World!</h1>
    <div class="flex-1 bg-blue-400 flex items-center justify-center">
      <div
        ref="el"
        class="bg-red-500 h-40 w-40 rounded-full"
        @mouseenter="onEnter"
        @mouseleave="onLeave"
      />
    </div>
  </div>
</template>
