<template>
<div class="card">
    <div class="material-icons card-remove">horizontal_rule</div>
    <div class="CardGrade">3</div>
    <div class="CardName"><span class="spanName">Hades Dragon Deity of Resentment, Gallmageheld </span> </div>
    <div class="CardAmount">4</div>
</div>
</template>

<script>
import store from '../store'

export default {
    name:"Deck",
    data: function(){
        return {
            deck: store.state.deck
        }
    },
    methods:{},

}
</script>

<style scoped>

.card{
    min-width: 100%;
    min-height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
    align-items: center;
    margin-bottom: .1em;
    cursor: pointer;
}

.CardName{
    background-color: silver;
    
    min-width: 80%;
    max-width: 80%;
    min-height: 48px;
    max-height: 48px;
    
    
}
.CardAmount ,.CardGrade{
    
    min-width: 16px;
    min-height: 100%;
    max-height: 100%;
}



</style>