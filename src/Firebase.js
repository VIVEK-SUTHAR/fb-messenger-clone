import fs from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseApp = fs.initializeApp({
    //Write Your configuration Here From Firebase SDK And Configuartion File
    apiKey: "AIzaSyDCZYkHLC1rTO1WwWhW2CHjJ9aHvc-RMEM",
    authDomain: "fb-messenger-clone-273c4.firebaseapp.com",
    projectId: "fb-messenger-clone-273c4",
    storageBucket: "fb-messenger-clone-273c4.appspot.com",
    messagingSenderId: "534291169333",
    appId: "1:534291169333:web:f8159d768c16ecdfecb17c"

});

const db = firebaseApp.firestore();
export default db;