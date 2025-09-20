<script setup lang="ts">
import { useParallax } from '@vueuse/core';
import { reactive, useTemplateRef } from 'vue';

const target = useTemplateRef<HTMLElement>('target');

const parallax = reactive(useParallax(target));
</script>

<template>
  <div ref="target" class="w-full flex flex-col justify-center duration-300 ease-out h-full">
    <div class="perspective-near mx-auto">
      <div
        class="size-48 sm:size-56 lg:size-96 border rounded-full ease-out duration-300 overflow-hidden"
        :style="{
          transform: `rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 20}deg)`,
        }"
      >
        <img
          src="/lakshaymanglani.jpg"
          class="rounded-full h-full p-4 absolute duration-300 ease-out"
          :style="{
            transform: `translateX(${parallax.tilt * 10}px) translateY(${parallax.roll * 10}px)`,
          }"
        />
      </div>
    </div>
  </div>
</template>
