import React from 'react'
import {useLocation} from 'react-router-dom' 
import {AiOutlineArrowRight} from 'react-icons/ai'
import H2 from '../../commun/titeles/H2'
function RecentBook() {
    const location = useLocation();
    const isBookPage = location.pathname === "/book";
  return (
    <div >
        {!isBookPage && <H2 className='text-lg font-semibold capitalize Bosca mb-[1rem]'>reccently added</H2>}
        <section className='flex flex-col justify-center gap-6'>
            <SingleBooks  />
            <button className='flex items-center justify-center border-2 w-[25%] mx-auto border-black py-2 text-sm rounded-lg gap-2 hover:shadow-md'>
                All Books <AiOutlineArrowRight isBookPage={isBookPage} />
            </button>
        </section>
    </div>
  )
}

function SingleBooks(isBookPage) {
    const book = [
        {
            id: "1",
            title: "The Wicked",
            auhor: "Gilien Mckelvie",
            image: require('../../../assets/images/books/Rectangle 7.png')
        },
        {
            id: "2",
            title: "Harry Pother",
            auhor: "J.K Rowling",
            image: require('../../../assets/images/books/Rectangle 8.png')
        },
        {
            id: "3",
            title: "Work: a life well waster",
            auhor: "robert ashley",
            image: require('../../../assets/images/books/Rectangle 9.png')
        },
        {
            id: "4",
            title: "howel's moving castle",
            auhor: "hayao miyazaki",
            image: require('../../../assets/images/books/Rectangle 10.png')
        },
        {
            id: "5",
            title: "well wasted",
            auhor: "hayao miyazaki",
            image: require('../../../assets/images/books/Rectangle 11.png')
        },
        {
            id: "6",
            title: "the jungle book",
            auhor: "Rudyard Kipling",
            image: require('../../../assets/images/books/Rectangle 12.png')
        },
        {
            id: "7",
            title: "frozen",
            auhor: "Victoria Saxon",
            image: require('../../../assets/images/books/Rectangle 13.png')
        },
        {
            id: "8",
            title: "Die Hard",
            auhor: "bruce willis",
            image: require('../../../assets/images/books/Rectangle 14.png')
        },
        {
            id: "9",
            title: "The evil dead",
            auhor: "Bruce Campbell",
            image: require('../../../assets/images/books/Rectangle 15.png')
        },
        {
            id: "10",
            title: "The last of us",
            auhor: "Ricky Cambier",
            image: require('../../../assets/images/books/Rectangle 16.png')
        },
    ]

    return (
        <div className={`grid gap-5 ${isBookPage? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2":"lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2"}`}>
            {book.map(item => (
                <div key={item.id}>
                <img className='hover:shadow-lg w-[229px] h-[330px] rounded-[5px] object-cover' src={item.image} alt="" />
                <p className='Bosca text-[#00000] text-lg w-[70%]'>{item.title}</p>
                <p className='Bosca text-[#C9C9C9] text-xs'>{item.auhor}</p>
                </div>
            ))}
            </div>
        );
}

export default RecentBook
