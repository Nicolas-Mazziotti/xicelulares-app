import React, {useContext, useState} from 'react'
import { CartContext } from '../../Context/CartContext'



const ItemDetail = ({item}) => {
  return (
    <div className='CardDetailContainer'>
        <h2>{item.modelo}</h2>
        <img src= {item.img} alt={item.modelo}/>
        <p>{item.descripcion}</p>
        <button className='btn btn-primary'> Agregar al Carrito</button>
    </div>
  )
}

export default ItemDetail