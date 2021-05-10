<template>
    <div class="container">
        
        <div id="searchbar">
            <input id="input" v-model="message" placeholder="edit me">   
            <span class="material-icons" id="search">search</span>
        </div>
        <div id="CardGallery">

        </div>
        
            
             
        



        

    </div>
</template>

<script>
export default {
    name: "CardGallery"
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
    margin-top: 10vh;
    
    
}

#CardGallery{
    height: 100%;
    width: 100%;
    background-color: seashell;
}

</style>