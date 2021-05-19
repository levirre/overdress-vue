import { firebase} from '@firebase/app'
//import {credentials} from '../credentials.js'

var credentials = require('../credentials.json')
// Required for side-effects
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
  // Initialize Firebase
firebase.initializeApp(credentials);
console.log("how often am I called")
var db = firebase.firestore();
db.enablePersistence()
    .catch((err) =>{
        if (err.code == 'failed-precondition'){
            console.log('Multiple tabs open, persistence can only be enabledin one tab at a a time.')
        } else if (err.code == 'unimplemented'){
            console.log('The current browser does not support persistence')
        } else {
            console.log('offline persistence enabled')
        }
    })
    
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