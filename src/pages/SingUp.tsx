import React,{useState,useEffect} from 'react'
import LoadingScreen from '../components/LoadingScreen';
import SignUpForm from '../components/SignUpForm';
import { FaTwitter } from "react-icons/fa";


const SingUp = () => {
  const [notloading,setNotLoading] = useState(true)

  const loaded = ()=>{
    setNotLoading(false)
  }
  useEffect(()=>{
    // setTimeout(() => setLoading(false), 1500)
    window.addEventListener('load', loaded) 
  },[])
  return (
    <>
            {notloading === false ? (
           <div className='max-w-md w-full mx-auto'>
          <div className='flex align-center justify-center text-purple-600  '><FaTwitter className='text-4xl'/></div>
          <h2 className='text-3xl font-bold text-gray-900 mt-11 text-center'>Sign Up</h2>
          <h4 className='text-center mt-6 text-gray-400'>First create your account</h4>
          <div className="signup-form">
              <SignUpForm/>
          </div>
        </div>
     ) : <LoadingScreen/>} 
   
    </>
  )
}

export default SingUp