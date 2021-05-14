<template>
    <div class="container">
        <div class=segment id="Deck">
            <div class="subheader">
                <span class="title">Deck</span>
                <span id="deck_count"> {{deck_count}}/{{deck_max}}</span>
                <div class="ruler"></div>
            </div>
            <div id="deck_list">
                <!--
                <div class="card">
                    <div class="material-icons card-remove">horizontal_rule</div>
                    <div class="CardGrade">3</div>
                    <div class="CardName"><span class="spanName">Hades Dragon Deity of Resentment, Gallmageheld </span> </div>
                    <div class="CardAmount">4</div>
                </div>
                <div class="card">
                    <div class="material-icons">horizontal_rule</div>
                    <div class="CardGrade">3</div>
                    <div class="CardName"><span class="spanName">Varina Valiente</span> </div>
                    <div class="CardAmount">4</div>
                </div>
                -->
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "CardDetails",
    data: function () {
        return {
            deck_count: 0,
            deck_max: 50

        }

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