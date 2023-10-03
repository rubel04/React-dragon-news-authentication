import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDw0LUB4yh0YrrpsnqZsS1ANNrjsxHU1UY",
  authDomain: "react-dragon-news-auth-7befb.firebaseapp.com",
  projectId: "react-dragon-news-auth-7befb",
  storageBucket: "react-dragon-news-auth-7befb.appspot.com",
  messagingSenderId: "19420540141",
  appId: "1:19420540141:web:c9fc27266f535845d5f0e4",
};

const app = initializeApp(firebaseConfig);

export default app