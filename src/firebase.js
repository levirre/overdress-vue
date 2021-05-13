import { firebase} from '@firebase/app'
import {credentials} from '../credentials.js'
// Required for side-effects
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
  // Initialize Firebase
  firebase.initializeApp(credentials);

var db = firebase.firestore();
/*
db.collection("cards/decks/D-SD01").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        cards.push(console.log(doc.data()));
        //console.log(`${doc.id} => ${doc.data().ID}`);
    });
});
*/

export {
    db
};