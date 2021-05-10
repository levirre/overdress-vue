<template>
    <div class="container">
        <div class=segment id="Deck">
            <div class="subheader">
                <span class="title">Deck</span>
                <span id="deck_count"> {{deck_count}}/{{deck_max}}</span>
                <div class="ruler"></div>
            </div>
            <div id="deck_list">
                <div class="card">
                    <div class="CardGrade">3</div>
                    <div class="CardName">Hades Dragon Deity of Resentment, Gallmageheld </div>
                    <div class="CardAmount">4</div>
                </div>
                                <div class="card">
                    <div class="CardGrade">3</div>
                    <div class="CardName">Hades Dragon Deity of Resentment, Gallmageheld </div>
                    <div class="CardAmount">4</div>
                </div>
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
    background-color: blanchedalmond;
    width: 20%;
    margin-top:2vh;
    font-family: 'Barlow Condensed', sans-serif;
    padding-right: 2em;
    padding-left: 2em;
    
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
    border-bottom: 3px solid goldenrod;
}

.card{
    min-width: 100%;
    background-color: silver;
    min-height: 2.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    align-items: center;
    margin-bottom: .1em;
    

    
}

.CardGrade{
    float:left;
    min-width: 2.5em;
    height: 100%;
    
    
    
    
}

.CardName{
    
    padding-left: .5em;
    padding-right: .5em;
    
    align-items: center;
    
}

.CardAmount{
    
    min-width: 2.5em;
    height: 100%;
    
    
}

</style>