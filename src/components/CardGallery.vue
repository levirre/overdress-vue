<template>
    <div class="container">
        
        <div id="searchbar">
            <input id="input" placeholder="search">   
            <span class="material-icons" id="search">search</span>
        </div>
        <div id="CardGallery"> 
            <Cards/>
            
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue'
export default {
    name: "CardGallery",
    components:{
        Cards: CardComponent
    }


}



</script>

<style scoped>
.container{
    
    width: 100%;
    height: 96vh;
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
    border-bottom: 2px solid goldenrod;
}

#search{
   
    font-size: 48px;
    position: relative;
    
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
    border-left: 2px solid goldenrod;
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
  background:whitesmoke;
  border-radius: 10px;
}

</style>