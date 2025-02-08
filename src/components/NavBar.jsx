import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon for the hamburger menu
import Logo from './Assets/Logo.webp'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(true);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Hide buttons on click
  const handleButtonClick = () => {
    setButtonsVisible(false);
  };

  handleHome=()=>{

  }

  return (
    <nav className="bg-transparent border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
  <img src={Logo} alt="Logo" className="h-20 w-auto" />
  
</Link>

        {/* Desktop Menu (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-black font-semibold hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/about" className="text-black font-semibold hover:text-blue-400 transition">About</Link></li>
            <li><Link to="/ai_assistant" className="text-black font-semibold hover:text-blue-400 transition">AI Assistant</Link></li>
            <li><Link to="/shop" className="text-black font-semibold hover:text-blue-400 transition">Shop</Link></li>
            <li><Link to="/faqs" className="text-black font-semibold hover:text-blue-400 transition">FAQs</Link></li>
          </ul>
        </div>

        {/* Login & Signup Buttons (hidden when clicked) */}
        {buttonsVisible && (
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              onClick={handleButtonClick}
              className="hover:bg-white hover:text-black text-white bg-blue-400 px-6 py-2 rounded-full transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={handleButtonClick}
              className="hover:bg-white hover:text-black text-white bg-blue-400 px-6 py-2 rounded-full transition duration-200"
            >
              Sign Up
            </Link>
          </div>
        )}

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden flex flex-col items-center space-y-4 p-4 bg-gray-900 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/" className="text-white hover:text-blue-400 transition">Home</Link>
        <Link to="/about" className="text-white hover:text-blue-400 transition">About</Link>
        <Link to="/ai_assistant" className="text-white hover:text-blue-400 transition">AI Assistant</Link>
        <Link to="/shop" className="text-white hover:text-blue-400 transition">Shop</Link>
        <Link to="/faqs" className="text-white hover:text-blue-400 transition">FAQs</Link>

        {/* Mobile Login & Signup Buttons */}
        {buttonsVisible && (
          <div className="flex flex-col space-y-2 mt-4">
            <Link
              to="/login"
              onClick={handleButtonClick}
              className="hover:bg-white hover:text-black text-white bg-blue-900 px-6 py-2 rounded-full transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={handleButtonClick}
              className="hover:bg-white hover:text-black text-white bg-blue-900 px-6 py-2 rounded-full transition duration-200"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
