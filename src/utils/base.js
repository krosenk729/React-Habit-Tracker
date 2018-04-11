import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAYallzDsYqgCDGHZ55qSpWack0KJ9e0CE",
	authDomain: "habits-f5a1d.firebaseapp.com",
	databaseURL: "https://habits-f5a1d.firebaseio.com",
	projectId: "habits-f5a1d",
	storageBucket: "habits-f5a1d.appspot.com",
	messagingSenderId: "181407530859"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
export const auth = firebase.auth();
export const gAuth = new firebase.auth.GoogleAuthProvider();