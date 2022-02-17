import React,{useState} from 'react'
import SignUpForm from '../components/SignUpForm';
// import { AiOutlineTwitter } from "react-icons/ai";

const SingUp = () => {
  return (
    <>
    <div className='signUp'>
      {/* <div className='logo'><AiOutlineTwitter/></div> */}
      <h2>Sign Up</h2>
      <h4>First create your account</h4>
      <div className="signup-form">
      <SignUpForm/>
      </div>
  </div>
    </>
  )
}

export default SingUp