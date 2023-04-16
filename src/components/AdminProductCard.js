import '../assets/css/admin.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function AdminProductCard({productdata}){
    
    /*  console.log(productdata) */
     const {name, description, price, _id, isActive} = productdata
     return(
          <div className="admin-product-card">
               <div>
                    <div>
                         <label className="console-label">_id:</label><br/>
                         <span className="console-string">'{_id}'</span>
                    </div>   
                    <div>
                         <label className="console-label">name:</label><br/>
                         <span className="console-string">'{name}'</span>
                    </div>
                    <div>
                         <label className="console-label">isActive: </label><br/>
                         <span className="console-notstring">{isActive.toString()}</span>
                    </div>
                    <div>
                         <label className="console-label">description:</label><br/>
                         <span className="console-string">
                         '{description}'
                         </span>
                         
                    </div>  
                    <div>
                         <label className="console-label">price:</label><br/>
                         <span className="console-notstring">{price}</span>
                    </div>          
               </div>
               <div>
               <Link to={`/admin/inventory/${_id}`}><button className="admin-product-btn">&nbsp;&nbsp;&nbsp;&nbsp;EDIT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></Link>
                    <Link to={`/admin/inventory/${_id}/archive`}><button className="admin-product-btn">&nbsp;ARCHIVE&#8202;&#8202;</button></Link>
                    <Link to={`/admin/inventory/${_id}/activate`}><button className="admin-product-btn">ACTIVATE</button></Link>
                   
               </div>
          </div>
     )
}

AdminProductCard.propTypes = {
     product: PropTypes.shape({
         name: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired,
         price: PropTypes.number.isRequired,
         isActive: PropTypes.bool.isRequired,
         _id: PropTypes.string.isRequired
     })
 }
 

export default AdminProductCard;