import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";


const SignUpForm = () => {
  interface formData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  }

  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  
  const {register,handleSubmit, formState :{errors}} = useForm<formData>();


       // submit function
       const onSubmit = handleSubmit(({name,email,password,confirmPassword})=>{
        const userDetails={
                   name,email,password,confirmPassword
               }
         console.log( userDetails )
       })
       
       // Viewing Passwords Function
        const togglePassword = ()=>{
          setShowPassword(showPassword ? false : true)
        }
        const toggleConfirmPassword = ()=>{
          setShowConfirmPassword(showConfirmPassword ? false : true)
        }
  return (
    <>
    <form className='space-y-6 mt-20 p-3 flex flex-col justify-center relative' onSubmit={onSubmit}>
      {/* Input fields */}
    
        <input
          {...register("name",{required:true})}
          name='name'
          type='text'
          style={{borderColor: errors.name ? 'red' : ''}}
          placeholder='Full Name'
          className='border-b-2 outline-none'
          />

        <input
        {...register("email", {
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })}
          name='email'
          type='text'
          style={{borderColor: errors.email ? 'red' : ''}}
          placeholder='Email'
          className='border-b-2 outline-none P-2'
          />

    
        <input
        {...register("password",{required:true, maxLength:18,minLength:6})}
          name='password'
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          className='border-b-2 outline-none P-2'
          />
      
             
        <input
        {...register("confirmPassword",{required:true, maxLength:18,minLength:6})}
          name='confirmPassword'
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder='Confirm password'
          className='border-b-2 outline-none P-2'   
          />
          <button className='text-orange-500 absolute right-6 top-24' onClick={togglePassword}>{ showPassword ? <AiFillEye/>:<AiFillEyeInvisible/>}</button>
          <button className='text-orange-500 absolute right-6 bottom-50' onClick={toggleConfirmPassword}>{ showConfirmPassword ? <AiFillEye/>:<AiFillEyeInvisible/>}</button>
          


      
        <button className='bg-black border from-neutral-50 max-auto p-2 rounded-full text-white'>SIGN UP</button>
      <p className='text-center mt-6'>
        Already have an account? <Link to='/Login' className='text-orange-500 underline'>Sign In</Link>
    </p>
      </form>
    
    </>
  )
}

export default SignUpForm