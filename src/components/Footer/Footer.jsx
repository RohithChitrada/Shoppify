import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import { FaInstagram,FaWhatsapp,FaTwitter,FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPIFY</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Contact</li>
        </ul>
        <hr/>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <Link to='https://www.instagram.com' style={{color:'black'}}><FaInstagram/></Link>
            </div>
            <div className="footer-icons-container">
                <FaWhatsapp />
            </div>
            <div className="footer-icons-container">
                <FaTwitter />
            </div>
            <div className="footer-icons-container">
                <FaYoutube />
            </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @2023 -All Rights Reserved</p>
            </div>
        </div>
  )
}

export default Footer