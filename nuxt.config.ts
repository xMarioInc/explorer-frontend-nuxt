// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt-alt/proxy',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  build: {
    transpile: ['echarts'],
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  proxy: {
    debug: true,
    experimental: {
      listener: true
    },
    proxies: {
      "/api": {
        target: `https://explorer.obyte.org`,
      },
      "/socket.io": {
        target: `https://explorer.obyte.org`,
      },
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/index.css'],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  }
})