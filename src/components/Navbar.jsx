import React from 'react';
import { FaBars, FaInstagram, FaFacebookF, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const imageUrl = "https://res.cloudinary.com/dxohwanal/image/upload/v1758091799/Banner_almyda.jpg";
  
  return (
    <nav className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Top Navbar */}
      <div className="relative z-10 flex items-center justify-between p-4 md:p-6 text-white">
        {/* Left Icons */}
        <div className="flex items-center space-x-4">
          <FaBars className="text-xl cursor-pointer" />
          <FaInstagram className="text-xl cursor-pointer" />
          <FaFacebookF className="text-xl cursor-pointer" />
        </div>
        
        {/* Center Logo */}
        <div className="flex-1 text-center">
          <span className="text-3xl font-bold tracking-widest uppercase">GALAXMIND</span>
        </div>
        
        {/* Right Icons/Links */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hidden md:block border px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300">Register</a>
          <FaSearch className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-bold">AI</h1>
          <p className="text-xl md:text-2xl mt-2 tracking-wide">IN SPACE SCIENCE</p>
        </div>
      </div>

      {/* Bottom Content (assuming the image shows this) */}
      <div className="absolute bottom-4 left-4 z-10 text-white hidden md:block">
        <div className="flex space-x-12">
          <div>
            <h3 className="font-bold">Moons</h3>
            <p>Phobos, Deimos</p>
          </div>
          <div>
            <h3 className="font-bold">Radius</h3>
            <p>3,390 km</p>
          </div>
          <div>
            <h3 className="font-bold">Orbital Period</h3>
            <p>687 Day</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;