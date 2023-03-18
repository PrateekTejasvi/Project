import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';                                                                   
const firebaseConfig = {
  apiKey: "AIzaSyBz38gbx9w4DWZ3wy5QO40tVkuClp_J4Pg",
  authDomain: "bubble-up-d69b3.firebaseapp.com",
  projectId: "bubble-up-d69b3",
  storageBucket: "bubble-up-d69b3.appspot.com",
  messagingSenderId: "731894158405",
  appId: "1:731894158405:web:25ce049503793faa05ff2c"
};
let app; 
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}                                     
else{
  app = firebase.app();
}                     

const db = app.firestore(); 
const auth = firebase.auth();

export {db,auth};