import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, DollarSign, FileQuestion } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const painPoints = [
  {
    icon: <Clock className="h-8 w-8 text-accent-blue" />,
    title: 'Outdated Technology Stack',
    description: 'Legacy systems and outdated technologies limiting business growth and operational efficiency.'
  },
  {
    icon: <DollarSign className="h-8 w-8 text-accent-blue" />,
    title: 'High Development Costs',
    description: 'Expensive development cycles and maintenance costs due to inefficient processes and technologies.'
  },
  {
    icon: <FileQuestion className="h-8 w-8 text-accent-blue" />,
    title: 'Lack of AI Integration',
    description: 'Missing opportunities to leverage AI and machine learning for business automation and insights.'
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-accent-blue" />,
    title: 'Platform Fragmentation',
    description: 'Separate development for different platforms leading to increased costs and maintenance overhead.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PainPoints: React.FC = () => {
  return (
    <section className="bg-primary-black py-20">
      <Container>
        <SectionHeading
          title="Technology Challenges"
          subtitle="Common software development and technology challenges we help businesses overcome"
          centered
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-primary-black border border-gray-800 rounded-xl p-8 hover:border-accent-blue transition-all duration-300 group"
            >
              <div className="flex items-start">
                <div className="bg-gray-900 p-4 rounded-lg mr-4 group-hover:bg-gray-800 transition-colors duration-300">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl text-primary-silver mb-2">{point.title}</h3>
                  <p className="text-accent-gray">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default PainPoints;