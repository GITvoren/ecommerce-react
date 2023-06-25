import admin from '../assets/css/admin.css'
import AdminProductCard from '../components/AdminProductCard.js'
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';


function Admin(){

     const [userCount, setUsercount] = useState();
     const [adminCount, setAdmincount] = useState();
     const [productCount, setProductcount] = useState();
     const [activeCount, setActivecount] = useState();


     useEffect(() => {
          fetch(`${process.env.REACT_APP_API_URL}/users/get/count`, {
               headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
               }
          })
          .then(res => {
               if(!res.ok)
               throw Error('Something went wrong');
               return res.json();
          })
          .then(data => {
               setUsercount(data)
          })
          .catch(err => alert(err))
     }, [])

     useEffect(() => {
          fetch(`${process.env.REACT_APP_API_URL}/users/get/count/admin`, {
               headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
               }
          })
          .then(res => {
               if(!res.ok)
               throw Error('Something went wrong');
               return res.json();
          })
          .then(data => {
               setAdmincount(data)
          })
          .catch(err => alert(err))
     }, [])

     useEffect(() => {
          fetch(`${process.env.REACT_APP_API_URL}/products/get/count/active`, {
               headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
               }
          })
          .then(res => {
               if(!res.ok)
               throw Error('Something went wrong');
               return res.json();
          })
          .then(data => {
               setActivecount(data)
          })
          .catch(err => alert(err))
     }, [])

     useEffect(() => {
          fetch(`${process.env.REACT_APP_API_URL}/products/get/count`, {
               headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
               }
          })
          .then(res => {
               if(!res.ok)
               throw Error('Something went wrong');
               return res.json();
          })
          .then(data => {
               setProductcount(data)
          })
          .catch(err => alert(err))
     }, [])

     return(
          <div className="container">
               <h1 className="admin-page-title">ADMIN DASHBOARD</h1>
               <div className="admin-product-container">
                    <div className="admin-buttons">
                    &nbsp;<Link to="/admin/addproduct"><button>ADD PRODUCT</button>&ensp;</Link>
                         <Link to="/admin/inventory"><button>VIEW ALL PRODUCTS</button>&ensp;</Link>
                         <Link to="/admin"><button>SET AN ADMIN</button>&ensp;</Link>
                         <Link to="/admin"><button>VIEW ORDERS</button></Link>
                    </div>
                    <div className="count-stats">
                         <h1>Authenticated Users: {userCount}</h1>
                         <h1>All Products: {productCount}</h1>
                         <h1>Admin Users: {adminCount}</h1>
                         <h1>Active Products: {activeCount}</h1>
                         
                    </div>
                    
                    <div className="admin-product-list">   
                    </div>
               </div>
          </div>
     )
}

export default Admin;