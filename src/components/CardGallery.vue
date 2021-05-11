<template>
    <div class="container">
        

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
    
    display: inline-flex;
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
    z-index: 1;

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
    
    display: inline-flex;
    flex-direction: row;
    margin-top: 2vh;
   
 

    position:absolute;
    
    
}



#CardGallery{
    height: 100vh;
    width: 100%;
    border-left: 2px solid goldenrod;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 8vh;
    padding-top:8vh;
    padding-bottom: 20vh;
    justify-content: center;
    z-index: 2;
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