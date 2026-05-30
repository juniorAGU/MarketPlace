import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar({setIsopen,isopen}) {
    return (
        <nav className='space-y-4'>
            <NavLink 
                to={'/'} 
                className={({isActive}) => `block text-[#E8EDE8]  transition-colors py-2 ${isActive ? 'bg-[#7C9A7E] text-white font-medium pl-2 rounded-md' 
                : 'text-[#E8EDE8] hover:bg-[#1A1E1B] hover:text-[#7C9A7E] pl-2 rounded-md'}`}
                onClick={() => setIsopen(false)}
            >
                Home
            </NavLink>
            <NavLink 
                to={'/marketplace'} 
                className={({isActive}) => `block text-[#E8EDE8]  transition-colors py-2 ${isActive ? 'bg-[#7C9A7E] text-white font-medium pl-2 rounded-md' 
                : 'text-[#E8EDE8] hover:bg-[#1A1E1B] hover:text-[#7C9A7E] pl-2 rounded-md'}`}
                onClick={() => setIsopen(false)}
            >
                Browse Products
            </NavLink>
            <NavLink 
                to={'/sellers'} 
                className={({isActive}) => `block text-[#E8EDE8]  transition-colors py-2 ${isActive ? 'bg-[#7C9A7E] text-white font-medium pl-2 rounded-md' 
                : 'text-[#E8EDE8] hover:bg-[#1A1E1B] hover:text-[#7C9A7E] pl-2 rounded-md'}`}
                onClick={() => setIsopen(false)}
            >
                Top Sellers
            </NavLink>
            <NavLink 
                to={'/about'} 
                className={({isActive}) => `block text-[#E8EDE8]  transition-colors py-2 ${isActive ? 'bg-[#7C9A7E] text-white font-medium pl-2 rounded-md' 
                : 'text-[#E8EDE8] hover:bg-[#1A1E1B] hover:text-[#7C9A7E] pl-2 rounded-md'}`}
                onClick={() => setIsopen(false)}
            >
                About Us
            </NavLink>
            <NavLink 
                to={'/contact'} 
                className={({isActive}) => `block text-[#E8EDE8]  transition-colors py-2 ${isActive ? 'bg-[#7C9A7E] text-white font-medium pl-2 rounded-md' 
                : 'text-[#E8EDE8] hover:bg-[#1A1E1B] hover:text-[#7C9A7E] pl-2 rounded-md'}`}
                onClick={() => setIsopen(false)}
            >
                Contact Us
            </NavLink>
            </nav>
    )
}

export default Navbar