import React from 'react'

function FilterBooks() {
  return (
    <div className='flex flex-col gap-4'>
        <select className='px-1 py-2 text-xs bg-transparent border-2 border-black rounded-md' name="rental-option">
            <option value="small">Category</option>
        </select>
        <select className='px-1 py-2 text-xs bg-transparent border-2 border-black rounded-md' name="rental-option">
            <option value="small">Year</option>
        </select>
        <select className='px-1 py-2 text-xs bg-transparent border-2 border-black rounded-md' name="rental-option">
            <option value="small">Languages</option>
        </select>
    </div>
  )
}

export default FilterBooks
