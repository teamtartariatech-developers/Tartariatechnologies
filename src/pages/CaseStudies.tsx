import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import CaseStudyCard from '../components/case-studies/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const CaseStudies: React.FC = () => {
  return (
    <section className="bg-primary-black pt-32 pb-20">
      <Container>
        <SectionHeading
          title="Case Studies"
          subtitle="Real-world examples of how we've transformed businesses through technology"
          centered
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study) => (
            <motion.div key={study.id} variants={item}>
              <CaseStudyCard caseStudy={study} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default CaseStudies;