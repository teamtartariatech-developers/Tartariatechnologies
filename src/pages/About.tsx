import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Team from '../components/about/Team';
import WhyUs from '../components/about/WhyUs';
import CallToAction from '../components/home/CallToAction';

const About: React.FC = () => {
  return (
    <>
      <section className="bg-primary-black pt-32 pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="w-full lg:w-1/2">
              <SectionHeading
                title="About Us"
                centered={false}
              />
              
              <div className="space-y-6 text-accent-gray">
                <p className="text-lg">
                  Founded in 2021, TechTransform has quickly established itself as India's leading tech strategy firm by consistently delivering measurable business outcomes through strategic technology implementation.
                </p>
                
                <p>
                  Our team combines expertise from industry giants like Google, Amazon, and McKinsey with deep domain knowledge across manufacturing, finance, healthcare, and retail sectors. This unique blend of technical prowess and business acumen allows us to bridge the gap between technology potential and business results.
                </p>
                
                <p>
                  Unlike traditional IT consultants who focus on lengthy implementations, our speed-first approach emphasizes rapid deployment and iterative improvement. We're not satisfied with marginal gains – we target transformative outcomes that fundamentally change how your business operates.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-lg blur-lg"></div>
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Our team"
                  className="relative rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
      
      <WhyUs />
      <Team />
      <CallToAction />
    </>
  );
};

export default About;