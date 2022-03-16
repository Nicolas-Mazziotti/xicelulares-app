import React, { createContext, useState} from "react";

// 1 Creo el context

export const CartContext = createContext ();

//2 Creo el componente provider
export const CartProvider = ({children}) => {
    const[cartItems, setCartItems] = useState ()

    const addItem = () => {
        console.log ('Añadido')
    }



//3 Retorno el CartContext con los value(funciones,etc) que serviran para toda la app
 return (
     <CartContext.Provider value= {[cartItems, setCartItems, addItem]}>
         {children}
     </CartContext.Provider>
 )
}
export default CartProvider