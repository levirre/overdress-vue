<template>
    <div class="navbar">
      <div class="nav_ele" id="logo">OverDress</div>
      <ul class="nav_list">
        <li class="nav_ele">Decks <span id="triangle">▽</span></li>
      </ul>
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

.navbar{
  border-bottom: 2px solid goldenrod;
  font-size: 36px;
  height: 54px;
  position: absolute;
  width: 100%;
  
}
.nav_list{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  float: right;
  margin-right: 20vw;
  
}

.nav_list > li {
  display: inline;
 


}

#logo{
  float: left;
  margin-left: 10vw;
}

.nav_ele{
  padding-top: 8px;
  cursor: pointer;
  user-select: none;
  transition: background-color .5s ease-out 30ms;
  
}

.nav_ele:hover{
  background-color: red;
}

#triangle{
  font-size: 0.5em;
}

.container{
  display: flex;
}

</style>