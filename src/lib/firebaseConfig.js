import { initializeApp,getApp,getApps} from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_FIREBASE_APP_ID,
  measurementId: import.meta.env.REACT_FIREBASE_MEASUREMENT_ID
};

const app = !getApp().length?initializeApp(firebaseConfig) : getApp();
export const firebaseDB = getAnalytics(app);