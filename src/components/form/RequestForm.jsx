import React from 'react'

function RequestForm() {
return (
    <div className='flex flex-col items-center justify-center w-full gap-5 '>
            <input  className='w-full px-2 py-2 text-sm bg-transparent border-2 border-black rounded-[5px]' placeholder='Book name'
            type="email" />
            <input  className='w-full px-2 py-2 text-sm bg-transparent border-2 border-black rounded-[5px]' placeholder='Author'
            type="password" />            
            <input  className='w-full px-2 py-2 text-sm bg-transparent border-2 border-black rounded-[5px]' placeholder='Language'
            type="password" />
        <button className='w-full px-2 py-2 text-white bg-black rounded-[5px]'>send</button>
    </div>
  )
}

export default RequestForm
