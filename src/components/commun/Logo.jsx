import React from 'react'
import {Link} from 'react-router-dom'
function Logo() {
  return (
    <div className=''>
      <div className='relative z-20'>
      <Link to='/' className='text-3xl font-normal Bosca'>Mimir</Link>
      </div>
        <p className='bg-[#54BAB9] w-8 h-8 rounded-full absolute -mt-10 ml-[4.5%]'></p>
    </div>
  )
}

export default Logo
