import React, { useEffect, useState } from 'react'
import { assets, company_logos } from '../assets';

const Navbar = () => {
  const [sidebaropen,setsidebaropen]=useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)

  },[])

  return (
    <nav className={`fixed top-0  z-50 w-full  flex items-center justify-between h-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-2  font-medium transition-all duration-300  ${scrolled ? "bg-emerald-600 shadow-lg" : "bg-transparent"}`}>
     

        <div className='flex items-center '>    
            <img  src={company_logos} alt="company-logo"  className=' w-32 sm:w-40 md:w-44 lg:w-48' />
        </div>
     
      <div
  className={`
    flex items-center justify-center gap-6
    text-gray-700 sm:text-sm transition-all duration-300

    ${
      sidebaropen
        ? "max-sm:h-64 max-sm:rounded-b-2xl max-sm:opacity-100"
        : "max-sm:h-0 max-sm:opacity-0"
    }

    max-sm:fixed max-sm:top-16 max-sm:left-0
    max-sm:w-full max-sm:overflow-hidden
    max-sm:flex-col
    max-sm:bg-blue-700 max-sm:text-white
    max-sm:pt-20
  `}
>

         
      
            <a href="#" className="sm:hover:border-b">Home</a>
        <a href="#" className="sm:hover:border-b">About</a>
        <a href="#services" className="sm:hover:border-b">Team</a>
        <a href="#" className="sm:hover:border-b">Product</a>
        <a href="#" className="sm:hover:border-b">contact</a>

        </div>
         <div className="flex items-center gap-2 sm:gap-4 ">
  
  <img
    src={assets.menu_bar}
    alt="Open menu"
    onClick={() => setsidebaropen(prev =>!prev)}
    className="w-8 md:hidden cursor-pointer"
  />

 
  <button className="hidden md:block bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition-colors">
    Connect
  </button>
</div>


        
    </nav>
    
  )
}


export default Navbar;
