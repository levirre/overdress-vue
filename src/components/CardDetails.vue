<template>
    <div class="container">
        <div class=segment id="Deck">
            <div class="subheader">
                <span class="title">Deck</span>
                <span id="deck_count"> {{deck_count}}/{{deck_max}}</span>
                <div class="ruler"></div>
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
    width: 15%;
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

</style>