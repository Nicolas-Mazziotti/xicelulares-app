import React from 'react'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'
import { Header } from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'



const Home = () => {
  return (
    <>
       <Header/>
       <ItemListContainer/>
       <Footer/>
       </>
  )
}

export default Home