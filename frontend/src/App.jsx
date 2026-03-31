import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import News from './Pages/News'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>

    <div className='max-w-350 border-4 m-auto mt-7.5'>
      
         <Navbar/>   


          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/menu' element={<Menu/>}/>

          </Routes>

          
         <Footer/>
 
    </div>

    </BrowserRouter>
  )
}

export default App