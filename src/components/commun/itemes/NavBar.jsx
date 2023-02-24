import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import SearchInput from './SearchInput';


function NavBar() { 
  const location = useLocation();
  const isBookPage = location.pathname === "/book";
  
        const [isMenuOpen, setIsMenuOpen] = useState(false);        
            const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
            };
        
return (
    <div className='flex flex-col relatiev'>
        <div className='flex items-center justify-between my-[1rem] relative '>
            <Link to='/' className='text-3xl font-normal Bosca '>Mimir</Link>
            {isBookPage && <SearchInput />}
            <button onClick={toggleMenu}>
            {isMenuOpen ? (
            <AiOutlineClose className='text-3xl' />
          ) : (
            <AiOutlineMenu className='text-3xl' />
          )}
            </button>
        </div>
        <div className={`${
          isMenuOpen ? 'block ' : 'hidden'
        }`}>
        <MainNav className='' />
        </div>
    </div>
  )
}

function MainNav() {
    return(
        <div className='flex flex-col gap-[1rem] items-center justify-center px-5 pt-5 pb-12 font-normal Bosca text-xl absolute w-[83vw]  bg-[#FBF8F1]  z-50 '>
            <NavLink to="/" className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' >Home</NavLink>            
            <NavLink to="/book" className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' >Book</NavLink>
            <NavLink to="/request" className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' >Request a Book</NavLink>
            <NavLink to="/" className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' >Contatct</NavLink>
            <NavLink to="/Login" className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' >Login</NavLink>
        </div>
    )
}

export default NavBar
