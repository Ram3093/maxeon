import React  from 'react'
import { Link } from 'react-router-dom'
import './index.css'



const Navbar =()=> { 
  
        return (
               <nav className='nav-wrapper nav-user-define-style'  >
                <div  className='container'>
                   <Link className='brand-logo ' to='/' style={{cursor:"pointer",paddingLeft:"20px"} }>Maxeon</Link>
                   <ul className='right'>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/features'>Features</Link></li>
                    <li><Link to='/useCases'>UseCases</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                    <li><Link to='/login'><button className='btn white btn-user-define-style' >Login</button></Link></li>
                </ul>
               </div> 
            
               
            </nav> 
        
        )
   
}

export default Navbar
