
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Shop from './pages/Shop'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Shop />} path='/shop' />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers;