import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Shop Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-800">ShopName</h4>
            <p className="text-gray-600 text-sm">
              Discover the latest trends and shop with confidence. Quality products, exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-800">Shop</h4>
            <ul className="space-y-2">
              <li><a href="/new-arrivals" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">New Arrivals</a></li>
              <li><a href="/bestsellers" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Best Sellers</a></li>
              <li><a href="/sale" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Sale</a></li>
              <li><a href="/collections" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Collections</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-800">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Contact Us</a></li>
              <li><a href="/shipping" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Shipping Info</a></li>
              <li><a href="/returns" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Returns & Exchanges</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-800">Stay Updated</h4>
            <p className="text-gray-600 text-sm">Subscribe to get special offers, free giveaways, and new arrivals.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} ShopName. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
