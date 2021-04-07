import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
firebase.initializeApp({
  apiKey: "AIzaSyBWZC9xWMKEQMuGPyncAFlaVGnHlNwnEDY",
    authDomain: "superchat-33ed4.firebaseapp.com",
    projectId: "superchat-33ed4",
    storageBucket: "superchat-33ed4.appspot.com",
    messagingSenderId: "305060583764",
    appId: "1:305060583764:web:f11e117b65ec65e718d0c1",
    measurementId: "G-45GES8K7BV"
})
export const firestore=firebase.firestore();
export const auth=firebase.auth();
export default firebase;
