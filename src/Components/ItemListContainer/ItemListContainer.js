//Traigo los productos, los mapeo y los pongo en el Home
import {ProductsData} from "../../Data/ProductsData";
import './ItemListContainer.css'

const ItemListContainer = () => {
    return (
        <div className="itemsContainer">
            {ProductsData.map((item) => (
                <div className="itemsCard">
                <img src={item.img} alt={item.modelo} />
                <p>{item.modelo}</p>
                <p>{item.precio}</p>
                </div>
            ))}
        </div>
    )
}
export default ItemListContainer