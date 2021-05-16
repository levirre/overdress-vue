<template>
<div class="container">
    <div id="searchbar">
        <input id="input" v-model="search" placeholder="search">   
        <span class="material-icons" id="search">search</span>
    </div>
    
    <div id="CardGallery">    
        <keep-alive>
        <div class="CardContainer" v-for="set in filteredList" v-bind:key="set.id">
           <!--<img :src="cardRender(set.SET,set.ID)">-->
           <Card class="card" v-bind:set=set></Card>
        </div>
        </keep-alive>
    </div>

</div>

</template>

<script>
import Card from './Card.vue'
import {db} from '../firebase.js'
var cards = db.collection("cards");
import {myMixin} from './CardAssembler.js'
/*
function cardsInit(){
    cards.get().then((snapshot) => {snapshot.forEach(doc=>{
        console.log(doc.data())
    })})
}

cardsInit()
*/
export default {
    name:"CardGallery",
    mixins: [myMixin],
    components: {Card
    
    },
    
    data(){
        
        return{
        counter: 0,
        search:"",
        sets:[],
        }
        
    },
    
    created(){
        cards.get().then(snapshot =>{
            snapshot.forEach(doc => {
                const data ={
                    SET: doc.data().SET,
                    ID: doc.data().ID,
                    NAME: doc.data().NAME,
                    GRADE: doc.data().GRADE,
                    NATION: doc.data().NATION,
                    TYPE: doc.data().TYPE,
                    RARITY: doc.data().RARITY,
                }
                this.sets.push(data)
            });
            console.log(this.sets)
        })
    },
    
    computed: {
        
        filteredList(){
            // TODO: have filter search through selected field and not just name
            
            return this.sets.filter(sets => {
                return sets.NAME.toLowerCase().includes(this.search.toLowerCase())})
        }
    },
    methods:{
        

            addDeck: function(NAME){
                console.log(`hello ${NAME}`)
            }
        
    }
};
/*



*/

</script>

<style scoped>
.card{
    margin:10px;
    min-width: 230px;
    min-height: 350px;
    max-width: 230px;
    max-height: 350px;
    transition: transform .2s;
    overflow:visible;
    z-index: 2;
    
}

.card:hover{
    transform: scale(1.5);
    overflow:visible;
    z-index: 2;
    
}

.container{
    
    width: 100%;
    
    display: flex;
    flex-direction: column;
    font-size: 36px;
    color: sienna;
    align-items: center;
}

.ruler{
    
    width: 410px;
    margin-left: .5em;

    
    
    margin-right: 1em;
    border-bottom: 2px solid goldenrod;
}

#search{
   
    font-size: 36px;
    position: relative;
    
    padding-top: 1vh;
    z-index: 1;
   

}

#input{
    margin-left: 1vw;
    font-size: 24px;
    width: 24em;
    border:none;
    border-bottom: 3px solid goldenrod;
    outline: none;

}



#searchbar{
    
    display: inline-flex;
    flex-direction: row;
    margin-top: 2vh;
    
    
   
 

    position:absolute;
    
    
}



#CardGallery{
    height: 100vh;
    width: 100%;
    border-left: 2px solid goldenrod;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 8vh;
    padding-top:8vh;
    padding-bottom: 20vh;
    justify-content: center;
    z-index: 2;
    overflow-y: scroll;
    
    
}




/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:whitesmoke;
  border-radius: 10px;
}
</style>
