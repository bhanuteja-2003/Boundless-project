import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  const [line, setLine] = useState(1);
  return (
    <div className='navbar' >
      <div className='nav-logo' >
        <img src={logo} alt="" />
        <p>Leo</p>
      </div>
      <ul className='nav-menu' >
        <li onClick={()=>{setLine(1)}} ><Link to="/" style={{textDecoration:'none', color:'#e7e7e7'}} >Shop</Link>  {line===1 && <hr />} </li>
        <li onClick={()=>{setLine(2)}} ><Link to="/mens" style={{textDecoration:'none', color:'#e7e7e7'}}>Men</Link>  {line===2 && <hr />}  </li>
        <li onClick={()=>{setLine(3)}} ><Link to="/women" style={{textDecoration:'none', color:'#e7e7e7'}}>Women</Link>  {line===3 && <hr />}  </li>
        <li onClick={()=>{setLine(4)}} ><Link to="/kids" style={{textDecoration:'none', color:'#e7e7e7'}}>Kids</Link>  {line===4 && <hr />}  </li>
      </ul>
       <div className="nav-login-cart" >
        <Link to="/login" style={{textDecoration:'none', color:'#e7e7e7'}}><button>Login</button></Link>
        <Link to="/cart" style={{textDecoration:'none', color:'#e7e7e7'}}><img src={cart_icon} alt="" /></Link>
        
        <div className="nav-cart-count" >0</div>
       </div>
    </div>
  )
}

export default Navbar;