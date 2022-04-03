import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Views/ItemDetail/ItemDetail'
import { collection, query, where, getDocs, documentId } from 'firebase/firestore'
import { db } from '../Firebase/firebaseConfig';
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const ItemDetailContainer = () => {
    const [itemData, setItemData] = useState ([]);

    const {id} = useParams()
    console.log(id)

    useEffect(() => {
      const getItem = async () => {
        const q = query(collection(db, 'products'),where(documentId(), '==', id));
        const querySnapshot = await getDocs (q);
        const docs = []
        // console.log('data ', querySnapshot)
        querySnapshot.forEach((doc) => {
          //pusheo la data que me llego y le agrego el id que viene separado
            docs.push({...doc.data(), id: doc.id})
          // console.log(doc.data())
         
        })
        setItemData(docs)
        };
        getItem()
    }, []);

  return (
    <div className='ItemDetailContainer'>
      {itemData.map((data) =>{
        return <ItemDetail item= {data} key={data.id}/>
      })}
      </div>
  )
}

export default ItemDetailContainer