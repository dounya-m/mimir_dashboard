import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'

function LoginForm() {
  return (
    <div className=''>
        <div className='flex flex-col items-center justify-center gap-5 sm:w-[60vw] lg:w-[20vw] '>
            
                <input  className='w-full px-2 py-2 text-sm bg-transparent border-2 border-black rounded-[5px]' placeholder='Email'
                type="email" />
                <input  className='w-full px-2 py-2 text-sm bg-transparent border-2 border-black rounded-[5px]' placeholder='Password'
                type="password" />
            <button className='w-full px-2 py-2 text-white bg-black rounded-[5px]'>login</button>
        </div>
        <Link to='/' className='flex items-center gap-2 my-3 text-sm font-medium capitalize'>
            <AiOutlineArrowLeft />
                <p>return to home</p>
            </Link>

    </div>
  )
}

export default LoginForm
