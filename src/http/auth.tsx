import axios from "../utility/axios";


// assigning types

interface LogIn {
    email:string,
    password: string,
  }
interface SignUp extends LogIn{
  name: string,
  confirmPassword: string
}
  // Login API call
  export const login = async (data:LogIn)=>{
    const res = await axios.post("auth/", data);
     return res;

  }
  // Signup API call
  export const signup = async (data:SignUp)=>{
    const res = await axios.post("users/", data);
     return res;

  }