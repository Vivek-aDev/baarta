import React from 'react'
import './Login.css'
import brand_logo from "../../assets/brand-logo.png"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoginUser } from '../../Services/AuthServices'
import { UseAuth } from '../../Contexts/AuthContext'
import { UseData } from '../../Contexts/DataContext'

export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: ""
  });

  const { isDarkMode } = UseData();

  const location = useLocation();
  const navigate = useNavigate();

  const { setIsLoggedIn } = UseAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value })
  }


  const { username, password } = loginDetails;


  const handleLoginClick = () => {
    const prevLocation = location?.state?.from?.pathname;
    if (username && password) {
      LoginUser({ username, password }, setIsLoggedIn, prevLocation, navigate);
    }
  }

  const handleGuestLogin = () => {
    let prevLocation;
    const creds = { username: "vivekadev@gmail.com", password: "100" }
    setLoginDetails({ ...creds })
    LoginUser(creds, setIsLoggedIn, prevLocation, navigate)
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className={`login-main-container flex ${isDarkMode && "bg-dark"}`}>

      <div className='login-header flex align-center direction-column'>
        <img src={brand_logo} alt="logo" className='brand-logo'/>
        <h1 className='login-header-text letter-spacing-1'>Baarta</h1>
        <p className={`login-quote letter-spacing-1 text-center ${isDarkMode && "color-white"}`}>Baarta connects you to your loved members and with their journey of life.</p>
      </div>

      <div className={`login-form-container flex direction-column ${isDarkMode && "bg-dark-light"}`}>
        <h2 className='sign-in-heading letter-spacing-1 text-center'>Sign In</h2>
        <div className='flex direction-column'>

          <input type="text" className={`login-user-name letter-spacing-1 ${isDarkMode && "bg-dark-light  border-color-dark color-white"}`} placeholder='Email' name='username' onChange={handleChange} value={username} required />

          <input type="password" className={`login-password letter-spacing-1 ${isDarkMode && "bg-dark-light  border-color-dark color-white"}`} placeholder='Password' name='password' onChange={handleChange} value={password} required />

        </div>
        {/* <div> */}
        <button onClick={handleLoginClick} className='login-btn letter-spacing-1 font-bold cursor-pointer'>Log In</button>

        <button onClick={handleGuestLogin} className='login-as-guest cursor-pointer'>Guest Visit</button>

        {/* </div> */}
        <p className={`for-border ${isDarkMode && "border-color-dark"}`}></p>

        <NavLink to="/signUp" className="create-new-account"> <button className=' letter-spacing-1 font-bold cursor-pointer create-new-acc-btn'>Create new account</button></NavLink>
      </div>

    </form>
  )
}
