import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id = '',
  animate = true
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  if (animate) {
    return (
      <motion.section
        ref={ref}
        id={id}
        className={`py-16 md:py-24 ${className}`}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
};

export default Section;