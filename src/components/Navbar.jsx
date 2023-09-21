import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-[#201f1f7a] to-transparent absolute inset-x-0 top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex sm:ml-10 flex-shrink-0">
            <img className="h-8 w-auton sm:inline-block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
          </div>

          <div className="hidden sm:flex flex-1 justify-center items-center space-x-4">
            <a href="#" className="text-gray-300 hover:bg-[#ffffff96] hover:text-black rounded-md px-3 py-2 text-md font-semibold">Games</a>
            
            <div className="relative">
              <a href="#" className="text-gray-300 hover:bg-[#ffffff96] hover:text-black rounded-md px-3 py-2 text-md font-semibold">
                Browse Games
                <svg className="w-4 h-4 inline-block ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
            </div>
            
            <a href="#" className="text-gray-300 hover:bg-[#ffffff96] hover:text-black rounded-md px-3 py-2 text-md font-semibold">Store</a>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="#" className="bg-blue-600 text-white rounded-md mx-2  px-3 py-2 text-sm font-medium hover:animate-pulse">Sign Up</a>
            <a href="#" className="text-white border border-white rounded-md mx-2  px-3 py-2 text-sm font-medium hover:animate-pulse">Login</a>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" onClick={toggleMobileMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#ffffff96] hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen}>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="flex flex-col items-center space-y-2 py-2">
            <a href="#" className="text-gray-300 hover:bg-[#ffffff96] hover:text-black rounded-md px-3 py-2 text-sm font-medium">Games</a>
            
            <div className="relative">
            <button className="text-gray-300 hover:bg-[#ffffff96] hover:text-black rounded-md px-3 py-2 text-sm font-medium">
              Browse Games
              <svg className="w-4 h-4 inline-block ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
            
            <a href="#" className="text-gray-300 hover:bg-[#ffffff96] hover:text-black rounded-md px-3 py-2 text-sm font-medium">Store</a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
