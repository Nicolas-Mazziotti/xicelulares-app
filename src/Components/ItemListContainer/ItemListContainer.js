//ItemListContainer Traigo la data de ProductsData
import {ProductsData} from "../../Data/ProductsData";
import Item from "../Item/Item";
import './ItemListContainer.css'

//Mapeo los productos, agrego un identificador unico y una prop para llamarlo en Item
const ItemListContainer = (topProducts) => {
  return (
    <div className="itemsContainer">
      {ProductsData.map(item => {
          return <Item key= {item.id} item={item}/>
      })}
    </div>
  )
}
export default ItemListContainer