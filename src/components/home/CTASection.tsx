import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-primary-600 rounded-full opacity-20 top-20 -right-20"></div>
        <div className="absolute w-64 h-64 bg-secondary-600 rounded-full opacity-20 -bottom-20 left-20"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Build Your Next
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-secondary-400"> Software Solution</span>?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss your project requirements and how we can help bring your ideas to life.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button to="/contact" variant="accent" size="lg">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button to="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Services
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;