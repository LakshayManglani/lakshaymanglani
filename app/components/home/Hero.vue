<script setup lang="ts">
import Parallax from '../ui/Parallax.vue';
</script>

<template>
  <div class="mt-20 lg:mt-0 lg:aspect-video lg:max-h-dvh">
    <UContainer class="h-full grid sm:grid-cols-2 items-center">
      <div class="order-2 sm:order-1 mt-10 sm:mt-0">
        <p class="text-primary text-3xl sm:text-5xl lg:text-7xl font-bold">
          Website that
          <br />
          grow your brand
        </p>
        <p class="mt-6 sm:mt-8">
          Hi, I'm <span class="font-semibold">Lakshay Manglani</span>, a full-stack website
          developer based in India.
          <br />
          I help businesses build modern, fast, and user-friendly websites that leave a lasting
          impression.
        </p>
        <UButton class="mt-10 sm:mt-12 rounded-full px-8 py-2 font-bold" size="lg"
          >GET IN TOUCH</UButton
        >
      </div>
      <Parallax class="order-1 sm:order-2" />
    </UContainer>
  </div>
</template>
