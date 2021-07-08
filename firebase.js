import firebase from 'firebase'

const config = {
	apiKey: 'AIzaSyCITKvR4Bq7VTTekE7RNQyyRNnrSAnjnpc',
	authDomain: 'zebu1-d2131.firebaseapp.com',
	projectId: 'zebu1-d2131',
	storageBucket: 'zebu1-d2131.appspot.com',
	messagingSenderId: '201799176792',
	appId: '1:201799176792:web:a782462ef3b6e49cc5b02d',
}

if (!firebase.apps.length) {
	firebase.initializeApp(config)
} else {
	firebase.app() // if already initialized, use that one
}

export default firebase
