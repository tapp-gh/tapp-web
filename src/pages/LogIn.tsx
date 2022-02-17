import React,{useState} from 'react'
import LogInForm from '../components/LogInForm';

const LogIn = () => {
  return (
    <>
    <div className='logo'>logo</div>
      <h2>Sign In</h2>
      <h4>Enter your email and password</h4>
      <div className="login-form">

      <LogInForm/>
      </div>
    </>
  )
}

export default LogIn