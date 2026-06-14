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

            {/* sellers page */}
            <NavLink 
                to={'/dashboard'} 
                className={({isActive}) => `block text-[#E8EDE8]  transition-colors py-2 ${isActive ? 'bg-[#7C9A7E] text-white font-medium pl-2 rounded-md' 
                : 'text-[#E8EDE8] hover:bg-[#1A1E1B] hover:text-[#7C9A7E] pl-2 rounded-md'}`}
                onClick={() => setIsopen(false)}
            >
                Dashboard
            </NavLink>

            <NavLink 
                to={'/addproduct'} 
                className={({isActive}) => `block text-[#E8EDE8]  transition-colors py-2 ${isActive ? 'bg-[#7C9A7E] text-white font-medium pl-2 rounded-md' 
                : 'text-[#E8EDE8] hover:bg-[#1A1E1B] hover:text-[#7C9A7E] pl-2 rounded-md'}`}
                onClick={() => setIsopen(false)}
            >
                AddProduct
            </NavLink>

            <NavLink 
                to={'/myproducts'} 
                className={({isActive}) => `block text-[#E8EDE8]  transition-colors py-2 ${isActive ? 'bg-[#7C9A7E] text-white font-medium pl-2 rounded-md' 
                : 'text-[#E8EDE8] hover:bg-[#1A1E1B] hover:text-[#7C9A7E] pl-2 rounded-md'}`}
                onClick={() => setIsopen(false)}
            >
                MyProducts
            </NavLink>

            <NavLink 
                to={'/sellers'} 
                className={({isActive}) => `block text-[#E8EDE8]  transition-colors py-2 ${isActive ? 'bg-[#7C9A7E] text-white font-medium pl-2 rounded-md' 
                : 'text-[#E8EDE8] hover:bg-[#1A1E1B] hover:text-[#7C9A7E] pl-2 rounded-md'}`}
                onClick={() => setIsopen(false)}
            >
                Top Sellers
            </NavLink>
            {/* End of Sellers page */}

            {/* buyers page */}

            <NavLink 
                to={'/cart'} 
                className={({isActive}) => `block text-[#E8EDE8]  transition-colors py-2 ${isActive ? 'bg-[#7C9A7E] text-white font-medium pl-2 rounded-md' 
                : 'text-[#E8EDE8] hover:bg-[#1A1E1B] hover:text-[#7C9A7E] pl-2 rounded-md'}`}
                onClick={() => setIsopen(false)}
            >
                My Cart
            </NavLink>



            {/* end of buyers route */}


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