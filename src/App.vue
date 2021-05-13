<template>

<div class="outer"><NavBar/>
  <div class="main">
    <CardDetails />
    <CardComponent />
    <FilterBar/>

  </div>
</div>

  
  
</template>

<script>
//import a component vue file, a modular html file that has an export default
//use the import above and it will load the entire imported template as html. 
//Has builtin hot reload with javascript
// https://vuejs.org/v2/guide/single-file-components.html

import NavBar from './components/NavBar.vue'
import FilterBar from './components/FilterBar_Right.vue'
import CardComponent from './components/CardComponent.vue'
import CardDetails from './components/CardDetails.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FilterBar,
    CardComponent,
    CardDetails
    
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
  
  width: 100vw;
  
  
  

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

.outer{
  display: flex;
  flex-direction: column;
  background-color: #353D40;
}

.material-icons{
  cursor: pointer;
  color:white;
}






</style>
