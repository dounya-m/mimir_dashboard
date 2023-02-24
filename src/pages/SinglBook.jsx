import React from 'react'
import BookDetailles from '../components/books/singleBook/BookDetailles'
import Comments from '../components/books/singleBook/Comments'
function SinglBook() {
  return (
    <div className='flex flex-col gap-10'>
      <section>
        <BookDetailles />
      </section>
      <section className=''>
        <Comments />
      </section>
    </div>
  )
}

export default SinglBook
