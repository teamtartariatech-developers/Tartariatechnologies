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
                  Founded in 2021, Tartaria Tech has established itself as a reliable IT software development company, specializing in AI/ML, cross-platform development, full-stack solutions, and innovative product development.
                </p>
                
                <p>
                  Our team of experienced developers and engineers brings expertise in modern technologies and frameworks. We focus on delivering high-quality software solutions that meet our clients' specific requirements and business objectives.
                </p>
                
                <p>
                  We believe in agile development methodologies, continuous communication with clients, and delivering solutions that are scalable, maintainable, and future-ready. Our commitment to quality and client satisfaction drives everything we do.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-lg blur-lg"></div>
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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