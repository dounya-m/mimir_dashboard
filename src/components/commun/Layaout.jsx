import React from 'react'
import SideBar from './itemes/SideBar'

function Layaout({children}) {
  return (
    <div className='flex'>
      <nav className='pt-10 pl-6 h-[100vw] bg-[#E5E5E5] '>
        <SideBar />
      </nav>
      <article className='pt-10 pl-6'>
        {children}
      </article>
    </div>
  )
}

export default Layaout
