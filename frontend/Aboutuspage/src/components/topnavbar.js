// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faSignInAlt, faUser, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


const TopNavbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <nav className="bg-white p-2 md:p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2 md:space-x-4">
        <Link to="/">
          <span className="text-purple-600 text-sm md:text-base lg:text-lg font-bold">CITY MOVIE</span>
        </Link>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <span className="text-purple-600 text-xs md:text-sm lg:text-base">
          <FontAwesomeIcon icon={faCalendar} className="mr-1 md:mr-2" />
          {currentTime.toLocaleDateString()}
        </span>
        <span className="text-purple-600 text-xs md:text-sm lg:text-base">
          <FontAwesomeIcon icon={faClock} className="mr-1 md:mr-2" />
          {currentTime.toLocaleTimeString()}
        </span>
        <Link to="/login" className="text-purple-600 text-xs md:text-sm lg:text-base hover:text-blue-300">
          <FontAwesomeIcon icon={faSignInAlt} />
          <span className="ml-1 md:ml-2">Login</span>
        </Link>
        <Link to="/signup" className="text-purple-600 text-xs md:text-sm lg:text-base hover:text-blue-300">
          <FontAwesomeIcon icon={faUser} />
          <span className="ml-1 md:ml-2">Sign Up</span>
        </Link>
        <Link to="/basket" className="text-purple-600 text-xs md:text-sm lg:text-base hover:text-blue-300">
          <FontAwesomeIcon icon={faShoppingBasket} />
        </Link>
      </div>
    </nav>
  );
}

export default TopNavbar;