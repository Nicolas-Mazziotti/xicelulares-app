//ItemListContainer Traigo la data de ProductsData
import { Fragment } from "react";
import {ProductsData} from "../../Data/ProductsData";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import './ItemListContainer.css'

//Mapeo los productos, agrego un identificador unico y una prop para llamarlo en Item
const ItemListContainer = () => {
    return (
        <div className="itemsContainer">
            {ProductsData.map((item) => {
                return (
                <Fragment>   
                    <Item key= {item.id} item={item}/>
                </Fragment>
                )
            })}
        </div>
    )
}
export default ItemListContainer