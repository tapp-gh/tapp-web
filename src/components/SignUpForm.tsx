import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";


const SignUpForm = () => {
       const[{name,email,password,confirmPassword}, setDetails] = useState({
           name:'',
           email:'',
           password:'',
           confirmPassword:''
       })
       
       const [error,setError] = useState('')
       const [showPassword,setShowPassword] = useState(false)
       const [showConfirmPassword,setShowConfirmPassword] = useState(false)



       // submit function

       const handleSignUp =async (e:React.FormEvent) => {
           e.preventDefault()

           const userDetails={
               name,email,password,confirmPassword
           }
          if(password===confirmPassword){
              //API CALL
              console.log(userDetails)
          } else{
              setError('Password must match')
              console.log(error)
          }
       }
 const togglePassword = ()=>{
   setShowPassword(showPassword ? false : true)
 }
 const toggleConfirmPassword = ()=>{
  setShowConfirmPassword(showConfirmPassword ? false : true)
}
  return (
    <>
    <form className='space-y-6 mt-20 p-3 flex flex-col justify-center relative'>
      {/* Input fields */}
    
        <input
          type='text'
          value={name}
          placeholder='Full Name'
          className='border-b-2 outline-none'
          onChange={(e) => setDetails({ name: e.target.value,email,password,confirmPassword })}
          />
      

  
        <input
          type='text'
          value={email}
          placeholder='Email'
          className='border-b-2 outline-none P-2'
          onChange={(e) => setDetails({ email: e.target.value,name,password,confirmPassword })}
          />
    
          
    
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          placeholder='Password'
          className='border-b-2 outline-none P-2'
          onChange={(e) => setDetails({ password: e.target.value,name,email,confirmPassword })}
          />
      
          
    
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          value={confirmPassword}
          placeholder='Confirm Password'
          className='border-b-2 outline-none P-2'
          onChange={(e) => setDetails({ password,name,email,confirmPassword: e.target.value })}
          
          />
          <button className='text-orange-500 absolute right-6 top-24' onClick={togglePassword}>{ showPassword ? <AiFillEye/>:<AiFillEyeInvisible/>}</button>
          <button className='text-orange-500 absolute right-6 bottom-50' onClick={toggleConfirmPassword}>{ showConfirmPassword ? <AiFillEye/>:<AiFillEyeInvisible/>}</button>
          


      
        <button className='bg-black border from-neutral-50 max-auto p-2 rounded-full text-white'onClick={handleSignUp}>SIGN UP</button>
      <p className='text-center mt-6'>
        Already have an account? <Link to='/Login' className='text-orange-500 underline'>Sign In</Link>
    </p>
      </form>
    
    </>
  )
}

export default SignUpForm