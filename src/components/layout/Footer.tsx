import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-black pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Zap className="h-7 w-7 text-accent-blue mr-2" />
              <span className="font-heading text-xl text-primary-silver uppercase tracking-wider">
                Tar<span className="text-accent-blue">taria</span>
              </span>
            </Link>
            <p className="text-accent-gray mb-4">
              India's fastest tech transformer, providing strategic technology solutions to drive your business forward.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-silver hover:text-accent-blue transition-colors">
              <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-silver hover:text-accent-blue transition-colors">
              <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-silver hover:text-accent-blue transition-colors">
              <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-silver hover:text-accent-blue transition-colors">
              {/* If using lucide-react v0.263.0+, Instagram is available */}
              {/* import { Instagram } from 'lucide-react'; */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={2.5} />
                <circle cx="12" cy="12" r="4" strokeWidth={2.5} />
                <circle cx="17" cy="7" r="1" strokeWidth={2.5} />
              </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-primary-silver uppercase tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-accent-gray hover:text-accent-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-accent-gray hover:text-accent-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-accent-gray hover:text-accent-blue transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-accent-gray hover:text-accent-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-accent-gray hover:text-accent-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-xl text-primary-silver uppercase tracking-wide mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-accent-gray hover:text-accent-blue transition-colors">
                  Enterprise Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-accent-gray hover:text-accent-blue transition-colors">
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-accent-gray hover:text-accent-blue transition-colors">
                  AI Implementation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-accent-gray hover:text-accent-blue transition-colors">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-accent-gray hover:text-accent-blue transition-colors">
                  Custom Web Applications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl text-primary-silver uppercase tracking-wide mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-blue mr-2 mt-0.5" />
                <span className="text-accent-gray">
                  Pimpri Chinchwad,<br />
                  Pune, Maharashtra 411036
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent-blue mr-2" />
                <a href="mailto:contact@tartariatech.com" className="text-accent-gray hover:text-accent-blue transition-colors">
                  contact@tartariatech.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent-blue mr-2" />
                <a href="tel:+919529666812" className="text-accent-gray hover:text-accent-blue transition-colors">
                  +91 9529666812
                </a>
                <a href="tel:+919730266648" className="text-accent-gray hover:text-accent-blue transition-colors">
                  +91 9730266648
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-accent-gray text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Tartaria Tech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-accent-gray text-sm hover:text-accent-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-accent-gray text-sm hover:text-accent-blue transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
