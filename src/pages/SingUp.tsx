import React,{useState,useEffect} from 'react'
import LoadingScreen from '../components/LoadingScreen';
import SignUpForm from '../components/SignUpForm';
import { FaTwitter } from "react-icons/fa";


const SingUp = () => {
  const [loading,setLoading] = useState(true)


  useEffect(()=>{
    setTimeout(() => setLoading(false), 1500)
  },[])
  return (
    <>
            {loading === false ? (
        <div className='signUp'>
          <div className='logo'><FaTwitter/></div>
          <h2 className='underline'>Sign Up</h2>
          <h4>First create your account</h4>
         <div className="signup-form">
            <SignUpForm/>
         </div>
        </div>
    ) : <LoadingScreen/>}
   
    </>
  )
}

export default SingUp