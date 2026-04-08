import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
    },
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/content',
  ],

  eslint: {
    // options here
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger'],
    },
  },
  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
    },
  },

  site: {
    url: 'https://lakshaymanglani.com',
    name: 'Lakshay Manglani - Full Stack Developer',
  },

  ogImage: { zeroRuntime: true },

  fonts: {
    families: [{ name: 'Inter', weights: [100, 200, 300, 400, 500, 600, 700], global: true }],
  },
});
