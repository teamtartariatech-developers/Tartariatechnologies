import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const ServicesBanner: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-primary-600 rounded-full opacity-20 top-20 -right-20"></div>
        <div className="absolute w-64 h-64 bg-secondary-600 rounded-full opacity-20 -bottom-20 left-20"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-secondary-400">Services</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional software development services and innovative products. 
            From AI/ML solutions to cross-platform applications, we deliver cutting-edge technology solutions.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};

export default ServicesBanner;