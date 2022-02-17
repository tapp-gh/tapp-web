import Axios,{ AxiosRequestConfig } from "axios";


// assigning types
export interface Details {
    email:string,
    password: string
  }

  // Login API call
  export const onLogin = async (data:Details)=>{
    const requestConfig :AxiosRequestConfig = {
      method: 'post',
      url:'',
      data
    }
    
    // making a post request 
  
  }