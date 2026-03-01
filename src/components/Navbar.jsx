import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets, company_logos } from "../assets";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Team", path: "/team" },
  { name: "Product", path: "/product" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [sidebaropen, setsidebaropen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setsidebaropen(false); // mobile menu close
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full h-16 flex items-center justify-between
      px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
      transition-all duration-300
      ${scrolled ? "bg-black" : "bg-transparent"}`}
    >
      {/* LOGO */}
      <div className="flex items-center">
        <img
          src={company_logos}
          alt="company-logo"
          className="w-32 sm:w-40 md:w-44 lg:w-48 cursor-pointer"
          onClick={() => handleNavigate("/")}
        />
      </div>

      {/* NAV LINKS */}
      <div
        className={`
          flex items-center justify-center gap-6
          text-gray-700 sm:text-sm font-medium
          transition-all duration-300

          ${
            sidebaropen
              ? "max-sm:h-64 max-sm:opacity-100 max-sm:rounded-b-2xl"
              : "max-sm:h-0 max-sm:opacity-0"
          }

          max-sm:fixed max-sm:top-16 max-sm:left-0
          max-sm:w-full max-sm:flex-col max-sm:overflow-hidden
          max-sm:bg-emerald-800 max-sm:text-white
          max-sm:pt-20
        `}
      >
        {pages.map((page) => (
          <span
            key={page.path}
            onClick={() => handleNavigate(page.path)}
            className="cursor-pointer sm:hover:border-b hover:text-green-400 transition"
          >
            {page.name}
          </span>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 z-50">
        {/* MOBILE MENU ICON */}
        <img
          src={assets.menu_bar}
          alt="menu"
          onClick={() => setsidebaropen((prev) => !prev)}
          className="w-8 md:hidden cursor-pointer"
        />

        {/* CONNECT BUTTON */}
        <button
          onClick={() => handleNavigate("/contact")}
          className="hidden md:flex items-center gap-2
          bg-linear-to-r from-green-600 via-green-500 to-emerald-400
          text-white px-4 py-3 rounded-full
          hover:bg-emerald-700 transition"
        >
          Connect
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
