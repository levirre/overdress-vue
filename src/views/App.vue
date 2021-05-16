<template>


  <div class="main">
    
    <CardDetails />
    <CardGallery />
    <FilterBar/>
  </div>


  
  
</template>

<script>
//import a component vue file, a modular html file that has an export default
//use the import above and it will load the entire imported template as html. 
//Has builtin hot reload with javascript
// https://vuejs.org/v2/guide/single-file-components.html

/*
Routing in a single file component 
where do I put routes
//how do I render a different page not in App
*/


import FilterBar from '../components/FilterBar_Right.vue'
import CardGallery from '../components/CardGallery.vue'
import CardDetails from '../components/DeskList.vue'


export default {
  name: 'App',
  components: {
    
    FilterBar,
    CardGallery,
    CardDetails,
    
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: white;
}
body{
  margin: 0;
  background-color: #353D40;
  overflow: hidden;
}

.main{
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
  height: 100vh;
  
  
}


.material-icons{
  cursor: pointer;
  color:white;
}






</style>
