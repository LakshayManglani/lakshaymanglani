<script setup lang="ts">
// defineOgImage('OgImage');

defineOgImage('Card', {
  title: 'Lakshay Manglani',
  description: 'Full-Stack Developer — Vue, Nuxt & Node.js.',
});

useSeoMeta({
  title: 'Lakshay Manglani — Full-Stack Developer (Vue, Nuxt, Node.js)',
  ogTitle: 'Lakshay Manglani — Full-Stack Developer (Vue, Nuxt, Node.js)',
  description:
    'Full-stack developer specializing in Vue and Nuxt, with production experience in React, Node.js, Fastify, and Docker. Portfolio and case studies.',
  ogDescription:
    'Full-stack developer specializing in Vue and Nuxt, with production experience in React, Node.js, Fastify, and Docker.',
});
</script>

<template>
  <div>
    <HomeHero />
    <HomeProjects />
    <HomeWorkExperience />
    <HomeSkills />
    <HomeAbout />
    <HomeContact />
  </div>
</template>
