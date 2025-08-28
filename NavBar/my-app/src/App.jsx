import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}
        />
        <Route path='/about' element={<About></About>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
      </Routes>
    </>
  )
}

export default App
