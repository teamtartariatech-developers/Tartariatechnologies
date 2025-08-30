import React, { useEffect } from 'react';
import TestimonialsBanner from '../components/testimonials/TestimonialsBanner';
import TestimonialsList from '../components/testimonials/TestimonialsList';
import CTASection from '../components/home/CTASection';

const Testimonials: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Client Testimonials | Aretex-ai';
  }, []);

  return (
    <>
      <TestimonialsBanner />
      <TestimonialsList />
      <CTASection />
    </>
  );
};

export default Testimonials;