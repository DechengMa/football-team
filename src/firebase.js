import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
	apiKey: 'AIzaSyBJBZ19yVP9aq5eqXnpJwE2B7SJdJFZ5m4',
	authDomain: 'm-city-849db.firebaseapp.com',
	databaseURL: 'https://m-city-849db.firebaseio.com',
	projectId: 'm-city-849db',
	storageBucket: 'm-city-849db.appspot.com',
	messagingSenderId: '665518916975'
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
	firebase,
	firebaseMatches,
	firebasePromotions,
	firebaseTeams,
	firebaseDB,
	firebasePlayers
};
