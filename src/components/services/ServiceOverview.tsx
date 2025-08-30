import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, PieChart, Scale, Timer } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Service } from '../../types';
import SectionHeading from '../ui/SectionHeading';

// Icons mapping
const iconComponents = {
  LineChart: <LineChart className="h-6 w-6 text-accent-blue" />,
  PieChart: <PieChart className="h-6 w-6 text-accent-blue" />,
  Scale: <Scale className="h-6 w-6 text-accent-blue" />,
  Timer: <Timer className="h-6 w-6 text-accent-blue" />
};

interface ServiceOverviewProps {
  service: Service;
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({ service }) => {
  return (
    <section className="bg-primary-black py-20">
      <Container>
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-12 mb-20"
        >
          <div className="w-full lg:w-1/2">
            <SectionHeading
              title={service.title}
              centered={false}
            />
            <p className="text-accent-gray text-lg mb-8">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-primary-silver px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <Button size="lg">
              Request Consultation
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-lg blur-lg"></div>
              <img
                src={service.image}
                alt={service.title}
                className="relative rounded-lg w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Benefits */}
        <SectionHeading
          title="Key Benefits"
          subtitle="How our AI & machine learning solutions deliver measurable value to your business"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-accent-blue transition-all duration-300"
            >
              <div className="mb-4">
                {iconComponents[benefit.icon as keyof typeof iconComponents]}
              </div>
              <h3 className="font-heading text-xl text-primary-silver mb-3">{benefit.title}</h3>
              <p className="text-accent-gray">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceOverview;