import React,{useState} from 'react'
import {Link} from 'react-router-dom'


const LogInForm = () => {
    const [{email,password},setCredentials] = useState({
        email:'',
        password:''
    })

    // submit function
    const LogIn =async (e:React.FormEvent) => {
        e.preventDefault()

        // const logs = await onLogin({
        //     email,
        //     password
        // })
        
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
        <button onClick={LogIn}>Sign Up</button>
    </form>
    <p>
        Don't have an account? <Link to='/'>Sign Up</Link>
    </p>
</>
  )
}

export default LogInForm