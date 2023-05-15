import {createContext, useState} from 'react';

const CartContext = createContext();

export function CartProvider({children}){

          const [cartItems, setCartItems] = useState([])


 
          const addToCart = (product) => {
               const ProductExist = cartItems.find((item) => item._id === product._id);
               if(ProductExist){
                    setCartItems(cartItems.map((item) =>
                    item._id === product._id ?
                    {...ProductExist, quantity: ProductExist.quantity + 1}: item))

                    
               } else {
                    setCartItems([...cartItems, {...product, quantity: 1}])
                    
               }
          }

          
          const removeFromCart = (product) => {
               const ProductExist = cartItems.find((item) => item._id === product._id);
               if(ProductExist.quantity === 1){
                    setCartItems(cartItems.filter((item) => item._id !== product._id));
               } else {
                    setCartItems(
                         cartItems.map((item) => item._id === product._id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item )
                    )
               }
          }



          return(
               <CartContext.Provider value={{setCartItems, cartItems, addToCart, removeFromCart}}>
                    {children}
               </CartContext.Provider>
          )
     }




export default CartContext;