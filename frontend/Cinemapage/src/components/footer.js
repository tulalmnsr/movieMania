// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white p-6 mt-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-2">City Movies</h2>
            <p className="text-gray-300">Bringing Entertainment to Your City</p>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0 flex justify-center md:justify-end">
            <div className="flex flex-col items-center space-y-2">
              <a href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-300 hover:text-white">Terms of Service</a>
              <a href="/contact-us" className="text-gray-300 hover:text-white">Contact Us</a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} City Movies. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;