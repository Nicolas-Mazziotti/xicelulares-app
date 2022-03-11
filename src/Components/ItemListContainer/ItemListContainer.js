//Traigo los productos y los mapeo
import { Fragment } from "react";
import {ProductsData} from "../../Data/ProductsData";
import Item from "../Item/Item";
import './ItemListContainer.css'

const ItemListContainer = () => {
    return (
        <div className="itemsContainer">
            {ProductsData.map((item) => (
                <Fragment>
                    <Item key= {item.id} item={item}></Item>
                </Fragment>
            ))}
        </div>
    )
}
export default ItemListContainer