import React from 'react'
import { useDispatch } from 'react-redux'
import {login,logout} from '../features/user'
function Login() {
    const dispatch = useDispatch()
  return (
    <>
    <div>
      <button onClick={()=>{dispatch(login({name:"faeez",age:23,email:"faeez@gmail.com"}))}}  > LogIn </button>
    </div>
    <div>
    <button onClick={()=>{dispatch(logout())}}  > LogOut </button>
  </div>
  </>
  )
}

export default Login
