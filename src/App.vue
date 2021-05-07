<template>
<NavBar Dropdown="Dropdown"/>

  
  
</template>

<script>
//import a component vue file, a modular html file that has an export default
//use the import above and it will load the entire imported template as html. 
//Has builtin hot reload with javascript
// https://vuejs.org/v2/guide/single-file-components.html
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
body{
  margin: 0;
}

</style>
