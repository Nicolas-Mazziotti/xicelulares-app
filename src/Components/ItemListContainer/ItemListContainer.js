//ItemListContainer Traigo la data de ProductsData
import {useState, useEffect} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import Item from "../Item/Item";
import './ItemListContainer.css'

//Mapeo los productos, agrego un identificador unico y una prop para llamarlo en Item
const ItemListContainer = () => {
  const [items, setItems] = useState ([])
      console.log(items)
    useEffect(() => {
      const getItems = async () => {
        const q = query(collection(db, 'products'), where('categoria', '==', 'celular'));
        const querySnapshot = await getDocs (q);
        const docs = []
        // console.log('data ', querySnapshot)
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
          // console.log(doc.data())
         
        })
        setItems(docs)
        };
        getItems()
    }, []);
  return (
    <div className="itemsContainer">
      {items.map(item => {
          return <Item key= {item.id} item={item}/>
      })}
    </div>
  )
}
export default ItemListContainer