import React from 'react'
import './Newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscribe For more Updates</p>
    <div>
        <input type="email" placeholder='Your mail id' />
        <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter