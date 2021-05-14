<template>
  <div class="outer">
    <NavBar/>
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
export default {
    name: "Sandbox",
    components: {
      NavBar,
    }
}
/*
use router-link to load urls
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/App">App</router-link>

They will renter in the <router-view/> above
*/
</script>
<style scoped>
.outer{
  display: flex;
  flex-direction: column;
  background-color: #353D40;
}

</style>

