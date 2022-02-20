import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { login } from '../http/auth';

const LogInForm = () => {
    const [{email,password},setCredentials] = useState({
        email:'',
        password:''
    })

    // submit function
    const handleLogIn =async (e:React.FormEvent) => {
        e.preventDefault()

        const data = {
            email,
            password
        }
        try {
            const res = await login(data)
            console.log(res)

        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <>
    <form className='space-y-6 mt-44 p-3 flex flex-col justify-center relative'>
       <input
          type='text'
          value={email}
          placeholder='Email'
          className='border-b-2 outline-none P-2'
          onChange={(e) => setCredentials({ email: e.target.value,password })}
          />

        <input
          type='password'
          value={password}
          placeholder='Password'
          className='border-b-2 outline-none P-2'
          onChange={(e) => setCredentials({ password: e.target.value,email })}
          />
          <button className='text-orange-500 absolute right-3 top-9'>Forget Password ?</button>
         
        <button className='bg-black border from-neutral-50 max-auto p-2 rounded-full text-white' onClick={handleLogIn}>LOG IN</button>
    <p className='text-center mt-6'>
        Don't have an account? <Link to='/' className='text-orange-500 underline'>Sign Up</Link>
    </p>
    </form>
</>
  )
}

export default LogInForm