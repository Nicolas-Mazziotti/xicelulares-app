import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../Context/CartContext';

const NavBar = () => {

  const { cartItems, setCartItems } = useContext(CartContext);

  return (
      <div className='NavbarContainer'>
        <Link to='/'><h2>XiCelulares</h2></Link>
          <ul className='NavbarList'>
            <Link to='/'><li>Home</li></Link>
           <Link to='/about'><li>About</li></Link>
           <Link to='/cart'><li><ShoppingCartIcon/> <span>{  
           cartItems? cartItems.length : 0}</span></li></Link>

          </ul>
      </div>

  )
}

export default NavBar