import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "utak-ff6ed.firebaseapp.com",
  databaseURL: "https://utak-ff6ed-default-rtdb.firebaseio.com",
  projectId: "utak-ff6ed",
  storageBucket: "utak-ff6ed.appspot.com",
  messagingSenderId: "278362137101",
  appId: "1:278362137101:web:96172712c9dd990e486b44",
  measurementId: "G-NHNTBWTNC3",
});
