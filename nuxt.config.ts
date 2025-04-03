// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-27',
  nitro: {
    prerender: {
      routes: [
        '/series/s2021/notes/1',
        '/series/g2021/notes/5',
        '/series/g2021/notes/10',
        '/series/g2021/notes/20',
        '/series/g2021/notes/50',
        '/series/g2021/notes/100',
        '/series/s2017a/notes/1',
        '/series/s2017a/notes/2',
        '/series/g2017a/notes/5',
        '/series/g2017a/notes/10',
        '/series/g2017a/notes/20',
        '/series/g2017a/notes/50',
        '/series/g2017a/notes/100',
        '/series/s2017/notes/1',
        '/series/g2013/notes/50',
      ],
    },
  },
})
