import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCq42I-EpjWbH7MJ6n5myYiRKMcoGwwQVQ",
    authDomain: "facebook-clone-756f7.firebaseapp.com",
    projectId: "facebook-clone-756f7",
    storageBucket: "facebook-clone-756f7.appspot.com",
    messagingSenderId: "402782067450",
    appId: "1:402782067450:web:2c17de45cb8cb6fe7ec743",
    measurementId: "G-P8P7ZD4JG5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;