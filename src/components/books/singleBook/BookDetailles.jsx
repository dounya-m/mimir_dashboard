import React from 'react'

function BookDetailles() {
  return (
    <div>
        <section className='flex md:flex-row gap-4 bg-[#F9F2E7] sm:flex-col'>
            <div>
                <img className='lg:w-[50vw] sm:w-[100%]' src={require('../../../assets/images/books/Rectangle 8.png')} alt="" />
            </div>
            <div className='flex flex-col justify-center gap-4 pl-2 capitalize'>
                <p className='text-4xl Bosca'>harry potter</p>
                <div className='flex gap-1 text-base text-[#DEA331] '>
                    <p>Gillen Mckelvie</p>
                    <p>.</p><p>2012</p><p>.</p>
                    <p>Horror/Thriller</p>
                </div>
                <p className='w-[80%] text-gray-400 text-xs'>A teen looks to impress some girls by sneaking into the woods to find a house where a witch is said to live. He and his companions find out the hard way that the legend of the child-eating witch is true and she is back and on the hunt. a teen looks to impress some girls by sneaking into the woods to find a house where a witch is said to live. He and his companions find out the hard way that the legend of the child-eating witch is true and she is back and on the hunt.</p>
            </div>
        </section>
    </div>
  )
}

export default BookDetailles
