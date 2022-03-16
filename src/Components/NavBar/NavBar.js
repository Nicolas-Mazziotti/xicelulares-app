import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'



const NavBar = () => {
  return (
      <div className='NavbarContainer'>
        <Link to='/'><h2>XiCelulares</h2></Link>
          <ul className='NavbarList'>
            <Link to='/'><li>Home</li></Link>
           <Link to='/about'><li>About</li></Link>

          </ul>
      </div>

  )
}

export default NavBar