// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    autoImport: false,
  },

  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/image"],

  content: {
    highlight: {
      theme: "github-dark",
      preload: [
        "php",
        "javascript",
        "typescript",
        "vue",
        "html",
        "css",
        "json",
      ],
    },
  },
});
