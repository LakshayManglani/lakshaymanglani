<script setup lang="ts">
import { useParallax } from '@vueuse/core';
import { reactive, useTemplateRef } from 'vue';

const target = useTemplateRef<HTMLElement>('target');

const parallax = reactive(useParallax(target));
</script>

<template>
  <div ref="target" class="w-full h-full sm:p-8">
    <div
      class="bg-elevated rounded-b-full h-full flex flex-col justify-center border border-default p-8 sm:p-16"
    >
      <div class="perspective-near mx-auto aspect-square w-full shrink-0 max-w-96">
        <div
          class="border rounded-full ease-out duration-300 overflow-hidden h-full"
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
  </div>
</template>
