<script setup lang="ts">
const { x, y } = useMouse();
</script>

<template>
  <div>
    <div>pos: {{ x }}, {{ y }}</div>
    <h1 class="text-5xl text-highlighted">Hello World!</h1>
  </div>
</template>
