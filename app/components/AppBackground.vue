<script setup lang="ts">
import { useTemplateRef, onMounted, onUnmounted } from 'vue';
const { $gsap: gsap } = useNuxtApp();
const { x, y } = useMouse({
  type: 'page',
});

const follower = useTemplateRef<HTMLElement>('follower');

let setX: ReturnType<typeof gsap.quickTo> | null = null;
let setY: ReturnType<typeof gsap.quickTo> | null = null;
let timeout: ReturnType<typeof setTimeout> | null = null;
const isVisible = ref(false);

const showFollower = () => {
  if (!follower.value) return;

  if (!isVisible.value) {
    isVisible.value = true;
    gsap.to(follower.value, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  }

  // Reset the hide timer
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(hideFollower, 1000);
};

const hideFollower = () => {
  if (!follower.value) return;

  isVisible.value = false;
  gsap.to(follower.value, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.out',
  });
};

// Watch mouse movement
watch([x, y], () => {
  showFollower();
});

onMounted(() => {
  if (!follower.value) return;

  gsap.set(follower.value, { xPercent: -50, yPercent: -50, opacity: 0 });

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
  if (timeout) clearTimeout(timeout);
  setX = null;
  setY = null;
});
</script>

<template>
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute inset-0 bg-shade" />
    <div class="absolute inset-0 bg-noise mix-blend-overlay bg-default opacity-20" />
    <div ref="follower" class="w-8 h-8 opacity-0">
      <div class="absolute inset-0 rounded-full bg-primary blur-xl" />
      <div class="absolute inset-0 bg-primary rounded-full blur-xs" />
    </div>

    <div
      class="absolute inset-0 bg-grid"
      :style="{
        maskImage: `radial-gradient(circle 128px at ${x}px ${y}px, black, transparent)`,
      }"
    />
  </div>
</template>
