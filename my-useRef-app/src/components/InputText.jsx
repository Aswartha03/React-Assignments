import React, { useRef } from "react";

function FocusInput(){
    let inputRef = useRef(null)
    function handleInput(){
        console.log(inputRef.current)
        inputRef.current.focus()
        inputRef.current.style.padding = "10px"
        inputRef.current.style.fontSize = "20px"
        inputRef.current.style.margin = "10px"
        inputRef.current.style.border = "2px solid white"
        inputRef.current.style.borderRadius = "10px"
        inputRef.current.style.backgroundColor = "white"
        inputRef.current.style.color = "black"
        inputRef.current.value = "Focused!"
    }
    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Enter here...."/>
            <button onClick={handleInput}>Focus Input</button>
        </div>
    )
}
export {FocusInput}