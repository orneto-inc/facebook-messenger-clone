import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyBNlxLlztaCpHDGf3LcXfzXHG5nbs0qeE4",
        authDomain: "fb-messenger-clone-b9465.firebaseapp.com",
        databaseURL: "https://fb-messenger-clone-b9465.firebaseio.com",
        projectId: "fb-messenger-clone-b9465",
        storageBucket: "fb-messenger-clone-b9465.appspot.com",
        messagingSenderId: "49283987695",
        appId: "1:49283987695:web:8000e01b379e6fa964831a",
        measurementId: "G-7Z90NZZ4MV"

});
const db = firebaseApp.firestore();
export default db;