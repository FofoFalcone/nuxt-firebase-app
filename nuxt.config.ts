// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
  ssr: true,
	runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_FIREBASE_API_KEY,
      authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NUXT_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_FIREBASE_SENDER_ID,
      appId: process.env.NUXT_FIREBASE_APP_ID,
      measurementId: process.env.NUXT_FIREBASE_ANALYTICS_ID,
    }
	},
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
		["@nuxtjs/google-fonts", {
			families: {
				Quicksand: true,
			},
      preload: true,
      display: 'swap'
		}],
	],
  pinia: {
    autoImports: [
      ['defineStore', 'definePiniaStore'],
    ],
  },
  css: ['~/assets/css/main.css'],
});
