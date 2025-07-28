// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  vite: {
    server: {
      host: 'howwedoit.test',
      port: 3000,
      hmr: {
        protocol: 'ws',
        host: 'howwedoit.test',
      },
      allowedHosts: ['howwedoit.test'],
    },
  },
  
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    autoImport: false,
  },

  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/image'],

  content: {
    highlight: {
      theme: 'github-dark',
      preload: [
        'php',
        'javascript',
        'typescript',
        'vue',
        'html',
        'css',
        'json',
      ],
    },
  },
})
