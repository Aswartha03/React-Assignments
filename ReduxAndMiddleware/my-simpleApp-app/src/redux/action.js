export let increment = ()=>{
    return ({type:"INCREMENT"})
}
export let decrement = ()=>{
    return ({type:"DECREMENT"})
} 
export let asyncIncrement = ()=>{
    return ({type:"ASYNC_INCREMENT"})
} 
export let asyncDecrement = ()=>{
    return ({type:"ASYNC_DECREMENT"})
} 