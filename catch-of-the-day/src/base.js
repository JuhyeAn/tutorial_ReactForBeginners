import Rebase from 're-base'; // React Firebase specific package
import firebase from 'firebase/app';
import 'firebase/database';


const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyD4bfGRRSq8fO5ULdhpasANxmZ07Y22Qnw",
        authDomain: "catch-of-the-day-jhan.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-jhan.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;