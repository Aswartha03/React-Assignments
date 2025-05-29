import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { DisplaySnacks } from './components/DisplaySnaks'
import { FormInput } from './components/FormInput'
function App() {

  return (
    <>
    <Navbar/>
      <FormInput/>
      <DisplaySnacks/>
    </>
  )
}

export default App
