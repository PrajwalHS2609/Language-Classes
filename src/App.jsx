import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import "./Global.css"
import HomePage from './Components/Homepage/HomePage'
const App = () => {
  return (
    <div className='appContainer'>
      <NavBar/>
      <HomePage/>
    </div>
  )
}

export default App
