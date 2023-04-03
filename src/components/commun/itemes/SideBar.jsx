import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import NavItems from '../itemes/NavItems';
import { IoMdLogOut } from 'react-icons/io';
import { AiOutlineSetting } from 'react-icons/ai';

function SideBar() {
  const isActive = (match, location) => {
    return match && location.pathname === match.url;
  };

  return (
    <div className='flex flex-col justify-between h-[80vh]'>
      <section className=''>
        <Logo className='' />
      </section>

      <ul className='flex flex-col gap-10'>
        {NavItems.map((item) => (
          <li className='text-[14px]' key={item.name}>
            <NavLink
              to={item.path}
              className={() => isActive ? 'linkStyle' : 'linkStyle'}
              activeClassName='active'
              isActive={isActive}
            >
              {item.icon} {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <section className='flex flex-col gap-4'>
        <a className='linkStyle' href='/'>
          <IoMdLogOut /> Logout
        </a>
        <a className='linkStyle' href='/'>
          <AiOutlineSetting /> Settings
        </a>
      </section>
    </div>
  );
}

export default SideBar;
