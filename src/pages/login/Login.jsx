import React,{useEffect, useState} from 'react'
import '../login/Login.css';
import logo from '../../../public/logo.png';


export default function Login() {

  const [signState, setSignState] = useState(false);


  return (
    <div className='login-page'>
        <img className='login-logo' src={logo} alt="LOGO" />
        <div className="login-form">
            <h1>{signState? 'Sign In': 'Sign Up'}</h1>
            <form>
                {signState? '' : <input type="text" placeholder='Your Name' />}
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type='button'>{signState? 'Sign In': 'Sign Up'}</button>
                <div class="form-help">
                <div class="remember">
                    <input type="checkbox" />
                    <label>Remember Me</label>
                </div>
                <p>Need Help?</p>
                </div>
                <div className="form-switch">
                  {signState?<p>New to Netflix? <span onClick={()=>{setSignState(prev => !prev)}} >Sign Up Now</span> </p>:
                  <p>Already have Account? <span onClick={()=>{setSignState(prev => !prev)}} >Sign In Now</span> </p>}
                </div>
            </form>
        </div>
    </div>
  )
}
