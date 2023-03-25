import React from 'react'
import LoginForm from '../components/form/LoginForm'
import Logo from '../components/commun/Logo'
function Login() {



  return (
    <div className='flex flex-col items-center justify-center h-screen gap-8 '>
        <div>
          <Logo />
        </div>
        <LoginForm className="" />
    </div>
  )
}

export default Login
