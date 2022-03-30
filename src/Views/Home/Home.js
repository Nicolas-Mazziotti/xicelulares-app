import React from 'react'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'
import { Header } from '../../Components/Header/Header'
import TopProducts from '../../Components/TopProducts/TopProducts'



const Home = () => {
  return (
    <>
       <Header/>
       <TopProducts/>
       <ItemListContainer/>
       </>
  )
}

export default Home