import axios from "../utility/axios";
// import { AxiosRequestConfig } from 'axios'

// assigning types
export interface Details {
    email:string,
    password: string
  }

  // Login API call
  export const login = async (data:Details)=>{
    const res = await axios.post("login/", data);
     return res;
    
    // making a post request 
  }
