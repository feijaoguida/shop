
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Shop />} path='/shop' />
        <Route element={<Cart />} path='/cart' />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers;