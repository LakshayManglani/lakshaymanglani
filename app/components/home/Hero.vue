<script setup lang="ts">
import Parallax from '../ui/Parallax.vue';
</script>

<template>
  <div class="mt-14 sm:mt-0 sm:h-[32rem] lg:h-auto lg:aspect-video lg:max-h-dvh relative">
    <UContainer class="h-full grid sm:grid-cols-2 items-center">
      <div class="sm:mt-20 lg:mt-0 order-2 sm:order-1 mt-10 relative">
        <div class="relative">
          <img src="/layers/2.png" class="absolute size-48 -bottom-12 -left-20" />
        </div>
        <p class="text-primary text-3xl sm:text-5xl lg:text-7xl font-bold">
          Website that
          <br />
          grow your brand
        </p>
        <p class="mt-6 sm:mt-8">
          Hi, I'm <span class="font-semibold text-primary">Lakshay Manglani</span>, a full-stack
          website developer based in India.
          <br />
          I help businesses build modern, fast, and user-friendly websites that leave a lasting
          impression.
        </p>
        <UButton class="mt-10 sm:mt-12 rounded-full px-12 py-4 font-bold" size="lg">
          GET IN TOUCH
        </UButton>
      </div>
      <Parallax class="order-1 sm:order-2" />
    </UContainer>
  </div>
</template>
