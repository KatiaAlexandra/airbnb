import { initializeApp } from "firebase/app"; //Inicializa firebase en nuestra aplicacion
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; 
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDuTFxkOiniYuw0UyvGT1YNrfK74yP5MOA",
    authDomain: "airbnb-1b60c.firebaseapp.com",
    projectId: "airbnb-1b60c",
    storageBucket: "airbnb-1b60c.firebasestorage.app",
    messagingSenderId: "977698800937",
    appId: "1:977698800937:web:b9d54a761e8cab2182e338"
  };

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),  //Se realiza el cambio a react native expo para ocupar el asyncstorage de expo
});
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };