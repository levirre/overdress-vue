import {createApp } from 'vue'
import Sandbox from './sandbox.vue'
import router from './router'


createApp(Sandbox).use(router).mount('#app')
