import {createContext, useState} from 'react';

const CartContext = createContext();

export function CartProvider({children}){
     const [items, setItems] = useState([]);


     const addToCart = (name, price, _id, quantity, url) => {
          setItems((prevState) => {
               return(
                    [...prevState, { name, price, _id, quantity, url }]
               )
          })
     }
     return(
          <CartContext.Provider value={{items, addToCart}}>
               {children}
          </CartContext.Provider>
     )
}



export default CartContext;