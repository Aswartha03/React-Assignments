import React, { useReducer } from "react";
function toggleReducer(state,action){
    switch(action.type){
        case "black" :
            return {...state,theme:"white",flag:false}
        case "white" : 
            return {...state,theme:"black",flag:true}
        default : 
        return {state}
    }
}
function ToggleApp(){
    let [state,dispatch] = useReducer(toggleReducer,{theme:"white",flag:true})
    function toggleTheme(){
        if(state.flag){
            dispatch({type:"black"})
        }
        else {
            dispatch({type:"white"})
        }
    }
    return (
        <>
            <div>
                <h3 style={{fontSize:"25px",color:state.theme}}>Theme Changing Using useReducer..</h3>
                <p style={{color:state.theme}}>Current Theme : {state.theme}</p>
                <button onClick={toggleTheme}>Change Theme</button>
            </div>
        </>
    )
}
export {ToggleApp}