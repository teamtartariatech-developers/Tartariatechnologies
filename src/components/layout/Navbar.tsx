import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BrainCircuit, X, Menu } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <BrainCircuit className="h-10 w-10 text-primary-600" />
            <span className="font-display font-bold text-xl sm:text-2xl text-primary-900">
              Aretex-ai
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors relative ${
                  location.pathname === link.path
                    ? 'text-primary-700'
                    : isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-primary-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary-600 focus:outline-none`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-3 px-4 rounded-md font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;