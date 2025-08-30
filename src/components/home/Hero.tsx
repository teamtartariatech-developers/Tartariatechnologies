import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-primary-black pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-purple/30 via-primary-black to-accent-blue/20" />
        <div className="absolute -top-[40%] -right-[25%] w-[80%] h-[80%] bg-accent-purple/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[40%] -left-[25%] w-[80%] h-[80%] bg-accent-blue/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent-green/10 rounded-full blur-[150px]" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-wider text-primary-silver mb-6">
              India's <span className="text-accent-blue">Fastest</span><br />
              Tech <span className="text-accent-green">Transformer</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-accent-gray mb-8"
          >
            We transform businesses through strategic technology implementation with measurable results in record time.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;