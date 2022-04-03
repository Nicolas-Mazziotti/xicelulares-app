// Pinto los productos
import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

//Me traigo la prop de ItemListContainer para pintar los productos
const Item = ({item}) => {
  return (
    <div className='itemsCard'>
     
        <img src ={item.img} alt={item.modelo} />
        <p>{item.modelo}</p>
        <p>USD{item.precio}</p>
        <Link to={`/detail/${item.id}`}>
        <button className='btn btn-primary'>Ver Detalle</button>
        </Link>
    </div>
    

    
  )
}

export default Item