import React from 'react'
import NavBar from './itemes/NavBar'
import Footer from './itemes/Footer'
function Layaout({children}) {
return (
    <main>
        <header className='sm:mx-[4vw] lg:mx-[8vw] '>
            <NavBar />
        </header>
        <article className='my-[4rem] sm:mx-[4vw] lg:mx-[8vw]'>
            {children}
        </article>
        <footer className='bg-[#F7ECDE]'>
            <Footer />
        </footer>
    </main>
)
}

export default Layaout
