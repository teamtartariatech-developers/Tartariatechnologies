import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Code, 
  CheckCircle, 
  Rocket, 
  RotateCcw 
} from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';

interface SDLCStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const SDLCStep: React.FC<SDLCStepProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative mb-4">
        <div className="w-20 h-20 flex items-center justify-center bg-primary-50 text-primary-600 rounded-full border-4 border-white shadow-lg z-10">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </motion.div>
  );
};

const SDLCProcess: React.FC = () => {
  const steps = [
    {
      icon: <Search size={32} />,
      title: "Requirements Gathering",
      description: "We conduct thorough analysis to understand client needs, goals, and constraints."
    },
    {
      icon: <FileText size={32} />,
      title: "Planning & Design",
      description: "Creating detailed specifications, architecture plans, and design mockups."
    },
    {
      icon: <Code size={32} />,
      title: "Development",
      description: "Writing clean, efficient code following best practices and industry standards."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Testing",
      description: "Rigorous quality assurance to ensure functionality, performance, and security."
    },
    {
      icon: <Rocket size={32} />,
      title: "Deployment",
      description: "Smooth implementation to production environments with minimal disruption."
    },
    {
      icon: <RotateCcw size={32} />,
      title: "Maintenance & Support",
      description: "Ongoing updates, monitoring, and continuous improvement."
    }
  ];

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
            Our Software Development <span className="text-primary-600">Life Cycle</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A disciplined, structured approach to delivering high-quality software solutions
          </motion.p>
        </div>

        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-primary-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <SDLCStep 
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SDLCProcess;