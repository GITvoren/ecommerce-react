import admin from '../assets/css/admin.css';




function OrderCard({props}){

     const{
          _id, orderItems, orderedBy, 
          paymentMethod, shipmentAddress, status, 
          totalAmount, dateOrdered

     } = props

     return(
          <div className="order-card">
               <div className="divide2">
                    <div>
                         <div>
                              <label className="console-label">_id:</label><br/>
                              <span className="console-string">'{_id}'</span>
                         </div>   
                         <div>
                              <label className="console-label">orderedBy:</label><br/>
                              <span className="console-string">'{orderedBy.email}'</span>
                         </div>
                         <div>
                              <label className="console-label">status: </label><br/>
                              <span className="console-string">'{status}'</span>
                         </div>
                    </div>
                    <div>
                         <div>
                              <label className="console-label">dateOrdered:</label><br/>
                              <span className="console-string">'{dateOrdered}'</span>
                         </div>   
                         <div>
                              <label className="console-label">paymentMethod:</label><br/>
                              <span className="console-string">'{paymentMethod}'</span>
                         </div>
                         <div>
                              <label className="console-label">shipmentAddress: </label><br/>
                              <span className="console-string">'{shipmentAddress}'</span>
                         </div>
                         <div>
                              <label className="console-label">orderTotal: </label><br/>
                              <span className="console-notstring">{totalAmount}</span>
                         </div>      
                    </div>
               </div>
               <label className="console-label">orderItems: </label>
               <div className="orderitem-list">
                    {
                         orderItems.map(orderItem => (
                              <div key={orderItem._id}>
                                   <div>
                                        <label className="console-label">name: </label><br/>
                                        <span className="console-string">'{orderItem.product.name}'</span>
                                   </div>
                                   <div>
                                        <label className="console-label">price: </label><br/>
                                        <span className="console-notstring">{orderItem.product.price}</span>
                                   </div>
                                   <div>
                                        <label className="console-label">quantity: </label><br/>
                                        <span className="console-notstring">{orderItem.quantity}</span>
                                   </div>
                              </div>
                         ))
                    }
               </div>   
          </div>
     )
}

export default OrderCard;