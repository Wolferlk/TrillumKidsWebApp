import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { School, Menu, X, User } from 'lucide-react';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <motion.span
        className={`relative inline-block px-3 py-2 ${
          isActive ? 'text-pink-500' : 'text-gray-600'
        } hover:text-pink-500 transition-colors`}
        whileHover={{ scale: 1.05 }}
      >
        {children}
        {isActive && (
          <motion.div
            layoutId="underline"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500"
          />
        )}
      </motion.span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-2"
            >
              <School className="h-8 w-8 text-pink-500" />
              <span className="font-bold text-2xl bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                Trillium Kids
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link
              to="/login"
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <MobileNavLink to="/">Home</MobileNavLink>
              <MobileNavLink to="/gallery">Gallery</MobileNavLink>
              <MobileNavLink to="/about">About</MobileNavLink>
              <MobileNavLink to="/news">News</MobileNavLink>
              <MobileNavLink to="/contact">Contact</MobileNavLink>
              <Link
                to="/login"
                className="block w-full text-center bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity mt-4"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? 'text-pink-500 bg-pink-50'
          : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
      } transition-colors`}
    >
      {children}
    </Link>
  );
};

export default Navbar;