import admin from '../assets/css/admin.css'
import AdminProductCard from '../components/AdminProductCard.js'
import {Link} from 'react-router-dom';


function Admin(){

     return(
          <div className="container">
               <h1 className="admin-page-title">ADMIN DASHBOARD</h1>
               <div className="admin-product-container">
                    <div className="admin-buttons">
                    &nbsp;<Link to="/admin/addproduct"><button>ADD PRODUCT</button>&ensp;</Link>
                         <Link to="/admin/inventory"><button>VIEW ALL PRODUCTS</button></Link>
                    </div>
                    <div className="admin-product-list">
                         
                    </div>
               </div>
          </div>
     )
}

export default Admin;