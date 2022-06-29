import React from 'react'
import { NavLink} from 'react-router-dom'
import "../pages/listPage.css"
const Navbar = () => {
  return (
    <div className='navbarBox'>
      <div>
        <NavLink to="/cart">Cart(0)</NavLink>
      </div>
      <div>
        <NavLink to='/'>Home</NavLink>
        </div>
    </div>
  )
}

export default Navbar