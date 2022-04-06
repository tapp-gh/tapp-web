import axios from "../utility/axios";
// import { AxiosRequestConfig } from 'axios'

// assigning types
export interface Details {
    name: string,
    email:string,
    password: string,
    confirmPassword: string
  }

  // Login API call
  export const login = async (data:Details)=>{
    const res = await axios.post("login/", data);
     return res;
    
    // making a post request 
  }

  export const signup = async (data:Details)=>{
    const res = await axios.post("signup/", data);
     return res;
    
    // making a post request 
  }