import React from 'react'
import { NavLink} from 'react-router-dom'
import "../pages/listPage.css"
const Navbar = () => {
  return (
    <div className='navbarBox'>
      <div>
        <NavLink to="/cart">Cart</NavLink>
      </div>
      <div>
        <NavLink to='/home'>Home</NavLink>
        </div>
    </div>
  )
}

export default Navbar