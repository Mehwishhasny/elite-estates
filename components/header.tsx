"use client"; // Ensure you keep this for client components
import { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  openModal: () => void; // Define the prop type
}

export function Header({ openModal }: HeaderProps) { // Use the prop here
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInvestmentOpen, setIsInvestmentOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleInvestments = () => {
    setIsInvestmentOpen(!isInvestmentOpen);
  };

  return (
    <div className="flex sm:py-0 py-2">
      <div className="fixed sm:left-0 sm:top-0 sm:h-full sm:w-40 w-[320px] h-[85px] bg-gray-800 text-white z-10">
        <div className="flex justify-between items-center">
          <h1 className="sm:text-lg text-sm sm:mt-4 ml-2">
            <Link href="/">Elite Estates</Link>
          </h1>
          <button 
            onClick={toggleMenu} 
            className="sm:hidden focus:outline-none">
            <div className="space-y-1 m-4">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
        
        {(isMenuOpen || !window.matchMedia('(max-width: 640px)').matches) && (
          <ul className="flex sm:flex-col flex-row gap-4 sm:mt-12 sm:text-base text-sm sm:ml-2">
            <li className="hover:text-gray-300 cursor-pointer">
              <Link href="/">About</Link>
            </li>
            <li className="cursor-pointer">
              <div className="flex items-center justify-between" onClick={toggleInvestments}>
                <span className="hover:text-gray-300">Investments</span>
                <span className="ml-2">{isInvestmentOpen ? '▲' : '▼'}</span>
              </div>
              {isInvestmentOpen && (
                <ul className="ml-4 mt-1 sm:ml-0 sm:mt-1">
                  <li className="hover:text-gray-300 cursor-pointer text-sm mb-3">
                    <Link href="/investuae">Investments in UAE</Link>
                  </li>
                  <li className="hover:text-gray-300 cursor-pointer text-sm" onClick={openModal}>
                    Investment Management
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:text-gray-300 cursor-pointer">Blogs</li>
            <li className="hover:text-gray-300 cursor-pointer" onClick={openModal}>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        )}

        {(isMenuOpen || !window.matchMedia('(max-width: 640px)').matches) && (
          <ul className="flex sm:flex-col flex-row gap-4 sm:mt-16 sm:ml-2 sm:items-start justify-center items-center sm:text-base text-sm">
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="https://your-faq-url.com" target="_blank" rel="noopener noreferrer" className="hover:underline">FAQs</a>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="https://your-team-url.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Our Team</a>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="https://your-gallery-url.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Gallery</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
