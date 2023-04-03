import React from 'react'

function AddButton(props) {
  return (
    <button className='flex items-center justify-center py-2 w-[50%] font-semibold text-[14px] bg-[#54BAB9] hover:bg-[#4AA7A6] text-gray-900 rounded-md'>
            {props.children}
        </button>
  )
}

export default AddButton
