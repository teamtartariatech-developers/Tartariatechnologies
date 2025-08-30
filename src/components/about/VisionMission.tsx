import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target } from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';

const VisionMission: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-600">
              <Lightbulb size={32} />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-6">
              To be the global leader in innovative software solutions that empower businesses to thrive in the digital era.
            </p>
            <p className="text-gray-700">
              We envision a world where technology enhances human capabilities, streamlines operations, and creates meaningful connections between businesses and their customers. Our aim is to be at the forefront of this transformation, continually pushing the boundaries of what's possible with software solutions.
            </p>
          </motion.div>
          
          {/* Mission */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-600">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To deliver exceptional software solutions that solve complex business challenges and drive measurable growth for our clients.
            </p>
            <p className="text-gray-700">
              We are committed to understanding our clients' unique needs and developing customized solutions that exceed expectations. Through a combination of technical expertise, innovative thinking, and unwavering dedication to quality, we empower businesses to achieve their full potential in the digital landscape.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default VisionMission;