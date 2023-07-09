import React from 'react'
import { v4 as uuid } from "uuid";
import './SignUp.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SignupUser } from '../../Services/AuthServices'
import { UseAuth } from '../../Contexts/AuthContext'
import { UseData } from '../../Contexts/DataContext';
export const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    _id: uuid(),
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    bookmarks: [],
    following: [],
    followers: [],
    profile_photo: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
  })
  const { setIsLoggedIn } = UseAuth();

  const navigate = useNavigate();

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value })
  }
  const { firstName, lastName, username, password } = signUpDetails;

  const { dataDispatch, isDarkMode } = UseData();

  const handleCreateAccount = () => {
    SignupUser({ ...signUpDetails, userHandler: `${firstName}` }, setIsLoggedIn, navigate, dataDispatch)
  }
  return (
    <form onSubmit={(e) => e.preventDefault()} className={`login-main-container flex ${isDarkMode && "bg-dark"}`}>

      <div className='login-header flex align-center direction-column'>
        <h1 className='login-header-text letter-spacing-1'>Baarta</h1>
        <p className={`login-quote letter-spacing-1 text-center ${isDarkMode && "color-white"}`}>Baarta helps you connect and share with the people in your life.</p>
      </div>

      <div className={`login-form-container flex direction-column ${isDarkMode && "bg-dark-light"}`}>
        <h2 className='sign-in-heading text-center letter-spacing-1'>Sign Up</h2>
        <div className='flex justify-between fname-lname-box letter-spacing-1'>

          <input type="text" className={`fname letter-spacing-1 ${isDarkMode && "bg-dark-light  border-color-dark color-white"}`} placeholder='Name' onChange={handleSignUpChange} value={firstName} name='firstName' required />

          <input type="text" className={`lname letter-spacing-1 ${isDarkMode && "bg-dark-light  border-color-dark color-white"}`} placeholder='Surname' onChange={handleSignUpChange} value={lastName} name='lastName' required />

        </div>

        <div className='flex direction-column'>
          <input type="text" className={`login-user-name letter-spacing-1 ${isDarkMode && "bg-dark-light  border-color-dark color-white"}`} placeholder='Email' onChange={handleSignUpChange} value={username} name='username' required />

          <input type="password" className={`login-password letter-spacing-1 ${isDarkMode && "bg-dark-light  border-color-dark color-white"}`} placeholder='Password' onChange={handleSignUpChange} value={password} name='password' required />
        </div>
        {/* <div> */}
        <button onClick={handleCreateAccount} className='login-btn letter-spacing-1 font-bold cursor-pointer create-acc'>Create Account</button>

        {/* </div> */}

        <p className={`for-border ${isDarkMode && "border-color-dark"}`}></p>

        <p className={`already-have-acc letter-spacing-1 text-center ${isDarkMode && "color-white"}`}>Already Have An Account?<NavLink to="/login" className="login-link font-bold"> Log In</NavLink></p>
      </div>




    </form>
  )
}
