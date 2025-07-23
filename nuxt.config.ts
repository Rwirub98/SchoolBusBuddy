// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['../assets/style.css'],
   app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css'
        }
      ]
    }
  }
})
