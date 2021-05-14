<template>
<div class="container">
    <h1>hello</h1>
    <button class="ass"><h1  :onclick="createCard">Console</h1></button>
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
    //data: function(){return},
    mixins:[myMixin]

    
}

</script>

<style scoped>
.container{
    
    width: 100%;
    
    display: flex;
    flex-direction: column;
    font-size: 36px;
    color: sienna;
    align-items: center;
}

.ass{
    
    height: 100%;
    transition: background-color .5s ease-out 30ms;
}

.ass:hover{
    background-color: tomato;
}
</style>