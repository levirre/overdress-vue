<template>
<div class="container">
    <h1>hello</h1>
    <div class="test" v-for="i in init()" v-bind:key="i.i">{{i}} </div>
    <input type="checkbox" @click="push" class="ass" v-model="category" value="ass">{{category}}
    <button @click="pu" class="ass"><h1  >All</h1></button>
</div>
</template>

<script>
/*
How do I parse D-SD01.txt
ID|NAME|GRADE|NATION|TYPE|RARITY
D-BT01-001|Vairina_Valiente|3|Dragon_Empire|Persona_Ride|RRR+SP
*/
import {myMixin} from '../components/CardAssembler.js'
export default {
    name: "SetCreate",
    data(){
        return{a: [1,2,3,4,1,1],
        category:[],
        }
        
    },

    //data: function(){return},
    mixins:[myMixin],
    methods:{
        init: function(){
            
            return this.a.map(n =>n * 2); 
        },
        push: function(){return console.log(this.category)},
        pu: function(){return console.log(this.category)}
    }, 
    computed:{


    }
    //function that will return a new array based on filter selection



    
}

</script>

<style scoped>
.test{
    min-height: 100px;
    max-height: 100px;
    height: 100px;

    
}

.container{
    
    width: 100%;
    
    display: flex;
    flex-direction: column;
    font-size: 36px;
    color: sienna;
    align-items: center;
}

.ass{
    aspect-ratio: 1 /1 ;
    
    transition: background-color .5s ease-out 30ms;
}

.ass:hover{
    background-color: tomato;
}
</style>