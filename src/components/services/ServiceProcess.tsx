import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Section from '../ui/Section';

const steps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description: "We begin by understanding your business objectives, target audience, and requirements through in-depth consultation."
  },
  {
    number: "02",
    title: "Planning & Strategy",
    description: "Our team develops a comprehensive strategy and project plan with clear milestones and deliverables."
  },
  {
    number: "03",
    title: "Design & Development",
    description: "We create wireframes, prototypes, and iteratively develop the solution with regular client feedback."
  },
  {
    number: "04",
    title: "Testing & Refinement",
    description: "Rigorous testing ensures quality, security, and performance before deployment."
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support and maintenance to ensure continued success."
  }
];

const ServiceProcess: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Development <span className="text-primary-600">Process</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A systematic approach to deliver high-quality solutions
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Number */}
                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="w-20 h-20 flex items-center justify-center bg-white text-primary-600 text-3xl font-display font-bold rounded-full shadow-lg border-4 border-primary-100 z-10">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServiceProcess;