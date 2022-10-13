import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Category from './pages/Category'
import Home from './pages/Home'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='category/:id' element={<Category />} />
    </Routes>
  )
}

export default Routing