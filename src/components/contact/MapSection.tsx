import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const MapSection: React.FC = () => {
  return (
    <Section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0952947799056!2d-122.41941522392136!3d37.77492687193046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter!5e0!3m2!1sen!2sus!4v1690648562473!5m2!1sen!2sus" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aretex-ai Office Location"
          ></iframe>
        </motion.div>
      </div>
    </Section>
  );
};

export default MapSection;