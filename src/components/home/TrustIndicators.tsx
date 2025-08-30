import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const logos = [
  {
    name: 'TechStart',
    industry: 'Startup'
  },
  {
    name: 'HotelChain',
    industry: 'Hospitality'
  },
  {
    name: 'FinanceApp',
    industry: 'Fintech'
  },
  {
    name: 'HealthTech',
    industry: 'Healthcare'
  },
  {
    name: 'EduPlatform',
    industry: 'Education'
  }
];

const stats = [
  {
    value: '150+',
    label: 'Projects Delivered'
  },
  {
    value: '50+',
    label: 'Happy Clients'
  },
  {
    value: '4+',
    label: 'Years Experience'
  },
  {
    value: '95%',
    label: 'Client Satisfaction'
  }
];

const TrustIndicators: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16">
      <Container>
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-heading text-4xl md:text-5xl text-accent-blue mb-2">
                {stat.value}
              </div>
              <div className="text-primary-silver text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Client logos */}
        <div className="text-center mb-8">
          <p className="text-accent-gray text-sm uppercase tracking-wider">Trusted by growing businesses</p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center mb-2">
                <span className="font-heading text-xl text-accent-blue">
                  {logo.name.charAt(0)}
                </span>
              </div>
              <span className="text-primary-silver text-sm font-medium">{logo.name}</span>
              <span className="text-accent-gray text-xs">{logo.industry}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TrustIndicators;