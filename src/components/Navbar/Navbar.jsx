import React,{useContext, useState} from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png';
import vart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { IoMenu } from "react-icons/io5";


export const Navbar = () => {
  const {getTotalCartItems}=useContext(ShopContext)
  const [menu,setMenu]=useState("shop");
  const handleMenuChange = (newMenu) => {
    setMenu(newMenu);
  };
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="navbar">
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <IoMenu />
      </div>
      <div className="nav-logo">
        <Link to='/'><img src={logo} alt="" to='/' /></Link>
        <p className="shoppify-text">SHOPPIFY</p>
      </div>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li onClick={()=>{handleMenuChange('shop')}}><Link to='/' style={{textDecoration:'none', color: 'black'}}>Shop</Link>{ menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{handleMenuChange('mens')}}><Link to='/mens'style={{textDecoration:'none',color: 'black'}}>Men</Link>{ menu==="mens"?<hr/>:<></>} </li>
        <li onClick={()=>{handleMenuChange('womens')}}><Link to='/womens' style={{textDecoration:'none',color: 'black'}}>Women</Link>{ menu==="womens"?<hr/>:<></>} </li>
        <li onClick={()=>{handleMenuChange('kids')}}><Link to='/kids' style={{textDecoration:'none',color: 'black'}}>Kids</Link>{ menu==="kids"?<hr/>:<></>} </li>
        <li className='login'><Link to='/login'><button onCanPlay={window.scrollTo(0,0)}>Login </button></Link></li>
      </ul>
      <div className="nav-login-cart">
        {/* <Link to='/login'><button onCanPlay={window.scrollTo(0,0)}>Login </button></Link> */}
        <Link to='/cart'><img src={vart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
    
  )
}
export default Navbar
