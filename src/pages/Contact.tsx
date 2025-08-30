import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  return (
    <section className="bg-primary-black pt-32 pb-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3"
          >
            <SectionHeading
              title="Get in Touch"
              subtitle="Let's discuss how we can accelerate your tech transformation"
              centered={false}
            />
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-primary-silver mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-primary-silver focus:outline-none focus:border-accent-blue transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-primary-silver mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-primary-silver focus:outline-none focus:border-accent-blue transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-primary-silver mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-primary-silver focus:outline-none focus:border-accent-blue transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-primary-silver mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-primary-silver focus:outline-none focus:border-accent-blue transition-colors"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                
                <Button size="lg" fullWidth icon={<Send className="h-5 w-5" />}>
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/3"
          >
            <div className="sticky top-24">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
                <h3 className="font-heading text-2xl text-primary-silver mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-accent-blue mr-4 mt-1" />
                    <div>
                      <h4 className="text-primary-silver font-medium mb-1">Office Location</h4>
                      <p className="text-accent-gray">
                        Ravet<br />
                        Pune, Maharashtra 411036
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-accent-blue mr-4 mt-1" />
                    <div>
                      <h4 className="text-primary-silver font-medium mb-1">Email Us</h4>
                      <a href="mailto:contact@tartariatech.com" className="text-accent-gray hover:text-accent-blue transition-colors">
                        contact@tartariatech.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-accent-blue mr-4 mt-1" />
                    <div>
                      <h4 className="text-primary-silver font-medium mb-1">Call Us</h4>
                      <a href="tel:+919529666812" className="text-accent-gray hover:text-accent-blue transition-colors">
                        +91 9529666812
                      </a>
                      <a href="tel:+919730266648" className="text-accent-gray hover:text-accent-blue transition-colors">
                        +91 9730266648
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-20"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-8">
                  <h3 className="font-heading text-2xl text-primary-silver mb-4">Response Time</h3>
                  <p className="text-accent-gray">
                    We typically respond within 2-4 hours during business hours (9 AM - 6 PM IST).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
