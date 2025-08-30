import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import AreteksLogo from '../assets/white_logo.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-black/90 backdrop-blur-md py-3 shadow-lg'
          : 'bg-primary-black/50 backdrop-blur-sm py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            {/* <AreteksLogo className="h-8 w-8 text-accent-blue mr-2" /> */}
            <span className="font-heading text-2xl text-primary-silver uppercase tracking-wider">
              Tar<span className="text-accent-blue">taria </span>
              TE<span className="text-accent-blue">CH</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent-blue ${
                  location.pathname === link.path
                    ? 'text-accent-blue'
                    : 'text-primary-silver'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button>Get Started</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-silver"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-black/95 backdrop-blur-md">
          <Container>
            <nav className="py-5 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium px-2 py-2 transition-colors hover:text-accent-blue ${
                    location.pathname === link.path
                      ? 'text-accent-blue'
                      : 'text-primary-silver'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button>Get Started</Button>
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;

