import '../assets/css/checkout.css';
import { useEffect, useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OrderItem from '../components/OrderItem.js';
import CartContext from '../utilities/CartContext.js';
import UserContext from '../utilities/UserContext.js';
import { toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function CheckOut(){

     const navigate = useNavigate();
     const {cartItems, setCartItems} = useContext(CartContext);
     const {user} = useContext(UserContext);
     const totalPrice = cartItems.reduce((price, item) => price + (item.quantity * item.price), 0);

     const [address1, setAddress1] = useState("");
     const [address2, setAddress2] = useState("");
     const [city, setCity] = useState("");
     const [province, setProvince] = useState("");
     const [country, setCountry] = useState("");
     const [payment, setPayment] = useState("");
     const [shipmentAddress, setShipmentAddress] = useState("");

     useEffect(() => {
          setShipmentAddress(`${address1} ${address2}, ${city}, ${province} ${country}`);
     }, [address1, address2, city, province, country])

     const notifyerror = (data) => toast.error(data, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
     
     const placeOrder = async (e) => {
          e.preventDefault();

          if(country == "")
          return notifyerror("Please specify Country")

          if(city == "")
          return notifyerror("Please specify City")

          if(province == "")
          return notifyerror("Please specify Province")

          if(cartItems.length == 0)
          return notifyerror("Order list is empty!")

          try{
               const result = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
               },
               body: JSON.stringify({
                    orderItems: cartItems,
                    totalAmount: totalPrice,
                    orderedBy: user.id,
                    shipmentAddress: shipmentAddress,
                    paymentMethod: payment
               })
          });

               const data = await result.json();
               if(!result.ok){
                    notifyerror(data);
               } else{
                    setCartItems([]);
                    navigate('/ordersuccess');
               }

          }catch{
               notifyerror('Fetch Error');
          }  
     }

     return(
          <div className="container">
               <h1 className="checkout-header">Checkout</h1><br/><br />
               <h3 className="cancel-order1"><Link to="/products" className="cancel-order"> Cancel Order</Link></h3>
               <div className="divide">
                    <div>
                         <div className="ship-address">
                              <h2>Shipping Address</h2>
                              <div>
                                   <label htmlFor="address1">Street Address</label>
                                   <input type="text"
                                   id="address1"
                                   placeholder="Purok / Barangay / Street"
                                   value={address1}
                                   onChange={e => setAddress1(e.target.value)} 
                                   />
                                   <h6>&nbsp;</h6>
                                   <input type="text"
                                   placeholder="House No. / Bldg. / floor, etc."
                                   value= {address2}
                                   onChange= {e => setAddress2(e.target.value)} 
                                   />
                              </div>
                              <div>
                                   <label htmlFor="city">City</label>
                                   <input type="text"
                                   id="city"
                                   value={city}
                                   onChange={e => setCity(e.target.value)}
                                   />
                              </div>
                              <div>
                                   <label htmlFor="province">Province</label>
                                   <input type="text"
                                   id="province"
                                   value={province}
                                   onChange={e => setProvince(e.target.value)}
                                   />
                              </div>
                              <div>
                                   <label htmlFor="province">Country</label><br />
                                   <select id="country" value={country} onChange={e => setCountry(e.target.value)}>
                                        <option selected disabled value=""> Select a Country</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Vietnam">Vietnam</option>   
                                   </select>
                              </div>       
                         </div>
                         <div className="payment-methods">
                              <h2>Payment Method</h2>
                              <div className="radio" onChange={e => setPayment(e.target.value)}>
                                   <div>
                                        <input type="radio" id="cash" name="payment-option" value="cash" />
                                        <label htmlFor="cash">Cash</label>
                                   </div>
                                   <div>
                                        <input type="radio" id="gcash" name="payment-option" value="gcash" />
                                        <label htmlFor="gcash"><img src="/images/gcash.png" className="gcash-logo" /></label>
                                   </div>  
                              </div>
                         </div>
                    </div>
                    <div className="review-orderitems">
                         <h2>Review Order Items</h2>
                         <div className="order-item-list">
                              {
                                   cartItems.map(cartItem => {
                                        return <OrderItem key= {cartItem._id} props = {cartItem} />
                                   })
                              }
                              
                              <button className="order-btn" onClick={placeOrder}>PLACE ORDER</button>     
                         </div>
                         <hr className="hr-order"/>
                         <div className="order-calc">
                              <div>
                                   <p>Subtotal (before delivery fee):</p>
                                   <p>Delivery Fee:</p> 
                                   <h3>Order Total:</h3> 
                              </div>
                              <div>
                                   <h4>&#8369;{totalPrice}</h4>
                                   <p className="delivery">FREE</p> 
                                   <h3>&#8369;{totalPrice}</h3> 
                              </div>
                         </div> 
                    </div>
               </div>
          </div>
     )
}

export default CheckOut;