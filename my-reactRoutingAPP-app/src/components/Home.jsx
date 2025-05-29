import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate()
    function handleChange(){
        navigate("/")
    }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleChange}>Loading Page</button>
    </div>
  );
}
export { Home };
