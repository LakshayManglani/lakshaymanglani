<script setup lang="ts">
import Hero from '~/components/home/Hero.vue';
</script>

<template>
  <div>
    <Hero />

    <div class="relative py-32">
      <div class="container mx-auto px-6 lg:px-12">
        <!-- Heading -->
        <h2 class="text-4xl font-bold mb-6 text-center text-primary">About Me</h2>

        <div class="flex gap-4 lg:gap-16 justify-center text-lg sm:text-2xl flex-wrap text-muted">
          <div class="flex gap-2 items-center">
            <UIcon name="i-heroicons-star-20-solid" />
            <p>Web Development</p>
          </div>

          <div class="flex gap-2 items-center">
            <UIcon name="i-heroicons-star-20-solid" />
            <p>UI/UX Design</p>
          </div>
        </div>

        <!-- About Text -->
        <div class="max-w-3xl mx-auto sm:text-center text-lg leading-relaxed mb-12 mt-18">
          <p class="mb-4">
            I'm a passionate
            <span class="font-semibold text-primary">Full-Stack Web Developer</span> based in India,
            specializing in building modern, user-friendly, and scalable digital experiences.
          </p>
          <p>
            As a freelancer, I enjoy tackling new challenges, solving real-world problems, and
            transforming creative ideas into impactful solutions.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-8 max-w-md mx-auto text-primary">
          <div
            class="backdrop-blur rounded-2xl p-6 text-center shadow-md border border-transparent hover:border-accented duration-300 hover:scale-110"
          >
            <h3 class="text-3xl font-bold">4+</h3>
            <p class="text-sm uppercase tracking-wide opacity-80">Clients</p>
          </div>
          <div
            class="backdrop-blur rounded-2xl p-6 text-center shadow-md border border-transparent hover:border-accented duration-300 hover:scale-110"
          >
            <h3 class="text-3xl font-bold">8+</h3>
            <p class="text-sm uppercase tracking-wide opacity-80">Projects</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
