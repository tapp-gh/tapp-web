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
    <form>
       <input
          type='text'
          value={email}
          placeholder='Email'
          className='input'
          onChange={(e) => setCredentials({ email: e.target.value,password })}
          />
        <input
          type='password'
          value={password}
          placeholder='Password'
          className='input'
          onChange={(e) => setCredentials({ password: e.target.value,email })}
          />
        <button onClick={handleLogIn}>Sign In</button>
    </form>
    <p>
        Don't have an account? <Link to='/'>Sign Up</Link>
    </p>
</>
  )
}

export default LogInForm