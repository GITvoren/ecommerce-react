import navbar from '../assets/css/navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useRef, useContext } from 'react';
import UserContext from '../utilities/UserContext.js';



function AppNavbar(){

     const { user } = useContext(UserContext)
     const ref = useRef(null);
     const ref2 = useRef(null);
     const location = useLocation()
     let Toggled = false
     
     const toggle = (e) =>{
          e.preventDefault()
          const navList = ref.current
          const toggleBtn = ref2.current
          if(Toggled){
               navList.style.top= '-200%'
               toggleBtn.classList.toggle('fa-bars')
               Toggled= false;
               toggleBtn.classList.toggle('fa-times')
     
          } else{
               navList.style.top= '11%';
               toggleBtn.classList.toggle('fa-times')
               Toggled= true
               toggleBtn.classList.toggle('fa-bars')
          }
     };


     return(
          
          <nav>
               <ul>
                    <div>
                     <Link to="/"><img src={logo} className="nav-logo" alt="logo"></img></Link>
                     
                    </div>
                    
                   
                    <div ref={ref}>
                    
                         <li><Link to ="/" className="nav-list">HOME</Link></li>
                         <li><Link to="/products" className="nav-list">PRODUCTS</Link></li>
                         <li><Link to="/contact" className="nav-list">CONTACT</Link></li>
                         <li><Link to="/about" className="nav-list">ABOUT</Link></li>
                         
                        
                    </div>
            
                    
                    <div>
                    {
                         ((user.id !== null) && (user.isAdmin === true))
                         ?
                         <li className="nav-icon"><Link to="/admin"><i className="nav-admin-icon fa fa-gears"><span>&nbsp;ADMIN</span></i></Link></li>
                         :
                         ""
                         }
                         {
                         (user.id !== null)
                         ?
                         <Link to="/logout"><i className="nav-icon fa fa-sign-out">&nbsp;<span>LOGOUT</span></i></Link>
                         :
                         <Link to="/accounts/login"><i className="nav-icon fa fa-user-o"><span>&nbsp;ACCOUNT</span></i></Link>
                         }
                          <Link to="/cart" state={{ background: location }}><i className="nav-icon fa fa-opencart"><span>&nbsp;CART</span></i></Link>
                         <i ref={ref2} onClick={toggle} className="nav-toggle fa fa-bars"></i>
                         
                    </div>
                    
               </ul>
          </nav>
                 
     )
}



export default AppNavbar;