import { sign } from 'crypto';
import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
import { login } from '../http/auth';

interface loginData {
    email: string,
    password: string,
  }
const LogInForm = () => {
    
    const [disableButton,setDisableButton] = useState(true)
    const {register,handleSubmit,formState:{errors}} = useForm<loginData>()

    // submit function
    const onSubmit = handleSubmit(async({email,password})=>{
        // const data = await login({
        //     email,
        //     password
        // })
        // console.log(data)
    })
    const handleEnable = (event: React.FormEvent)=>{
      const target = event.target as HTMLButtonElement
      setDisableButton(target.value === '')
    }
    return (
        <>
    <form className='space-y-6 mt-44 p-4 flex flex-col justify-center relative'>
       <input
       {...register("email", {
        required: true,
        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      })}
          name='email'
          style={{borderColor: errors.email ? 'red' : ''}}
          type='text'
          placeholder='Email'
          className='border-b-2 outline-none P-2'
          />

        <input
        {...register("password",{required:true, maxLength:18,minLength:6})}
        style={{borderColor: errors.password ? 'red' : ''}}
          type='password'
          name='password'
          placeholder='Password'
          className='border-b-2 outline-none P-2'
          onChange={handleEnable}
          />
          <button className='text-orange-500 absolute right-3 top-9'>Forget Password ?</button>
         
        <button className='bg-black border from-neutral-50 max-auto p-2 rounded-full text-white' disabled={disableButton} onClick={onSubmit}>LOG IN</button>
    <p className='text-center mt-6'>
        Don't have an account? <Link to='/' className='text-orange-500 underline'>Sign Up</Link>
    </p>
    </form>
</>
  )
}

export default LogInForm