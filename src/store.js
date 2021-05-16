import { reactive } from "@vue/reactivity"

const store ={
    state: reactive({
        deck:{},
        count:0
    }),
    addCount(){
        this.state.count+=1;
    },
    subCount(){
        this.state.count-=1;
    }

}

export default store