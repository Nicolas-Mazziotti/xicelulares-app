
import React from 'react'

const ItemDetail = ({item}) => {
  const addItem = () =>{
    alert ('Se ha agregado al carrito')
  }
  return (
    <div className='CardDetailContainer'>
        <h2>{item.modelo}</h2>
        <img src= {item.img} alt={item.modelo}/>
        <button className='btn btn-primary' onClick={addItem}> Agregar al Carrito</button>
        <p>{item.descripcion}</p>
    </div>
  )
}

export default ItemDetail