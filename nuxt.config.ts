import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    privateRuntimeConfig: {
        API_SECRET: ''
    },
    publicRuntimeConfig: {
        API_BASE: '/api'
      },
    buildModules: [
        '@vueuse/nuxt',
    ],
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/scss/main.scss";',
            },
        },
    },
  },
  server: {
    port: 8080
  }
})

