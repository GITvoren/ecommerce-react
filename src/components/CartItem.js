import '../assets/css/cart.css'
import pr300x200 from '../assets/images/pr300x200.png';
import {useContext, useState, useEffect} from 'react';
import CartContext from '../utilities/CartContext.js'

function CartItem({itemdata}){
     const {name, price, _id, url} = itemdata

     const [quantity, setQuantity] = useState()
     const [subtotal, setSubtotal] = useState()
     const [isEmpty, setIsEmpty] = useState(false)

    

     useEffect(()=>{
          setQuantity(itemdata.quantity)
     }, [])

     useEffect(()=>{
          setSubtotal(quantity * price)
     },[quantity])

   


     const {items} = useContext(CartContext)

     let index= items.indexOf(itemdata)
     console.log(items)

     const addQuantity = () =>{
          if(quantity > 0)
          setQuantity(quantity + 1)
          
     }

     const subtractQuantity = () => {
          if(quantity > 0){
               setQuantity(quantity -1)
               
          }
     }

          useEffect(() => {
          if(quantity < 1){
               items.splice(index, 1)
               setIsEmpty(true)
          }
     }, [quantity])


     

     return(
          <>
          { !isEmpty && (
          <div className="cart-item">
               <h4>{name}</h4>
               <div className="image-increment-flexrow">     
                 <img src={url} alt="item-img" />   
                    <div className="increment-div2">
                      <i className="increment-btn fa fa-minus" onClick={subtractQuantity}></i>
                    <input
                         onKeyDown= {function(e) {
                         e.preventDefault();
                         return false;
                         }}
                         type="number" 
                         className="quantity-btn" 
                         value={quantity || 0}
                         onChange={e => setQuantity(e.target.value)}
                         />
                         <i className="increment-btn fa fa-plus" onClick={addQuantity}></i>
                    </div>
               </div>
               <h4>{subtotal}</h4>
               

          </div>
          )}

                                   <div className="cart-bottom">
                                        <h3>Total Amount: <span>P13212</span></h3>
                                        <div className="checkout-btn-cart">
                                             <button>CHECKOUT</button>
                                        </div>
                                   </div>
          </>
     )
}

export default CartItem;