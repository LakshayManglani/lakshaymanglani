<script setup lang="ts">
defineProps<{
  src: string;
  ui?: {
    image?: string;
    zoomImage?: string;
  };
}>();

const open = ref(false);

function toogleOpen() {
  open.value = !open.value;
}
</script>

<template>
  <UModal
    v-model:open="open"
    :close="false"
    :ui="{
      content: 'max-w-none max-h-none w-fit h-fit bg-transparent',
      body: 'w-full h-full flex items-center justify-center overflow-hidden p-0 sm:p-0',
    }"
  >
    <button class="relative w-full h-full cursor-zoom-in">
      <img :src="src" :class="ui?.image" >

      <div
        class="absolute right-1 top-1 w-6 h-6 border-2 border-accented bg-muted rounded-full hover:bg-primary hover:border-transparent duration-300"
      />
    </button>

    <template #body>
      <div class="cursor-zoom-out" @click="toogleOpen">
        <img :src="src" :class="ui?.zoomImage" class="object-contain max-w-[90vw] max-h-[80vh]" >

        <div
          class="absolute right-1 top-1 w-6 h-6 border-2 border-accented rounded-full hover:bg-primary/20"
        />
      </div>
    </template>
  </UModal>
</template>
