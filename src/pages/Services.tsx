import React from 'react';
import ServiceOverview from '../components/services/ServiceOverview';
import CallToAction from '../components/home/CallToAction';
import { services } from '../data/services';

const Services: React.FC = () => {
  return (
    <>
      <ServiceOverview service={services[0]} />
      <CallToAction />
    </>
  );
};

export default Services;