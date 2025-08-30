import React from 'react';
import { motion } from 'framer-motion';
import { Code, LineChart, Smartphone, Layout, Monitor, PenTool } from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="mb-4 p-3 bg-primary-50 text-primary-600 rounded-lg inline-block group-hover:bg-primary-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button to="/services" variant="ghost" className="text-primary-600 p-0 hover:bg-transparent hover:text-primary-700">
        Learn more
      </Button>
    </motion.div>
  );
};

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: <LineChart size={28} />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by advanced AI algorithms and machine learning models for automation and insights."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with React Native, Flutter, and other modern cross-platform technologies."
    },
    {
      icon: <Code size={28} />,
      title: "Full-Stack Development",
      description: "End-to-end web applications using modern frameworks like React, Node.js, Python, and cloud technologies."
    },
    {
      icon: <Layout size={28} />,
      title: "Product Development",
      description: "Complete product lifecycle management from ideation to deployment with agile methodologies."
    },
  ];

  return (
    <Section id="services-preview">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span className="text-primary-600">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive software solutions to drive your business forward
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button to="/services" variant="primary" size="lg">
            View All Services
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesPreview;