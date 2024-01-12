import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram from '../Assets/instagram.png';
import twitter from '../Assets/twitter.png';
const Footer = () => {
  return (
    <div className="footer" >
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>Leo</p>
        </div>
        <ul className="footer-links" >
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon" >
            <div className="footer-icons-container" >
                <span className="icon-instagram" ></span>
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icons-container" >
                <img src={twitter} alt="" />
            </div>
        </div>
        <div className="footer-copyright" >
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>

        </div>
    </div>
  )
}

export default Footer