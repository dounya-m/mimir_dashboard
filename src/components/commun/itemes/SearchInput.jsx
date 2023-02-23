import React from 'react'
import search from '../../../assets/icons/search-normal.svg'
function SearchInput() {
  return (
    <label className='flex justify-between border-[2px] border-[#2C2C2C] md:w-[30vw] pt-1 pb-2 px-3 rounded-full mx-auto sm:w-[50vw]'>
        <input className='placeholder-[#818181] Bosca bg-transparent focus:outline-none p-2' placeholder="Search by book or author"/>
        <button>
          <img className='bg-[#54BAB9] p-2 rounded-full w-[2.3rem]' src={search} alt="" />
          </button>
    </label>
  )
}

export default SearchInput
