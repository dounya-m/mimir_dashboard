import React from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../components/form/LoginForm'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-8 '>
        <div>
        <Link to='/' className='text-3xl font-normal Bosca '>Mimir</Link>
        </div>
        <LoginForm className="" />
    </div>
  )
}

export default Login
