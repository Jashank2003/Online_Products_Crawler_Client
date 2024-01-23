"use client"
// components/Navbar.js
import React from 'react';


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-black border-b-2 border-gray-800">
      {/* Logo */}
      <div className="flex items-center text-white">
        {/* You can replace the logo with your actual logo */}
        <img className="h-8 w-8 mr-2" src="/logo.png" alt="Logo" />
        <span className="text-lg font-bold tracking-wide hover:tracking-widest duration-300 cursor-pointer text-green-500">CrawlNCompare</span>
      </div>

      {/* Title */}
      {/* Links */}
      <div className="flex items-center space-x-4 text-white">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
