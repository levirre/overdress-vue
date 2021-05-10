<template>
    <div>

   <img class ="card" :src='test'>
   <img class ="card" :src='test'>
   <img class ="card" :src='test'>
   <img class ="card" :src='test'>
   <img class ="card" :src='test'>
   <img class ="card" :src='test'>
   <img class ="card" :src='test'>
   <img class ="card" :src='test'>
   <img class ="card" :src='test'>
   <img class ="card" :src='test'>
    </div>
</template>

<script>


export default {
    name:"CardComponent",
    
    data(){
        return{
        test: require('../assets/logo.png')
        }
    }

};


</script>

<style scoped>
.card{
    margin:10px;
    min-width: 230px;
    min-height: 350px;
    max-width: 230px;
    max-height: 350px;
    
    
}
</style>
