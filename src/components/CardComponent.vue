<template>
<div class="CardContainer" v-for="card in cards" v-bind:key="card.id">
     
    <img  class="card" :src="card.img"> 
   
</div>
</template>

<script>


export default {
    name:"CardComponent",
    props:['card'],
    
    data(){
        return{
        cards:[
            {id:0, img: require('../assets/logo.png'), name:"Varina Valiente"},
            {id:0, img: require('../assets/logo.png'), name:"Varina Valiente"},
            {id:0, img: require('../assets/logo.png'), name:"Varina Valiente"},
            {id:0, img: require('../assets/logo.png'), name:"Varina Valiente"},
            {id:0, img: require('../assets/logo.png'), name:"Varina Valiente"},
            {id:0, img: require('../assets/logo.png'), name:"Varina Valiente"},
            {id:0, img: require('../assets/logo.png'), name:"Varina Valiente"},
            {id:0, img: require('../assets/logo.png'), name:"Varina Valiente"},
            {id:0, img: require('../assets/logo.png'), name:"Varina Valiente"},
            
        ]}
    },
    methods:{}

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
    
    
}

.CardContainer{
    margin:20px;
    min-width: 230px;
    min-height: 350px;
    max-width: 230px;
    max-height: 350px;
    font-size: 18px;
    text-align: center;
}
</style>
