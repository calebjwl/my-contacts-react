import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD3AQJv1zGznmS234VKU3encoGK9xSqh8s",
  databaseURL: "https://mycontacts-react.firebaseio.com",
};

firebase.initializeApp(config);

const rootRef = firebase.database().ref();
export const contactsRef = rootRef.child('contacts');
