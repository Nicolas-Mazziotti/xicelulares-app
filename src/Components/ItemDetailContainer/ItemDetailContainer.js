import React from 'react'
import { useParams } from 'react-router-dom'
import {ProductsData} from '../../Data/ProductsData'
import ItemDetail from '../../Views/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const params = useParams()
    const itemLinkeado = ProductsData.find (item => item.id === params.id)
    console.log(itemLinkeado)
    

  return (
    <ItemDetail item={itemLinkeado}/>
  )
}

export default ItemDetailContainer