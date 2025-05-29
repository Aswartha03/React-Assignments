import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    let navigate = useNavigate()
    function handleHome(){
        // alert("Redirect to Home")
        navigate("/about")
    }
  return (
    <div>
      <h2>Landing page...</h2>
      <button onClick={handleHome}>Home Page</button>
    </div>
  );
}
export { LandingPage };
