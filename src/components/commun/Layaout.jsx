import React from 'react'
import NavBar from './itemes/NavBar'
import Footer from './itemes/Footer'
function Layaout({children}) {
return (
    <main>
        <header>
            <NavBar />
        </header>
        <article className='my-[4rem] mx-[8rem]'>
            {children}
        </article>
        <footer className='bg-[#F7ECDE]'>
            <Footer />
        </footer>
    </main>
)
}

export default Layaout
