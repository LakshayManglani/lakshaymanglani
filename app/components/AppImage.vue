<script setup lang="ts">
defineProps<{
  src: string;
  ui?: {
    image?: string;
    zoomImage?: string;
  };
}>();
</script>

<template>
  <UModal
    :close="false"
    :ui="{
      content: 'max-w-none max-h-none w-fit h-fit',
      body: 'w-full h-full flex items-center justify-center overflow-hidden',
    }"
  >
    <button class="w-full h-full cursor-zoom-in">
      <img :src="src" :class="ui?.image" >
    </button>

    <template #body>
      <img :src="src" :class="ui?.zoomImage" class="object-contain max-w-[90vw] max-h-[80vh]" >
    </template>
  </UModal>
</template>
