// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  nitro: {
    preset: "github_pages",
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    buildAssetsDir: "assets",
    baseURL: "/",
    head: {
      title: "Ivan Seleznov - Portfolio",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&family=JetBrains+Mono&display=swap",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "Ivan Seleznov's personal portfolio website showcasing projects and skills.",
          
        },
        {
          name: "google-site-verification",
          content:"Dw-GE7Ya5VyqvIZQW713tnuEU8MaaC7hN8Pyq1EU7Ow",
        }
      ],
    },
  },
});
