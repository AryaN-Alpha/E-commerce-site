import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // State to track if the buttons should be hidden
  const [buttonsVisible, setButtonsVisible] = useState(true);

  // Function to hide the buttons
  const handleButtonClick = () => {
    setButtonsVisible(false);
  };

  return (
    <nav className="bg-transparent border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/E-commerce-site" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-blue-500  hover:text-4xl hover:text-blue-400 hover:transition-all duration-500 ease-in-out text-3xl font-bold whitespace-nowrap">
            Naksu Store
          </span>
        </Link>

        {/* Login and Signup buttons - hidden when clicked */}
        {buttonsVisible && (
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              to="/login"
              onClick={handleButtonClick} // Hide buttons when clicked
              className="hover:bg-white hover:text-black text-white bg-blue-900 px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-200 mx-2"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={handleButtonClick} // Hide buttons when clicked
              className="hover:bg-white hover:text-black text-white bg-blue-900 px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-200"
            >
              Sign Up
            </Link>
          </div>
        )}

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link to="/E-commerce-site" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/ai_assistant" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500">
                Ai Assistant
              </Link>
            </li>
            <li>
              <Link to="/shop" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
