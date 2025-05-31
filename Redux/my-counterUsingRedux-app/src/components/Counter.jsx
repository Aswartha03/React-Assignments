import React ,{getState} from "react";
import {useSelector,useDispatch} from "react-redux"
import { increment,decrement } from "../redux/actions";

function Counter(){
    let count = useSelector((state)=>state.count)
    let dispatch = useDispatch()
    return (
        <>
        <h3>Simple Counter App Using Redux ..</h3>
        <h2> Present Count : {count}</h2>
        <button style={{margin:"10px"}} onClick={()=>dispatch(increment())}>Increase</button>
        <button disabled={count<=0} onClick={()=>dispatch(decrement())}>Decrease</button>
        </>
    )
}
export {Counter}