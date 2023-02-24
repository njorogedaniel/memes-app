import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import './style.css'
import Header from './components/Header'
import Content from './components/Content'
import Reaction from './components/Reaction'
function App() {
  

  return (
    <div className='container'>
      <Header />
      <Content />
      <Reaction liked={true} />
      
    </div>
  )
}

export default App
