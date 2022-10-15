import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Cart from './pages/Cart'
import Category from './pages/Category'
import Home from './pages/Home'
import Product from './pages/Product'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='category/:id' element={<Category />} />
        <Route path='product/:id' element={<Product />} />
        <Route path='cart' element={<Cart />} />
    </Routes>
  )
}

export default Routing