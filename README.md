
<h3>Rendering in Vue</h3>

#

```html
<div id="counter">
    <div v-bind:style="{color: hasColor}"> test {{ card }}</div> 
</div>

<script>
    
    const RootComponent = { 
        data(){
            return{
                hasColor: "red",
                card: 10, 
            }
        }
    };
    const app = Vue.createApp(RootComponent)
    const vm = app.mount('#counter');
    console.log(Counter.data());
</script>
``` 
<p>create a const Javascript Object called called Counter with a data() function to be used by Vue. pass it to Vue.createApp() and mount it to the id tag set in html #counter</p>
<p>v-bind: can bind to any html attribute, style,src, title</p>

<h3>Components in Vue</h3>

#
https://v3.vuejs.org/guide/instance.html#creating-an-application-instance

````js
const RootComponent = {
  /* A JS object containing 
  options, data() function, for use by createApp  */
}
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')
````
mount is a Proxy handler for mutable data that will update the real html tag
<img src="https://i.imgur.com/vPGwOum.png">

# overdress-vue
## Project setup
# run \\\wsl$ to access directory
```
yarn install
```
### Compiles and hot-reloads for development
```
yarn serve
```
### Compiles and minifies for production
```
yarn build
```
### Lints and fixes files
```
yarn lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
TODO: 
    setup filter name/effect/ID
    show english effect on side
    Click Card => push to some dictionary/array => Display array in DeskList.vue
    Ability to save decklists, upload decklists, open decklists
    Library of desklists, Sharing decklists by URL
    
```
