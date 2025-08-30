import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, DollarSign, FileQuestion } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const painPoints = [
  {
    icon: <Clock className="h-8 w-8 text-accent-blue" />,
    title: 'Slow Time-to-Market',
    description: 'Traditional development cycles taking 6-12 months, causing missed market opportunities and competitive disadvantage.'
  },
  {
    icon: <DollarSign className="h-8 w-8 text-accent-blue" />,
    title: 'Rising Tech Costs',
    description: 'Inefficient infrastructure and legacy systems draining 30-40% more resources than modern cloud alternatives.'
  },
  {
    icon: <FileQuestion className="h-8 w-8 text-accent-blue" />,
    title: 'Digital Strategy Gaps',
    description: 'Disjointed technology investments without clear ROI metrics or alignment with business objectives.'
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-accent-blue" />,
    title: 'Tech Talent Shortage',
    description: 'Difficulty finding and retaining specialized technical talent for implementation and maintenance.'
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
          title="Common Tech Challenges"
          subtitle="We solve these critical pain points for businesses looking to accelerate their digital transformation"
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