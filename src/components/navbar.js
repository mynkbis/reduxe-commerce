import React from 'react'
import { NavLink} from 'react-router-dom'
import './navbar.css'
import { useSelector } from 'react-redux'

const Navbar = () => {
  
  const{cartTotalQuantity}=useSelector((state)=>state.cart)

// console.log('from navbar cart', cart)
  return (
    <div className='navbarBox'>
      <div>
        <NavLink to="/cart">S.Cart ({cartTotalQuantity})</NavLink>
      </div>
      <div>
        <NavLink to='/'>Home</NavLink>
        </div>
    </div>
  )
}

export default Navbar 