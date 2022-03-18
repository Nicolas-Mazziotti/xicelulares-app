import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { setItemInCart, getItemFromStorage, PRODUCT_KEY } from '../../Context/Helpers/localStorage';

const ItemDetail = ({item}) => {

  const { setCartItems } = useContext(CartContext);

  const addToCart = (item) => {
    setItemInCart(PRODUCT_KEY, item);
    const products = getItemFromStorage(PRODUCT_KEY);
    setCartItems(products);
  }


  return (
    <div className='CardDetailContainer'>
        <h2>{item.modelo}</h2>
        <img src= {item.img} alt={item.modelo}/>
        <p>{item.descripcion}</p>
        <a href='/cart'>
          <button
            className='btn btn-primary'
            onClick={() => addToCart(item)}
          >
            Agregar al Carrito
          </button>
        </a>
    </div>
  )
}

export default ItemDetail