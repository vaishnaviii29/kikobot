import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/assets/logo1.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative flex justify-between items-center px-5 sm:px-15 py-4 bg-white">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex pl-20 items-center gap-3">
              <Image src={Logo} alt="Logo" width={100} height={50} />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 items-center font-sans">
          <Link href="/c1" className="text-gray-800 text-lg hover:text-black font-normal">
            C1 Series
          </Link>
          <Link href="/d1" className="text-gray-800 text-lg hover:text-black font-normal">
            D1 Series
          </Link>
        </nav>

        {/* Button */}
        <div className="hidden md:block pr-20">
          <Link href="/contact" className="bg-[#3537E8] text-white text-lg  py-2 px-6 rounded-sm  hover:bg-[#2E3BCC] transition-all">
            Let’s Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/c1"
              onClick={toggleMenu}
              className="block px-4 py-2 text-gray-700 hover:text-black"
            >
              C1 Series
            </Link>
            <Link
              href="/d1"
              onClick={toggleMenu}
              className="block px-4 py-2 text-gray-700 hover:text-black"
            >
              D1 Series
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block px-4 py-2 text-gray-700 hover:text-black"
            >
              Let’s Talk
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
