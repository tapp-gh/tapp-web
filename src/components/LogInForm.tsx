import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import {Link, Navigate} from 'react-router-dom'
import { login } from '../http/auth';
import { AxiosError } from "axios";
import { useSelector,useDispatch } from 'react-redux'
import {setToken, setIsAuthenticated, setIsLoading, setUser} from '../store/slice/authSlice'
import { RootState } from '../store/index'



interface loginData {
    email: string,
    password: string,
  }
const LogInForm = () => {
    
    const [disableButton,setDisableButton] = useState(true)
    const {register,handleSubmit,formState:{errors}} = useForm<loginData>()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state:RootState) => state.auth.isAuthenticated)
    
    if(isAuthenticated){
      return <Navigate to='/home' replace/>
    }

    // submit function
    const onSubmit = handleSubmit(async({email,password})=>{
      try{
        const res = await login({email,password})
        const data = res.data
        dispatch(setToken(data.token))
        dispatch(setUser(data.user))
        dispatch(setIsAuthenticated(true))
        
        console.log(data)
      }catch (error){
        const err = error as AxiosError
        console.log(err.response)
      }
      
    })
    const handleEnable = (event: React.FormEvent)=>{
      const target = event.target as HTMLButtonElement
      setDisableButton(target.value === '')
    }
    return (
        <>
    <form className='space-y-6 mt-40 p-4 flex flex-col relative'>
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
        Don't have an account? <Link to='/signup' className='text-orange-500 underline'>Sign Up</Link>
    </p>
    </form>
</>
  )
}

export default LogInForm