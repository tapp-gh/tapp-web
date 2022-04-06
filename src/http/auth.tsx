import axios from "../utility/axios";


// assigning types

interface Details {
    email:string,
    password: string,
  }

interface LogIn extends Details{}
interface SignUp extends Details{
  name: string,
  confirmPassword: string
}
  // Login API call
  export const login = async (data:LogIn)=>{
    const res = await axios.post("auth/", data);
     return res;
    
    // making a post request 
  }

  export const signup = async (data:SignUp)=>{
    const res = await axios.post("users/", data);
     return res;
    
    // making a post request 
  }