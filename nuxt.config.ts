// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    baseURL: "/https://github.com/developertroll/my-nuxt-study/",
    buildAssetsDir: "assets",
  },
  devtools: { enabled: true },
  build: {
    transpile: [
      "vuetify",
      "@fortawesome/fontawesome-svg-core",
      "@forrtawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
