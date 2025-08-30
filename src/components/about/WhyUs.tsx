import React from 'react';
import { motion } from 'framer-motion';
import { Zap, LineChart, Clock, Users, Lock, Lightbulb } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const differentiators = [
  {
    icon: <Zap className="h-6 w-6 text-accent-blue" />,
    title: 'Speed-First Approach',
    description: 'Our methodology delivers results 60% faster than traditional IT consultancies, without compromising quality.'
  },
  {
    icon: <LineChart className="h-6 w-6 text-accent-blue" />,
    title: 'Measurable Outcomes',
    description: 'Every solution is tied to specific business KPIs with transparent tracking and reporting.'
  },
  {
    icon: <Clock className="h-6 w-6 text-accent-blue" />,
    title: 'Rapid Prototyping',
    description: 'We build working prototypes in days, not months, allowing for faster validation and iteration.'
  },
  {
    icon: <Users className="h-6 w-6 text-accent-blue" />,
    title: 'Cross-Industry Expertise',
    description: 'Our team brings experience from Fortune 500 companies across manufacturing, finance, healthcare, and retail sectors.'
  },
  {
    icon: <Lock className="h-6 w-6 text-accent-blue" />,
    title: 'Security by Design',
    description: 'Enterprise-grade security protocols embedded in all solutions from the ground up.'
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-accent-blue" />,
    title: 'Continuous Innovation',
    description: 'Dedicated R&D team constantly exploring emerging technologies for practical business applications.'
  }
];

const WhyUs: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <SectionHeading
              title="Why Choose Us"
              subtitle="What sets us apart from traditional technology consultancies"
              centered={false}
            />
            
            <p className="text-accent-gray mb-6">
              In a landscape cluttered with technology consultants who deliver incremental improvements, we stand apart as true transformation catalysts. Our approach combines deep technical expertise with business strategy to deliver rapid, measurable results.
            </p>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-20"></div>
              <div className="relative bg-primary-black border border-gray-800 rounded-lg p-8">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Zap className="h-8 w-8 text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-primary-silver mb-2">Our Guarantee</h3>
                    <p className="text-accent-gray">
                      If we don't deliver measurable improvement within the first 30 days, we'll continue working at no additional cost until we achieve the agreed metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-primary-black border border-gray-800 rounded-lg p-6 hover:border-accent-blue transition-all duration-300"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-heading text-lg text-primary-silver mb-2">{item.title}</h3>
                  <p className="text-accent-gray text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;