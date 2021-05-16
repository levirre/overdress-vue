<template>
    <!--<div @click="counter += 1">{{counter}} {{set}} </div>-->
    <img @click="addCard" :src="cardRender(set.SET,set.ID)">
</template>

<script>
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
    }
    
}
</script>

<style scoped>

</style>