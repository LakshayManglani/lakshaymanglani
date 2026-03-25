<template>
  <div class="relative w-fit">
    <div class="absolute inset-0 rounded-[inherit]">
      <div class="absolute rounded-[inherit] inset-0 backdrop-blur-md overflow-hidden" />

      <div
        class="absolute rounded-[inherit] inset-0 m-px bg-shade-2 drop-shadow-white dark:drop-shadow-black drop-shadow-[0_-2px_8px]"
      />

      <!-- <div class="absolute rounded-[inherit] inset-0 opacity-50 bg-shade-2 m-px" /> -->

      <div class="absolute rounded-[inherit] inset-0 blend-border mix-blend-overlay" />
    </div>

    <div class="relative">
      <slot />
    </div>

    <div v-if="$slots.title || $slots.description" class="relative p-4">
      <p class="text-highlighted">
        <slot name="title" />
      </p>
      <p class="text-muted">
        <slot name="description" />
      </p>
    </div>
  </div>
</template>
