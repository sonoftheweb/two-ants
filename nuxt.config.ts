// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/styles.scss'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@hypernym/nuxt-anime',
    '@vueuse/nuxt',
  ],
  googleFonts: {
    families: {
      Outfit: [100, 200, 300, 400, 500],
    },
    preload: true,
  },
  anime: {
    composables: true,
  },
})