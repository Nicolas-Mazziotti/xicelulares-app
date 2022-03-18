import React, { createContext, useState} from "react";
import { getItemFromStorage, PRODUCT_KEY } from "./Helpers/localStorage";

// 1 Creo el context

export const CartContext = createContext({});

//2 Creo el componente provider
export const CartProvider = ({ children }) => {
  // eslint-disable-next-line no-use-before-define
  const[cartItems, setCartItems] = useState(getItemFromStorage(PRODUCT_KEY));

//3 Retorno el CartContext con los value(funciones,etc) que serviran para toda la app
 return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
 )
}
export default CartProvider