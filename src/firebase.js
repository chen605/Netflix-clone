import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1sDjCGJVfgMgjCpfCZIVYOSRsNHH9new",
  authDomain: "netflix-clone-363e9.firebaseapp.com",
  projectId: "netflix-clone-363e9",
  storageBucket: "netflix-clone-363e9.appspot.com",
  messagingSenderId: "532261235045",
  appId: "1:532261235045:web:72cc5e7614f283e3b7d98c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
