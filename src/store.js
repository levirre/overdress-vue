import { reactive } from "@vue/reactivity"
import {db} from './firebase'
const snapshot = db.collection('cards').get();
const store ={
    
    state: reactive({
        deck:{},
        decksize: 0,
        init_count:3,
        cardsdb: snapshot
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
        
    },
    addCard(name){
        const init_count = 4;
        
        this.state.deck[`"${name}"`] = init_count
        
    },
    getdeckSize(){
        return this.state.decksize
    }

}

export default store