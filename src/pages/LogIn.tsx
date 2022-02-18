import React,{useState} from 'react'
import LogInForm from '../components/LogInForm';
import { FaTwitter } from "react-icons/fa";


const LogIn = () => {
  return (
    <>
    <div className='logo'><FaTwitter/></div>
      <h2>Sign In</h2>
      <h4>Enter your email and password</h4>
      <div className="login-form">

      <LogInForm/>
      </div>
    </>
  )
}

export default LogIn