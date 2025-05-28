import React, { useReducer } from "react";
function toggleVisiblity(state,action){
    switch (action.type){
        case "false":
            return {...state,isVisible:false}
        case "true" : 
            return {...state,isVisible:true}
        default : 
            return state
    }
}
function ToggleData(){
    let [state,dispatch] = useReducer(toggleVisiblity,{isVisible:false})
    function handleToggle(){
        if(state.isVisible){
            dispatch({type:"false"})
            // console.log(state.isVisible)
        }
        else {
            dispatch({type:"true"})
            // console.log(state.isVisible)
        }
    }
    return (
        <div>
            {state.isVisible==true && <h3 >Hello World!</h3>}
            <button onClick={handleToggle}>Toggle Message</button>
        </div>
    )
}
export {ToggleData}