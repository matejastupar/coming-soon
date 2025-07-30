// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/scripts"],
  scripts: {
    registry: {
      umamiAnalytics: {
        websiteId: '3c2e72a0-843c-47d8-b6a2-4108b1726164',
        scriptInput: {
          src: 'https://umami.weblossom.dev/script.js'
        }
      }
    }
  }
});
