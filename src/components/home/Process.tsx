import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-accent-blue" />,
    title: 'Analyze',
    description: 'We analyze your requirements, current systems, and business objectives to design the optimal solution architecture.',
    highlights: ['Requirements gathering', 'Technology assessment', 'Architecture planning', 'Risk analysis']
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent-purple" />,
    title: 'Develop',
    description: 'Our expert developers build robust, scalable solutions using cutting-edge technologies and best practices.',
    highlights: ['Agile development', 'Code quality assurance', 'Continuous integration', 'Regular testing']
  },
  {
    icon: <Rocket className="h-10 w-10 text-accent-green" />,
    title: 'Deploy',
    description: 'We deploy your solution with comprehensive testing, training, and ongoing support for seamless operation.',
    highlights: ['Production deployment', 'User training', 'Documentation', 'Ongoing support']
  }
];

const Process: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-primary-black to-gray-900 py-20">
      <Container>
        <SectionHeading
          title="Our Process"
          subtitle="Our proven development methodology ensures quality delivery and client satisfaction"
          centered
        />
        
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-green transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`flex flex-col md:flex-row md:items-center gap-8 md:gap-0 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline circle */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                  <div className={`h-16 w-16 rounded-full flex items-center justify-center z-10 ${
                    index === 0 ? 'bg-accent-blue' : index === 1 ? 'bg-accent-purple' : 'bg-accent-green'
                  }`}>
                    <span className="font-heading text-2xl text-black">{index + 1}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-accent-blue/10 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="md:hidden bg-gradient-to-r from-gray-800 to-gray-900 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                        <span className="font-heading text-xl text-white">{index + 1}</span>
                      </div>
                      <div>
                        <div className="mb-4">{step.icon}</div>
                        <h3 className="font-heading text-3xl text-primary-silver">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-accent-gray mb-6">{step.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-primary-silver flex items-center">
                          <span className={`h-1.5 w-1.5 rounded-full mr-2 ${
                            index === 0 ? 'bg-accent-blue' : index === 1 ? 'bg-accent-purple' : 'bg-accent-green'
                          }`}></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer div */}
                <div className="md:w-[calc(50%-3rem)]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;