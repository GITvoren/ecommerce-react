import '../assets/css/checkout.css'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';
import pr280x250 from '../assets/images/pr280x250.png';


function CheckOut(){

     const {productId} = useParams();
     const {quantity} = useParams();
     const [name, setName] = useState("");
     const [price, setPrice] = useState(0);
     const [url, setUrl] = useState(0);
     const [totalAmount, setTotalAmount] = useState(0);
     const [errorMessage, setErrorMessage] = useState("")
     const navigate = useNavigate();


     useEffect(()=>{
          fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
          .then(res => res.json())
          .then(data => {
               setName(data.name);
               setPrice(data.price);
               setUrl(data.url);
               setTotalAmount(data.price * quantity);
          })
     })


     function PlaceOrder(){
          fetch(`${process.env.REACT_APP_API_URL}/users/checkout`, {
               method: 'POST',
               headers: {
                    'Content-type': 'Application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
               },
               body: JSON.stringify({
                    productId: productId,
                    productName: name,
                    quantity: quantity,
                    totalAmount: totalAmount
                         
               })
          })
          .then(res => res.json())
          .then(data => {
               console.log(data);
               if(data === true){
                    navigate("/ordersuccess")
               } else{
                    setErrorMessage("Admin not allowed!")
               }
          })
     }

     
     return(
          <div className="container">
               <h4 onClick={()=> navigate(-2)} className="cancel">Cancel</h4>
               {
            errorMessage 
            && 
            (<p className="erroradmin"> {errorMessage} </p>)
            }
               <div id="checkout-container">
                    <img src={url} alt="product img"></img>

                    <div className="flex-me">
                         <div className="column-me1">
                              <label>item:</label>
                              <label>price:</label>
                              <label>quantity:</label>
                              <label>Total Amount:</label>
                              
                         </div>
                         <div className="column-me2">
                              <h4> {name}</h4>
                              <h4> &#8369;{price}</h4>
                              <h4> {quantity}</h4>
                              <h4> &#8369;{price * quantity}</h4>
                         </div>          
                    </div>
                    <div>
                         <button onClick={PlaceOrder}>PROCEED</button>
                    </div>
                    
               </div>
          </div>
     )
}

export default CheckOut;