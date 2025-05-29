import React, { useReducer } from "react";
function countReducer(state,action){
    switch (action.type){
        case "increment" : 
            return {...state,count:state.count+1}
        case "decrement" : 
            return {...state,count:state.count-1}
        case "clear":
            return {...state,count:0}
        default :
          return state
    }
}
function CounterApp(){
    let [state,dispatch] = useReducer(countReducer,{count:0})
    return (
        < div style={{backgroundColor:"white",color:"black"}}>
            <h2>Counter App Using useReducer...</h2>
            <h3>Present Count : {state.count}</h3>
            <div >
                <button style={{margin:"10px"}} onClick={()=>dispatch({type:"increment"})}>Increase Count</button>
                <button style={{margin:"10px"}} disabled={state.count<=0} onClick={()=>dispatch({type:"decrement"})}>Decrease Count</button>
                <button style={{margin:"10px"}} onClick={()=>dispatch({type:"clear"})}>Reset</button>
            </div>
            
        </div>
    )
}
export {CounterApp}