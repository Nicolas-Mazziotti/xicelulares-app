// Pinto los productos
import React from 'react'

const Item = ({item}) => {
  return (
    <div className='ItemsCard'>
        <img src ={item.img} alt={item.modelo} />
        <p>{item.modelo}</p>
        <p>{item.precio}</p>
    </div>
  )
}

export default Item