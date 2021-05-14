<template>
    <div class="container">
        
        <div class=segment id="Filter">
        <div class="header">Filters</div>
        </div>
        <div class=segment id="Name">
            <div class="subheader">
                <span class="material-icons" id="sort">sort</span>
                <span class="subheader">Name</span>
                <span class="material-icons" id="dropdown">keyboard_arrow_down</span>
            </div>
            
            
        </div>
        <div class="segment" id="Set">
            <div class="subheader">
                <span class="title">Set</span>
                <div class="ruler"></div>
            </div>
        </div>
        
        <div class=segment id="Nation">
            <div class="subheader">
                <span class="title">Nation</span>
                <div class="ruler"></div>
            </div>
            <div id="NationList">
                <div class="NationName" id="Keter">Keter Sanctuary</div>
                <div class="NationName" id="Dragon">Dragon Empire</div>
                <div class="NationName" id="Brandt">Brandt Gate</div>
                <div class="NationName" id="Dark">Dark States</div>
                <div class="NationName" id="Stoi">Stoicheia</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "FilterBar",
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
    padding-left: 1em;
    height: 100%;
    width: 12%;
    
    color: white;
    font-family: 'Barlow Condensed', sans-serif;
    padding-right: 2em;
    
}

#Filter{
    
    height: 15%;
    width: 100%;
}
.segment{
    margin-top:1em;
    
    overflow: hidden;
}

.subheader, .header{
    text-align: center;
}

#Name{
    
    height: 10%;
    width: 100%;
}

#Set{
    width: 100%;
    height: 30%;
    
}





#Deck{
    background-color:peachpuff;
    height: 90%;
    width: 100%;
    
}

#deck_count{
    float: right;
}

.header{
    font-size: 36px;
}

.subheader{
    font-size: 32px;
    
}

.material-icons{
    
    font-size:36px; 
}



#sort{
    float: left;
    padding-top: 4px;
    
}

#dropdown{
    float: right;
    padding-top: 4px;
}

.title{
    float: left;
    position:relative;
    
}

.ruler{
    width: 400px;
    margin-left: .5em;
    padding-top: 40px;
    
    margin-right: 1em;
    border-bottom: 2px solid goldenrod;
}

#Nation{
    
    height: 60%;
    width: 100%;

    
}

#NationList{
    font-size: 24px;
    
    
    padding-top: .2em;
    padding-left: 5%;
}

.NationName{
    padding-top: 2px;
    text-align: right;
    
    color: white;
    padding-left: 5%;
    padding-bottom: 12px;
}

#Keter{
    color:gold
}

#Dragon{
    color:tomato
}

#Brandt{
    color:ivory
}

#Dark{
    color: #40A9F5;
}

#Stoi{
    color: greenyellow;
}


</style>