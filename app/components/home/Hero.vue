<script setup lang="ts">
import Parallax from '../ui/Parallax.vue';
</script>

<template>
  <div class="aspect-video">
    <UContainer class="h-full grid grid-cols-2 items-center">
      <div>
        <p class="text-primary text-7xl font-bold">
          Website that
          <br />
          grow your brand
        </p>
        <p class="mt-8">
          Hi, I'm <span class="font-semibold">Lakshay Manglani</span>, a full-stack website
          developer based in India.
          <br />
          I help businesses build modern, fast, and user-friendly websites that leave a lasting
          impression.
        </p>
        <UButton class="mt-12 rounded-full px-8 py-2 font-bold" size="lg">GET IN TOUCH</UButton>
      </div>
      <!-- <div class="grid justify-center">
        <div class="w-fit border rounded-full p-4">
          <div class="size-96 bg-neutral-800 rounded-full" />
        </div>
      </div> -->
      <Parallax />
    </UContainer>
  </div>
</template>
