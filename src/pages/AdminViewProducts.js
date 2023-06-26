import admin from '../assets/css/admin.css'
import AdminProductCard from '../components/AdminProductCard.js'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner.js';


function AdminViewProducts(){

     const [products, setProducts] = useState([])
     const [isLoading, setIsLoading] = useState(true)

     useEffect(() => {
          fetch(`${process.env.REACT_APP_API_URL}/products/`, {
               headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
               }
          })
          .then( res => res.json())
          .then( data => {
               setProducts(data.map(product => {
                    return(
                         <AdminProductCard key={product._id} productdata={product}/>
                    )
               }))
               setIsLoading(false)
          })
     }, [])
    
     return(
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
                    <div className="admin-product-list">
                         {products}
                    </div>
                    }
               </div>
          </div>
     )
}

export default AdminViewProducts;