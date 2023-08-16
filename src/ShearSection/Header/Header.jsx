import React, { useState } from 'react';
import './headerStyle.css';
import { RiArrowDownSLine } from 'react-icons/ri';
import Content from '../../Components/Content';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItemOpen, setMenuItemOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdownItem = () => {
    setMenuItemOpen(!menuItemOpen);
  };

  return (

    <div className="relative  shadow-2xl text-white  h-[80px] flex items-center " style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <Content>
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Left side logo */}
          <div className="flex items-center">
            <span className="text-lg font-semibold">Service</span>
          </div>

          {/* Centered menu items */}
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <div className="relative group">
              <div className="flex items-center " onClick={toggleDropdownItem}>
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
                <span>
                  <RiArrowDownSLine />
                </span>
              </div>
              {menuItemOpen && (
                <ul className="absolute mt-2 w-40 bg-gray-100 rounded-md shadow-lg">
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                    <a href="#">Service 1</a>
                  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                    <a href="#">Service 2</a>
                  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                    <a href="#">Service 3</a>
                  </li>
                  {/* Add more dropdown items */}
                </ul>
              )}
            </div>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
            <a href="#" className="hover:text-gray-300">
              Faq
            </a>
            <a href="#" className="hover:text-gray-300">
              About Us
            </a>
          </nav>

          {/* Right side search bar */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 border border-gray-600 rounded-md pl-8"
            />
            <img
              className="absolute w-4 h-4 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"
              src="https://i.ibb.co/mqMNMVG/3031293.png"
              alt="Search Icon"
            />
          </div>

          {/* Hamburger icon for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <nav className={`md:hidden mt-[80px] menu-slide ${menuOpen ? 'active' : ''}`}>
            <div className="absolute right-0 left-0 w-48 py-2 mt-2 bg-gray-100 rounded-md shadow-xl">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white"
              >
                page 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white"
              >
                page 3
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white"
              >
              </a>
            </div>
          </nav>
        )}
      </Content>
    </div>

  );
};

export default Header;
