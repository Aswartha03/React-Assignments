import React from "react";
import { Link } from "react-router-dom";

function Navber() {
  return (
    <nav>
      <Link style={{margin:"10px"}} to="/home">Home</Link>
      <Link style={{margin:"10px"}} to="/about">About</Link>
      <Link style={{margin:"10px"}} to="/concact">Concact</Link>
    </nav>
  );
}
export { Navber };
