import { useEffect, useState } from 'react'
import greencheck from '../assets/images/greencheck.png';
import { useNavigate } from 'react-router-dom';

function OrderSuccess(){
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const navigate = useNavigate();

     useEffect(() => {
          fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
               headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
               }
          })
          .then(res => res.json())
          .then(data => {
               setName(data.firstName);
               setEmail(data.email)
          })
     }, [])



     return(
          <div className="container">
               <div className="order-container">
                    <h1><img src={greencheck} alt="greencheck"></img>Order Received!</h1>

                    <h3>Thank you, <strong><big>{name}</big></strong>.</h3> 

                    <p>We confirm to have received your order. We sent the order confirmation details to your email <strong><big>{email}.</big></strong></p>

                    <h4 onClick={()=> navigate('/')}>Back to home</h4>
               </div>
          </div>
     )
}

export default OrderSuccess;