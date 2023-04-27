import '../assets/css/hero.css'
import {Link} from 'react-router-dom';


function Hero(){
     return(
          <div className="hero-wrapper">
               <div className="hero-text">
                    <h1>GET READY FOR ADVENTURE</h1>
                    <h2>GEAR UP WITH OUR PRODUCTS</h2>
                    <Link to="/products"><button className="hero-btn">SHOP NOW</button></Link>
               </div>
          </div>
     )
}

export default Hero;