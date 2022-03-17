import fs from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseApp = fs.initializeApp({
    //Write Your configuration Here From Firebase SDK And Configuartion File
});

const db = firebaseApp.firestore();
export default db;