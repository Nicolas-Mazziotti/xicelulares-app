import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'



const ItemDetail = ({item}) => {

  const [addItem] = useContext (CartContext)
  

  return (
    <div className='CardDetailContainer'>
        <h2>{item.modelo}</h2>
        <img src= {item.img} alt={item.modelo}/>
        <button className='btn btn-primary'> Agregar al Carrito</button>
        <p>{item.descripcion}</p>
    </div>
  )
}

export default ItemDetail