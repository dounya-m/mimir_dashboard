import React from 'react'
import search from '../../../assets/icons/search-normal.svg'
function SearchInput() {
  return (
    <label className='flex justify-center'>
        <input className='placeholder-[#818181] Bosca bg-transparent' placeholder="Search by book or author"/>
        <img className='bg-[#54BAB9] p-2 rounded-full w-[2.5rem]' src={search} alt="" />
    </label>
  )
}

export default SearchInput
