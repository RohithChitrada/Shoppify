import React from 'react'
// import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'


export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container" >
        <h1>Login</h1>
        <form action="" method='post'>
        <div className="loginsignup-fields" style={{marginTop:80}}>
          <input type="text" placeholder='Email/username' />
          <input type="password" placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className='loginsinup-login'>Don't have an account? <span><Link style={{textDecoration:'none',color:'orangered'}} to="/Signup" >Sign Up here</Link></span></p>
        </form>
      </div>
    </div>
  )
}
export default LoginSignup