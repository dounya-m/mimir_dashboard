import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';


function NavBar() { 
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        
            const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
            };
        
return (
    <div className='flex flex-col relatiev'>
        <div className='flex items-end justify-between my-[1rem] relative mx-[10vw]'>
            <h1 className='text-3xl font-normal Bosca '>Mimir</h1>
            <button onClick={toggleMenu}>
            {isMenuOpen ? (
            <AiOutlineClose className='text-3xl' />
          ) : (
            <AiOutlineMenu className='text-3xl' />
          )}
            </button>
        </div>
        <div className={`${
          isMenuOpen ? 'block' : 'hidden'
        }  w-[100%]`}>
        <MainNav className=' justify-self-end' />
        </div>
    </div>
  )
}

function MainNav() {
    return(
        <div className='flex flex-col gap-[1rem] items-center justify-center px-5 pt-5 pb-12 font-normal Bosca text-xl '>
            <NavLink className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' to='/'>Home</NavLink>            
            <NavLink className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' to='/'>Book</NavLink>
            <NavLink className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' to='/'>Request a Book</NavLink>
            <NavLink className='hover:border-[#54BAB9] hover:border-b-2 border-b-2 border-transparent pb-1' to='/'>Contatct</NavLink>
        </div>
    )
}

export default NavBar
