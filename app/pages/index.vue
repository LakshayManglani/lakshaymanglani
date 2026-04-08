<script setup lang="ts">
// defineOgImage('OgImage');

defineOgImage('Card', {
  title: 'Lakshay Manglani',
  description: 'Full Stack Developer.',
});

useSeoMeta({
  title: 'Lakshay Manglani',
  ogTitle: 'Lakshay Manglani',
  description: 'Full Stack Developer',
  ogDescription: 'Full Stack Developer',
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
