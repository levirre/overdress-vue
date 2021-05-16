/*
I want to parse csv files
D-BT01.txt
D-BT01-001|Vairina_Valiente|3|Dragon_Empire|Persona_Ride|RRR+SP

then add to firestore
how do I add the class to firestore
    SET: 
    ID: 
    NAME: 
    GRADE: 
    NATION: 
    TYPE: 
    RARITY: 

withConverter constructs data from toFirestore object
add to collection
db.collection.().doc().withConverter(cardConverter).set(card)

query collection 
db.collection("cards").where("ID", "==",1 ).get().then()

remove from collection


*/


/*
import {db} from '../firebase.js'
class Card{
    constructor(SET,ID,NAME,GRADE,NATION,TYPE,RARITY){
        this.SET= SET,
        this.ID= ID,
        this.NAME= NAME,
        this.GRADE= GRADE,
        this.NATION= NATION,
        this.TYPE= TYPE,
        this.RARITY= RARITY
    }
}


const cardConverter = {
    toFirestore: (card) => {
        return{
            SET: card.SET, 
            ID: card.ID, 
            NAME: card.NAME, 
            GRADE: card.GRADE, 
            NATION: card.NATION, 
            TYPE: card.TYPE, 
            RARITY: card.RARITY, 
        }
    }
}
*/

export const myMixin = {
    data(){
        return {counter: 0}
    },
    methods: {
        createCard: function() {
            console.log("hello from CardASsembler")
        }
    }
}
    
        
        
        //let card = new Card(1,2,1,1,1,1);
        // .doc() will be a random string to set the document name inside the collection
        // .doc("card.ID.toString()") to set doc name as card.ID
        //db.collection("cards").doc(card.ID.toString()).withConverter(cardConverter).set(new Card(1,1,1,1,1,1,1,1))



/*


*/


