import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductLayout = () => {
  return (
    <div>
        <h3>orange</h3>
        <Outlet/>
    </div>
  )
}

export default ProductLayout