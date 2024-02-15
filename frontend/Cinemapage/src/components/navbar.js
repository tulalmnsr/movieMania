// src/components/Navbar.jsx
import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gradient-to-r from-purple-600 to-blue-300 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/home" activeClassName="active-link" className="text-white hover:text-gray-300">Home</NavLink>
          <NavLink to="/contact" activeClassName="active-link" className="text-white hover:text-gray-300">Contact Us</NavLink>
          <NavLink to="/about" activeClassName="active-link" className="text-white hover:text-gray-300">About Us</NavLink>
          <NavLink to="/cinemas" activeClassName="active-link" className="text-white hover:text-gray-300">Cinemas</NavLink>
          <input
            type="text"
            placeholder="Search for movies"
            className="px-2 py-1 border border-gray-500 rounded"
          />
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-600 to-blue-300 p-4 flex flex-col items-center space-y-4">
          <NavLink to="/home" activeClassName="active-link" className="text-white">Home</NavLink>
          <NavLink to="/contact" activeClassName="active-link" className="text-white">Contact Us</NavLink>
          <NavLink to="/about" activeClassName="active-link" className="text-white">About Us</NavLink>
          <NavLink to="/cinemas" activeClassName="active-link" className="text-white">Cinemas</NavLink>
          <input
            type="text"
            placeholder="Search for movies"
            className="px-2 py-1 border border-gray-500 rounded"
          />
        
        </div>
      )}
    </div>
  );
}

export default Navbar;