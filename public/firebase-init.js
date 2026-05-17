import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAVJfB8yBzQDkHzHK8MPnYK-jKYJCrUTCk",
  authDomain: "electro-pop-it.firebaseapp.com",
  projectId: "electro-pop-it",
  storageBucket: "electro-pop-it.firebasestorage.app",
  messagingSenderId: "647688697996",
  appId: "1:647688697996:web:66f2dbdf5c8694f6b7a3a9",
  measurementId: "G-EGWF9J7F8C"
};

const app = initializeApp(firebaseConfig);

isSupported()
  .then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  })
  .catch(() => {});
