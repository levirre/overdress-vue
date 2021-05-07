<template>
    <div class="navbar">
    <div class="Logo">OVERDRESS</div>
    <div class="Decks">Decks ▽</div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data: function(){
        return{
            logo: "logo.png"
        }
    },
    props: {
        
        Dropdown: String
    }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.Cards > img{
  width: 200px;
  height: 320px;
}

.navbar{
    padding: 1em;
    background-color: #42b983;
    width: 100vmax;
    margin: 0;
    overflow: hidden;
    
}

.navbar > * {
    display: inline;
    margin-left: 1em;
    margin-right: 1em;
    font-size: 2em;
    
    background-color: antiquewhite;
    position:relative;
    
    
}

.Decks{
    height: 100vh;
    background-color: red;
}





.Logo {
    float: left;
    font-style: italic;
    font-size: 2.5em;
    

    
}

</style>