import React, { useState } from 'react'
import { assets, company_logos } from '../assets';

const Navbar = () => {
  const [sidebaropen,setsidebaropen]=useState(false);

  return (
    <nav className='fixed top-0 z-50 w-full bg-amber-300 flex items-center h-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-2  font-medium transition-all duration-300'>
     
        {/* logo on left side.... */}
        <div className='flex items-center'>    
            <img  src={company_logos} alt="company-logo"  className=' w-32 sm:w-40 md:w-44 lg:w-48' />
        </div>
     
        <div className={`text-gray-700 dark:text-white sm:text-sm 
        ${
          !sidebaropen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        }
        max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen 
        max-sm:flex-col max-sm:bg-blue-700 max-sm:text-white 
        max-sm:pt-20 flex gap-5 transition-all`}>
          <img
          src={assets.close_icon}
          alt="Close menu"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setsidebaropen(false)}
        />
      
            <a href="#" className="sm:hover:border-b">Home</a>
        <a href="#" className="sm:hover:border-b">About</a>
        <a href="#services" className="sm:hover:border-b">Team</a>
        <a href="#" className="sm:hover:border-b">Product</a>
        <a href="#" className="sm:hover:border-b">contact</a>

        </div>
         <div className="flex items-center gap-2 sm:gap-4 ml-auto">
  {/* Mobile Menu Button */}
  <img
    src={assets.menu_bar}
    alt="Open menu"
    onClick={() => setsidebaropen(true)}
    className="w-8 md:hidden cursor-pointer"
  />

  {/* Desktop Connect Button */}
  <button className="hidden md:block bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition-colors">
    Connect
  </button>
</div>

        
    </nav>
  )
}


export default Navbar;
