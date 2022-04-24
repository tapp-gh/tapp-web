import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate, } from "react-router-dom";
import { RootState } from '../store/index'
interface Props {
    component: any,
    props: []
}
const PrivateRoutes = ({children}: any) => {
    const isAuthenticated = useSelector((state:RootState) => state.auth.isAuthenticated)
    const isLoading = useSelector((state:RootState) => state.auth.isLoading)

    if(!isAuthenticated){
      return <Navigate to='/login' replace/> 
    }
  return (
  children
  )
}
export default PrivateRoutes








