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
                <div class="NationName">Keter Sanctuary</div>
                <div class="NationName">Dragon Empire</div>
                <div class="NationName">Brandt Gate</div>
                <div class="NationName">Dark States</div>
                <div class="NationName">Stoicheia</div>
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
    
    
    width: 15vw;
    
    font-family: 'Barlow Condensed', sans-serif;
    padding-right: 2em;
    
}

#Filter{
    
    height: 15%;
    width: 100%;
}
.segment{
    margin-top:1em;
    z-index: -2;
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
    height: 60%;
    background-color: whitesmoke;
}

#Nation{
    background-color:lavender;
    height: 60%;
    width: 100%;
    
}

#NationList{
    font-size: 24px;
    
    
    padding-top: .2em;
    padding-left: 30%;
}

.NationName{
    padding-top: 2px;
    text-align: left;
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
    z-index: -1;
    margin-right: 1em;
    border-bottom: 3px solid goldenrod;
}


</style>