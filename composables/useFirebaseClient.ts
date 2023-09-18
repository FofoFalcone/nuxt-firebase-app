import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

export default function useFirebaseClient() {
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  return { app, auth, firestore };
}
