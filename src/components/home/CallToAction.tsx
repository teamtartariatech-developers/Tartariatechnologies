import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary-black to-gray-900 py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-2xl p-10 md:p-16"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-accent-purple/10" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-blue/30 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-purple/20 rounded-full blur-[100px]" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 md:max-w-2xl">
              <h2 className="font-heading text-4xl md:text-5xl text-primary-silver mb-4">
                Ready to <span className="text-accent-blue">Build</span> Your Next Software Solution?
              </h2>
              <p className="text-lg text-accent-gray">
                Schedule a free consultation with our development team and discover how we can bring your software ideas to life.
              </p>
            </div>
            <Link to="/contact">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;