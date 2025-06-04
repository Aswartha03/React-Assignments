// import { store } from "./store"
import logger from "redux-logger"



let delayMiddleware = (store)=>(next)=>(action)=>{

    if(action.type === "ASYNC_INCREMENT"){
        setTimeout(()=>{
            store.dispatch({type:"INCREMENT"})
        },1500)
    }
    else if(action.type === "ASYNC_DECREMENT"){
        setTimeout(()=>{
            store.dispatch({type:"DECREMENT"})
        },2000)
    }
    
    else next(action)  
}
export {logger,delayMiddleware}