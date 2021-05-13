import { firebase} from '@firebase/app'
// Required for side-effects
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBk8r_vQt76tPfPBh3BrCQwlP2FlnHvVRk",
    authDomain: "imouto-efe37.firebaseapp.com",
    databaseURL: "https://imouto-efe37.firebaseio.com",
    projectId: "imouto-efe37",
    storageBucket: "imouto-efe37.appspot.com",
    messagingSenderId: "556969340680",
    appId: "1:556969340680:web:cdfeede4a48c906b1b06bd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

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