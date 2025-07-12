import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from '../components/User'
import Product from '../components/Product'
import Home from '../components/Home'

const Routing = () => {

  return (
    <>
    <Routes>
        <Route path='/users' element={<User />}/>
        <Route path='/products' element={<Product />}/>
        <Route path='/home' element={<Home />}/>
    </Routes>
    </>
  )
}

export default Routing