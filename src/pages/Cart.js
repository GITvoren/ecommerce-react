import '../assets/css/cart.css'
import CartContext from '../utilities/CartContext.js'
import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import CartItem from '../components/CartItem.js'



function Cart(){
     const {item} = useContext(CartContext);
     const navigate = useNavigate();



     return(
                    <div className="modal2">
                    <div className="overlay2" onClick = {()=> navigate(-1)}></div>  
                         <div className="cart-container">
                         <i className="cart-close fa fa-times" onClick={() => navigate(-1)} />
                              <h2>Total items in Cart ({item})</h2>
                              <br />
                                   <div className="cart-itemlist">
                                        <CartItem/>
                                        <CartItem/>
                                   </div>
                                   <br /><br /><br /><br /><br /><br /><br />
                                   <div className="cart-bottom">
                                        <h3>Total Amount: <span>P13212</span></h3>
                                        <div className="checkout-btn-cart">
                                             <button>CHECKOUT</button>
                                        </div>
                                   </div>
                         </div>
                    </div>
                 
                    
     
              
     )
}




export default Cart;