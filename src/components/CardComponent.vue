<template>
<div class="container"></div>
<div class="CardContainer" v-for="card in cards" v-bind:key="card.id">
    <a :href="card.id" ><img  class="card" :src="card.img"> </a>
   
</div>
</template>

<script>


export default {
    name:"CardComponent",
    props:['card'],
    
    data(){
        return{
        cards:[
            {id:"D-SD01-001", img: require('../img/D-SD01/D-SD01-001.png')},
            {id:"D-SD01-002", img: require('../img/D-SD01/D-SD01-002.png')},
            {id:"D-SD01-003", img: require('../img/D-SD01/D-SD01-003.png')},
            {id:"D-SD01-004", img: require('../img/D-SD01/D-SD01-004.png')},
            {id:"D-SD01-005", img: require('../img/D-SD01/D-SD01-005.png')},
            {id:"D-SD01-006", img: require('../img/D-SD01/D-SD01-006.png')},
            {id:"D-SD01-007", img: require('../img/D-SD01/D-SD01-007.png')},
            {id:"D-SD01-008", img: require('../img/D-SD01/D-SD01-008.png')},
            {id:"D-SD01-009", img: require('../img/D-SD01/D-SD01-009.png')},
            {id:"D-SD01-010", img: require('../img/D-SD01/D-SD01-010.png')},
            {id:"D-SD01-011", img: require('../img/D-SD01/D-SD01-011.png')},
            {id:"D-SD01-012", img: require('../img/D-SD01/D-SD01-012.png')},
            {id:"D-SD01-013", img: require('../img/D-SD01/D-SD01-013.png')},
            {id:"D-SD01-014", img: require('../img/D-SD01/D-SD01-014.png')},
            {id:"D-SD01-015", img: require('../img/D-SD01/D-SD01-015.png')},
            
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
    transition: transform .2s;
    overflow:visible;
    z-index: 2;
    
    
    
    
    
    
}

.card:hover{
    transform: scale(1.5);
    overflow:visible;
    z-index: 2;
    
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
