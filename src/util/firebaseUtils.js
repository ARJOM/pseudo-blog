import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA66ETkghXCfTBR4_tXkZOAda1YFG14qRI",
    authDomain: "pseudo-blog.firebaseapp.com",
    databaseURL: "https://pseudo-blog.firebaseio.com",
    projectId: "pseudo-blog",
    storageBucket: "pseudo-blog.appspot.com",
    messagingSenderId: "435838994666",
    appId: "1:435838994666:web:b7bd1537d0aa085e10af93"
};
// Initialize Firebase
export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();