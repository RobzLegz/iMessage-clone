import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBwlVKJR9HIBJGxPqg1GLuRqMEY2KtWS5E",
    authDomain: "imessage-clone-6a3f3.firebaseapp.com",
    projectId: "imessage-clone-6a3f3",
    storageBucket: "imessage-clone-6a3f3.appspot.com",
    messagingSenderId: "788440267385",
    appId: "1:788440267385:web:c3657b13fbc6f7fb38f2a8",
    measurementId: "G-V7BWM3B91F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;