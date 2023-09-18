import { getApps, initializeApp, cert } from "firebase-admin/app";
import { ServiceAccount } from 'firebase-admin';
import firebaseServerConfig from '../service-account.json';

export default function useFirebaseServer() {
  let app;
  if (getApps().length === 0) {
    app = initializeApp({
      credential: cert(firebaseServerConfig as ServiceAccount)
    });
  }
  return {
    app
  };
}
