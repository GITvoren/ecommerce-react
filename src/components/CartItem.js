import '../assets/css/cart.css'
import {useContext, useState, useEffect} from 'react';
import CartContext from '../utilities/CartContext.js'

function CartItem({cartitemdata}){

     const {addToCart, removeFromCart} = useContext(CartContext)


     return(

          <div className="cart-item">
               <h4>{cartitemdata.name}</h4>
               <div className="image-increment-flexrow">     
                 <img src= {cartitemdata.url} />   
                    <div className="increment-div2">
                      <i className="increment-btn fa fa-minus" onClick={() => removeFromCart(cartitemdata)} ></i>
                    <input
                         onKeyDown= {function(e) {
                         e.preventDefault();
                         return false;
                         }}
                         type="number" 
                         className="quantity-btn"
                         value={cartitemdata.quantity}
                         readOnly
                         />
                         <i className="increment-btn fa fa-plus" onClick={() => addToCart(cartitemdata)} ></i>
                    </div>
               </div>
               <h4>&#8369;{cartitemdata.price * cartitemdata.quantity}</h4>
          </div>
          )

}


export default CartItem;