import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner.js';
import { useState, useEffect } from 'react';
import admin from '../assets/css/admin.css';
import OrderCard from '../components/OrderCard.js';




function AdminViewOrders(){
     const [isLoading, setIsLoading] = useState(true);
     const [orders, setOrders] = useState([]);

     useEffect(() => {
          fetch(`${process.env.REACT_APP_API_URL}/orders`, {
               headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
               }
          })

          .then(res => {
               if(!res.ok)
               throw Error("Fetch Error");

               return res.json();
          })
          .then(data => {
               setIsLoading(false);
               setOrders(data);
          })
          .catch(err => alert(err));

     }, [])


     return(
          <div>
               <div className="container">
               <h1 className="admin-page-title">ADMIN DASHBOARD</h1>
               <div className="admin-product-container">
              
                    <div className="admin-buttons">
                    &nbsp;<Link to="/admin/addproduct"><button>ADD PRODUCT</button>&ensp;</Link>
                      <Link to="/admin/inventory"><button>VIEW ALL PRODUCTS</button>&ensp;</Link>
                      <Link to="/admin"><button>SET AN ADMIN</button>&ensp;</Link>
                      <Link to="/admin/orders"><button>VIEW ORDERS</button></Link>
                    </div>
                    {
                    (isLoading)
                    ?
                    <Spinner />
                    :
                    <div className="order-card-list">
                         {
                              orders.map(order => (
                                   <OrderCard props={order} />
                              ))
                         }
                    </div>
                    }
                    
   
               </div>
          </div>
          </div>
     )
}

export default AdminViewOrders;