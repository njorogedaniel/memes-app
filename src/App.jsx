import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import './style.css'
import Header from './components/Header'
import Memes from './components/Memes'
import Reaction from './components/Reaction'
function App() {
  

  return (
    <div className='container'>
      <Header />
      <Memes />
      <Reaction /> 
    </div>
  )
}

export default App
