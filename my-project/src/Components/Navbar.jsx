import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const popularSearches = [
    'New Arrivals', 
    'Best Sellers', 
    'Summer Collection', 
    'Sale Items'
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Search Overlay */}
      <div className={`fixed inset-0 z-50 flex items-start justify-center ${
        searchOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-white/95 transition-opacity duration-200 ${
            searchOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setSearchOpen(false)}
        />
        
        {/* Search Input */}
        <div className={`relative w-full max-w-2xl mx-4 mt-16 transition-all duration-200 ${
          searchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <div className="relative">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-12 pr-12 py-4 bg-white shadow-lg rounded-full 
                       text-lg focus:outline-none"
              autoFocus
            />
            <button 
              onClick={() => setSearchOpen(false)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 
                       hover:text-gray-600"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 bg-white z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <img 
                  src="\src\assets\fashat.jpg" 
                  alt="Logo" 
                  className="h-8 w-auto"
                  style={{ borderRadius: '10%' }}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <Link to="/Mens" className="nav-link">
                Men's
              </Link>
              <a href="/women" className="text-black hover:text-red-500 transition-colors">WOMEN</a>
              <a href="/kids" className="text-black hover:text-red-500 transition-colors">KIDS</a>
              <a href="/Accessories" className="text-black hover:text-red-500 transition-colors">ACCESSORIES</a>
              <a href="/Beauty" className="block px-3 py-2 text-black hover:text-red-500">BEAUTY</a>
              <a href="/Sales" className="block px-3 py-2 text-black hover:text-red-500 flex items-center">
              SALES
                <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">NEW</span>
              </a>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button 
                onClick={() => setSearchOpen(true)}
                className="nav-icon-btn"
              >
                <FaSearch className="text-xl" />
                <span className="hidden sm:block text-xs mt-1">Search</span>
              </button>

              <a href="/wishlist" className="nav-icon-btn">
                <FaHeart className="text-xl" />
                <span className="hidden sm:block text-xs mt-1">Wishlist</span>
              </a>

              <a href="/cart" className="nav-icon-btn relative">
                <FaShoppingBag className="text-xl" />
                <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
                <span className="hidden sm:block text-xs mt-1">Cart</span>
              </a>

              <a href="/profile" className="nav-icon-btn">
                <FaUser className="text-xl" />
                <span className="hidden sm:block text-xs mt-1">Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <a href="/Mens" className="block px-3 py-2 text-black hover:text-red-500">MEN</a>
            <a href="/Women" className="block px-3 py-2 text-black hover:text-red-500">WOMEN</a>
            <a href="/kids" className="block px-3 py-2 text-black hover:text-red-500">KIDS</a>
            <a href="/Accessories" className="block px-3 py-2 text-black hover:text-red-500">ACCESSORIES</a>
            <a href="/Beauty" className="block px-3 py-2 text-black hover:text-red-500">BEAUTY</a>
            <a href="/Sales" className="block px-3 py-2 text-black hover:text-red-500 flex items-center">
              SALES
              <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">NEW</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Add global styles for nav-icon-btn */}
      <style jsx global>{`
        .nav-icon-btn {
          @apply flex flex-col items-center text-black hover:text-red-500 transition-colors;
        }
      `}</style>
    </>
  );
};

export default Navbar;
