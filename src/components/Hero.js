import '../assets/css/hero.css'
import {Link} from 'react-router-dom';


function Hero(){
     return(
          <div className="hero-wrapper">
               <div className="hero-text">
                    <h1>LOREM IPSUM DOLOR SIT AMET</h1>
                    <h2>CONSECTETUR, ADIPISICING ELIT</h2>
                    <Link to="/products"><button className="hero-btn">SHOP NOW</button></Link>
               </div>
          </div>
     )
}

export default Hero;