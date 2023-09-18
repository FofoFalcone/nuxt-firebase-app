import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: runtimeConfig.public.apiKey,
    authDomain: runtimeConfig.public.authDomain,
    projectId: runtimeConfig.public.projectId,
    storageBucket: runtimeConfig.public.storageBucket,
    messagingSenderId: runtimeConfig.public.messagingSenderId,
    appId: runtimeConfig.public.appId,
    measurementId: runtimeConfig.public.measurementId
  };

	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);
	const auth = getAuth(app);
	const firestore = getFirestore(app);

  nuxtApp.vueApp.provide("firebaseApp", app);
	nuxtApp.provide("firebaseApp", app);

  nuxtApp.vueApp.provide("analytics", analytics);
	nuxtApp.provide("analytics", analytics);

	nuxtApp.vueApp.provide("auth", auth);
	nuxtApp.provide("auth", auth);

	nuxtApp.vueApp.provide("firestore", firestore);
	nuxtApp.provide("firestore", firestore);
});
