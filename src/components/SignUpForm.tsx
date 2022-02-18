import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const SignUpForm = () => {
       const[{name,email,password,confirmPassword}, setDetails] = useState({
           name:'',
           email:'',
           password:'',
           confirmPassword:''
       })
       
       const [error,setError] = useState('')


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

  return (
    <>
    <form className='signUpForm'>
      {/* Input fields */}
        <input
          type='text'
          value={name}
          placeholder='Full Name'
          className='input'
          onChange={(e) => setDetails({ name: e.target.value,email,password,confirmPassword })}
        />
        <input
          type='text'
          value={email}
          placeholder='Email'
          className='input'
          onChange={(e) => setDetails({ email: e.target.value,name,password,confirmPassword })}
        />
        <input
          type='password'
          value={password}
          placeholder='Password'
          className='input'
          onChange={(e) => setDetails({ password: e.target.value,name,email,confirmPassword })}
        />
        <input
          type='password'
          value={confirmPassword}
          placeholder='Confirm Password'
          className='input'
          onChange={(e) => setDetails({ password,name,email,confirmPassword: e.target.value })}

        />
        <br />
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to='/Login'>Sign In</Link>
    </p>
    
    </>
  )
}

export default SignUpForm