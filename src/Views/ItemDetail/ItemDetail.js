import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { setItemInCart, getItemFromStorage, PRODUCT_KEY } from '../../Helpers/localStorage';
import './ItemDetail.css'

const ItemDetail = ({item}) => {

  const { setCartItems } = useContext(CartContext);
  //funcion onclick
  const addToCart = (item) => {
    setItemInCart(PRODUCT_KEY, item);
    const products = getItemFromStorage(PRODUCT_KEY);
    setCartItems(products);
  }


  return (
    <div className='CardDetailContainer'>
        <div className='itemModelo'>
        <h2>{item.modelo}</h2>
        <img src= {item.img} alt={item.modelo}/>
        </div>
        <div className='itemDescripcion'>
        <p>{item.descripcion}</p>
          <button
            className='btn btn-primary'
            onClick={() => addToCart(item)}
          >
            Agregar al Carrito
          </button>
        </div>
    </div>
  )
}

export default ItemDetail