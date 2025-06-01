import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login,logout } from "../redux/actions/authActions";
function AuthComponent(){
    let auth = useSelector((state)=>state.auth.isActivated)
    let dispatch = useDispatch()

    return (
        <>
            <h3>Simple Auth App Using Redux...</h3>
            <p>{auth ? "True" :"Fasle"}</p>
            <h4>{auth ? "Logged IN" : "Logged Off" } </h4>
            <button onClick={(auth)=> auth?dispatch(logout()) : dispatch(login())}>Toggle </button>
        </>
    )
}
export default AuthComponent