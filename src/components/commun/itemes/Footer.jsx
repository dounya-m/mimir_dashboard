import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 py-[10vh]'>
      <Link to='/' className='text-3xl font-normal Bosca '>Mimir</Link>
      <p className='text-[#CAAF8D] text-lg font-light'>Youcode Library Books List</p>
    </div>
  )
}

export default Footer
