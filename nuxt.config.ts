// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Andriya Blog",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locale",
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
        dir: "ltr",
      },
      {
        code: "ar",
        iso: "ar",
        name: "Arabic",
        file: "ar.json",
        dir: "rtl",
      },
    ],
    vueI18n: "en",
  },
});
