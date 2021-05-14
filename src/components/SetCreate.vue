<template>
<h1>hello</h1>
<button :onclick="createCard"></button>
</template>

<script>
import {myMixin} from './CardAssembler.js'
export default {
    name: "SetCreate",
    data: function(){return},
    mixins:[myMixin]

    
}

console.log("hello")
</script>

<style scoped>

</style>