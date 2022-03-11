import React,{useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { signup } from '../http/auth';


interface formData {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
}
const SignUpForm = () => {

  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [disableButton, setDisableButton] = useState(true) 
  const {register,handleSubmit, formState :{errors}, watch} = useForm<formData>();

  //this where the error is
  const password = useRef({})
  password.current = watch("password","")

       // submit function
       const onSubmit = handleSubmit(async ({name,email,password,confirmPassword})=>{
        const userDetails= await signup({
                   name,email,password,confirmPassword
               })
                console.log( userDetails )
       })
       
       // Viewing Passwords Function
        const togglePassword = ()=>{
          setShowPassword(showPassword ? false : true)
        }
        const toggleConfirmPassword = ()=>{
          setShowConfirmPassword(showConfirmPassword ? false : true)
        }
        const handleEnable = (event: React.FormEvent)=>{
          const target = event.target as HTMLButtonElement
          setDisableButton(target.value === '')
        }
  return (
    <>
    <form className='space-y-6 mt-20 p-4 flex flex-col justify-center relative' onSubmit={e=>{e.preventDefault()}}>
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
          pattern:{
             value :/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message:'Please enter a valid email'
          } 
    })}
          name='email'
          type='text'
          style={{borderColor: errors.email ? 'red' : ''}}
          placeholder='Email'
          className='border-b-2 outline-none P-2'
          />
          {errors.email && <p>{errors.email.message}</p>}


        <input
        {...register("password",{required:true, maxLength:18,minLength:{value: 8,message:'Password should have at least 8 characters'}})}
          name='password'
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          className='border-b-2 outline-none P-2'
          />
          {errors.password && <p>{errors.password.message}</p>}

      
        <input
        {...register("confirmPassword",{required:true, validate: value => value === password.current || 'The passwords do not match'})}
          name='confirmPassword'
          type={showConfirmPassword ? 'text' : 'password'}
          style={{borderColor: errors.confirmPassword ? 'red' : '' }}
          placeholder='Confirm password'
          className='border-b-2 outline-none P-2'   
          onChange={handleEnable}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          <button className='text-orange-500 absolute right-6 top-24' onClick={togglePassword}>{ showPassword ? <AiFillEye/>:<AiFillEyeInvisible/>}</button>
          <button className='text-orange-500 absolute right-6 bottom-50' onClick={toggleConfirmPassword}>{ showConfirmPassword ? <AiFillEye/>:<AiFillEyeInvisible/>}</button>
          
        <button className='bg-black border from-neutral-50 max-auto p-2 rounded-full text-white' data-testid='signup' type='submit' disabled={disableButton} onClick={onSubmit}>SIGN UP</button>
      <p className='text-center mt-6'>
        Already have an account? <Link to='/Login' className='text-orange-500 underline'>Sign In</Link>
    </p>
      </form>
    </>
  )
}

export default SignUpForm