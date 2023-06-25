import '../assets/css/categories.css'
import pexelsbag from '../assets/images/pexelsbag.png'
import pexelscamera3 from '../assets/images/pexelscamera3.png'
import pexelswallet from '../assets/images/pexelswallet.png'
import unsplashwatches from '../assets/images/unsplashwatches.png'
import {Link} from 'react-router-dom';



function Categories(){
     return(
          <div className="categories-container">
              <Link to="/products?categories=648602a3fc9ab15f65c87bba"> <div>
                    <img src={pexelsbag} alt="bags" />
                    <h2>EXPLORE BAGS<i className='fa fa-arrow-right'></i></h2>
               </div></Link>
               <Link to="/products?categories=648602acfc9ab15f65c87bbe">
               <div>
                    <img src={pexelscamera3} alt="camera" />
                    <h2>EXPLORE CAMERAS<i className='fa fa-arrow-right'></i></h2>
               </div>
               </Link>
               <Link to="/products?categories=648602a8fc9ab15f65c87bbc">
               <div>
                    <img src={pexelswallet} alt="wallets" />
                    <h2>EXPLORE WALLETS<i className='fa fa-arrow-right'></i></h2>
               </div>
               </Link>
               <Link to="/products?categories=648602b8fc9ab15f65c87bc0">
               <div>
                    <img src={unsplashwatches} alt="watches" />
                    <h2>EXPLORE WATCHES<i className='fa fa-arrow-right'></i></h2>
               </div>
               </Link>
          </div>
     )
}

export default Categories;