import React from 'react'
import { Outlet } from 'react-router-dom'

const R_side = () => {
  return (
    <div><h2>My Shop</h2>
    <Outlet></Outlet>
    </div>
  )
}

export default R_side