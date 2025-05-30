import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { DisplaySnacks } from './components/DisplaySnaks'
import { FormInput } from './components/FormInput'
import {Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
    {/* <Navbar/>
    <Routes>
      <Route path="/displaypage" element={<DisplaySnacks/>}/>
      <Route path="/create" element={<FormInput/>}/>
    </Routes> */}
    
    <FormInput/>
    <DisplaySnacks/> 
    </>
  )
}

export default App
