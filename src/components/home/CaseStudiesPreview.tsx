import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { caseStudies } from '../../data/caseStudies';

const CaseStudiesPreview: React.FC = () => {
  return (
    <section className="bg-primary-black py-20">
      <Container>
        <SectionHeading
          title="Success Stories"
          subtitle="Real-world transformation results from our clients"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.slice(0, 3).map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-accent-blue transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-accent-blue/90 text-black text-xs font-medium px-2.5 py-1 rounded">
                    {study.industry}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl text-primary-silver mb-2 line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-accent-gray text-sm mb-4 line-clamp-3">
                  {study.challenge}
                </p>
                
                <div className="space-y-2 mb-4">
                  {study.metrics.slice(0, 2).map((metric, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-accent-gray">{metric.label}:</span>
                      <div className="flex items-center">
                        <span className="text-error-DEFAULT line-through mr-2">{metric.before}</span>
                        <span className="text-accent-green">{metric.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-accent-blue hover:text-accent-purple transition-colors text-sm font-medium"
                >
                  View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/case-studies"
            className="inline-block border border-accent-blue text-accent-blue px-6 py-2 rounded-lg font-medium hover:text-accent-purple hover:border-accent-purple transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudiesPreview;