// eslint-disable-next-line no-unused-vars
const initailValue=0

function CounterReducer(state=initailValue,action){
    if(action.type=="INCREMENT"){
        return state+1
    }
    if(action.type=="DECREMENT"){
        return state-1
    }
return state
}

export default CounterReducer;