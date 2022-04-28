import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../store/index'


const Home = () => {
    const user = useSelector((state:RootState) => state.auth.user)

    return (
    <div>{user?.name}</div>
  )
}

export default Home