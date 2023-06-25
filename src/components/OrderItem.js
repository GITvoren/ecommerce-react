import '../assets/css/checkout.css';

function OrderItem({props}){

     return(
          <div className="order-item-card">
               <div className="order-list-final">
                    <h4>{props.quantity}</h4>
                    <img src={props.image} className="order-image" />
                    <div>
                         <h4>{props.name}</h4>
                         <p>&#8369;{props.price}</p><br />
                         <div>
                              <p>Total</p>
                              <h4>&#8369;{props.price * props.quantity}</h4>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default OrderItem;