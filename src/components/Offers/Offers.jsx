import React from 'react'
import './Offers.css'
import hero_img from '../Assets/hero_image.png' 

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON THE BEST SCALE PRODUCTS</p>
            <button id='btn'>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Offers