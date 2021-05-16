import { reactive } from "@vue/reactivity"

const store ={
    
    state: reactive({
        deck:{},
        count:0
    }),
    subCount(name){
        const min = 0;
        const max = 4;
        const num = this.state.deck[name]
        this.state.deck[name] = Math.min(Math.max(num -1,min),max)
        if(this.state.deck[name] == min){
            delete this.state.deck[name]
        }
        
    },
    addCount(name){
        const min = 0;
        const max = 4;
        const num = this.state.deck[name]
        this.state.deck[name] = Math.min(Math.max(num +1,min),max)
    }

}

export default store