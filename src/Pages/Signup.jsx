import React from 'react'
import './CSS/Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form action="Authentication.php" method='post'>
        <div className="loginsignup-fields">
          <input type="text" id='uname' placeholder='Your Name'/>
          <input type="email" id='email' placeholder='Email Address' />
          <input type="password" id='password' placeholder='password'/>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Terms and Policies</p>
        </div>
        <button>Continue</button>
        <p className='loginsinup-login'>Already have an account? <span><Link style={{textDecoration:'none',color:'orangered'}} to='/login' >Login here</Link></span></p>
        </form>
      </div>
    </div>
  )
}

export default Signup