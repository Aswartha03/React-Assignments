import { useState } from "react";

import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Concact } from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import { Navber } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { Error } from "./components/Error";
// different components on different pages
function App() {
  return (
    <>
    <Navber/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/concact" element={<Concact />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
