import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { getItemFromStorage, clearElementInCart, PRODUCT_KEY } from "../../Context/Helpers/localStorage";

const Cart = () => {

  const { cartItems, setCartItems } = useContext(CartContext);
  console.log('cartItems: ', cartItems);

  const clearElementInCard = (item) => {
    clearElementInCart(PRODUCT_KEY, item);
    const products = getItemFromStorage(PRODUCT_KEY);
    setCartItems(products)
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className="cart-container">
        {cartItems.map((cartItem, index) => {
          return(
            <div key={index}>
              <h4>{`Modelo: ${cartItem.modelo}`}</h4>
              <h6>{`Categoria: ${cartItem.categoria}`}</h6>
              <p>{`Precio: ${cartItem.precio}`}</p>
              <p>{`Cantidad: ${cartItem.quantity}`}</p>
              <button onClick={() => clearElementInCard(cartItem)}>Eliminar</button>
            </div>
          )
       })}
      </div>
      <button className="btn btn-primary">Finalizar Compra</button>
    </div>
  )
}

export default Cart