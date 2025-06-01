import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment,decrement,reset} from "../redux/actions/counterActions"
function CounterComponent(){
    let count = useSelector((state)=>state.counter.count)
    let dispatch = useDispatch()
    return (
        <>
            <h3>Simple Counter Using Redux</h3>
            <h4>Present Count : {count}</h4>  
            <button style={{margin:"10px"}} onClick={()=>dispatch(increment())}>Increase</button>
            <button  disabled={count<=0} style={{margin:"10px"}} onClick={()=>dispatch(decrement())}>Decrease</button>
            <button style={{margin:"10px"}} onClick={()=>dispatch(reset())}>Reset</button>
        </>
    ) 
}
export default CounterComponent