import React from 'react';
import Hero from '../components/home/Hero';
import PainPoints from '../components/home/PainPoints';
import Process from '../components/home/Process';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import TrustIndicators from '../components/home/TrustIndicators';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PainPoints />
      <Process />
      <TrustIndicators />
      <CaseStudiesPreview />
      <CallToAction />
    </>
  );
};

export default Home;