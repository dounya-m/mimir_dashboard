import React from 'react'
import H2 from '../commun/titeles/H2'

function BookofWeek() {
  return (
    <div>
        <H2>Book of the week</H2>
        <section className='flex gap-4 bg-[#F9F2E7]'>
            <div>
                <img className='w-[50vw]' src={require('../../assets/images/books/Rectangle 7.png')} alt="" />
            </div>
            <div className='flex flex-col justify-center gap-4 capitalize '>
                <p className='text-4xl Bosca'>The Wicked</p>
                <div className='flex gap-1 text-base text-[#DEA331]'>
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

export default BookofWeek
