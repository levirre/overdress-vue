<template>
    <!--<div @click="counter += 1">{{counter}} {{set}} </div>-->
    <img @click="increment" :src="cardRender(set.SET,set.ID)">
</template>

<script>
import store from '../store'

export default {
    name: 'Card',
    props:["set"],
    data(){
        return{
            counter: 4
        }
    },
    methods:{
        addCard: function(){
            
            console.log(`Card Added ${this.$props.set.NAME} ${this.counter}`)
        },
        cardRender: function(SET,ID){
            return require(`../img/${SET}/${ID}.webp`)
        },
        increment(){
            store.state.deck[`"${this.$props.set.NAME}"`] = this.counter
            console.log(store.state.deck)
            //access amount with store.state.deck[`"${this.$props.set.NAME}"`] to match key to value
            //console.log(store.state.deck[`"${this.$props.set.NAME}"`])
        }
    }
    
}
</script>

<style scoped>

</style>