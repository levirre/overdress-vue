<template>
    <div class="container">
        
        <div id="searchbar">
            <input id="input" placeholder="search">   
            <span class="material-icons" id="search">search</span>
        </div>
        <div id="CardGallery"> 
            <CardComponent/>
            
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue'
export default {
    name: "CardGallery",
    components:{
        CardComponent: CardComponent
    }


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

.ruler{
    
    width: 410px;
    margin-left: .5em;

    
    
    margin-right: 1em;
    border-bottom: 3px solid goldenrod;
}

#search{
   
    font-size: 48px;
    position: relative;
    color: black;
    padding-top: 1vh;
    

}

#input{
    margin-left: 1vw;
    font-size: 24px;
    width: 24em;
    border:none;
    border-bottom: 3px solid goldenrod;
    outline: none;

}



#searchbar{
    z-index: 10;
    display: flex;
    flex-direction: row;
    margin-top: 6vh;
    margin-bottom: 1vh;
    
    
}

#CardGallery{
    height: 100%;
    width: 100%;
    background-color: seashell;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:tomato;
  border-radius: 10px;
}

</style>