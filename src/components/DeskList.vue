<template>
    <div class="container">
        <div class=segment id="Deck">
            <div class="subheader">
                <span class="title">Deck</span>
                <span id="deck_count"> {{deck_count}}/{{deck_max}}</span>
                <div class="ruler"></div>
            </div>
            
            <div id="deck_list" v-for="(count,name) in deck" v-bind:key="name">
                <div @click="clickDeck" class="card">
                    <div @click="subCount(name)" class="material-icons card-remove">horizontal_rule</div>
                    <!--<div class="CardGrade">3</div> -->
                    <span class="spanName">{{name}}</span>
                    <div @click="addCount(name)" class="CardAmount">{{count}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
/*
Post submit? => counter function for each card
if 0, remove
max 4
{"NAME",COUNT}
Just read from deck{} store
Need component to render for each card in deck{} store
loop with v-for
*/
import store from '../store'
//import Deck from './Deck.vue'

export default {
    name: "CardDetails",
    components:{
        //Deck
    },
    data: function () {
        return {
            
            deck_max: 50,
            deck: store.state.deck
        }

    },
    methods:{
        
        subCount(name){
            store.subCount(name)
            console.log(store.state.deck)
            
        },
        addCount(name){
            store.addCount(name)
            console.log(store.state.deck)
        }

    },
    computed:{
        deck_count(){
            let deck_count = 0;
            for(let i in store.state.deck){
                deck_count +=store.state.deck[i]

            }
            return deck_count
            //return store.state.deck.length
        },
        
    }
}
</script>

<style scoped>


.container{
    display: flex;
    flex-direction: column;
    text-align: center;
    
    width: 16%;
    margin-top:2vh;
    font-family: 'Barlow Condensed', sans-serif;
    padding-right: 1vw;
    padding-left: 1vw;
    padding-right: 1.5vw;
    
}

#deck_list{
    width: 100%;
}

.segment{
    margin-top:1em;
    
    
    overflow: hidden;
}

.header{
    font-size: 36px;
}

.subheader{
    font-size: 32px;
     margin-bottom:1em;
    
}

#deck_count{
    float: right;
}

.title{
    float: left;
    position:relative;
    
}

.ruler{
    width: 400px;
    margin-left: .5em;
    padding-top: 40px;
    z-index: -1;
    margin-right: 1em;
    border-bottom: 2px solid goldenrod;
}

.card{
    min-width: 100%;
    min-height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size:100%;
    align-items: center;
    margin-top: 1px;
    cursor: pointer;
    
}

.CardName{
    
    width: 80%;
    min-width: 80%;
    max-width: 80%;
    min-height: 48px;
    max-height: 48px;
    opacity: 50%;
}


.spanName::before {
    opacity: 40%;
    /*background-image: url('../img/D-SD01/D-SD01-001.webp');*/
    
    background-image: url('../img/D-SD01/D-SD01-001.webp');
}

.spanName{
    background-color:slateblue;
    line-height: 3em;
    min-width: 80%;
}



.CardAmount ,.CardGrade{
    
    min-width: 16px;
    min-height: 100%;
    max-height: 100%;
}



</style>