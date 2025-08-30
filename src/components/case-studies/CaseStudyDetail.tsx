import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import Container from '../ui/Container';
import { CaseStudy } from '../../types';

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ caseStudy }) => {
  return (
    <section className="bg-primary-black py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-accent-blue/20 border border-accent-blue/30 text-accent-blue px-3 py-1 rounded-full text-sm mb-4">
              {caseStudy.industry}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-silver mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-accent-gray text-xl max-w-3xl">
              Client: <span className="text-primary-silver">{caseStudy.client}</span>
            </p>
          </div>
          
          {/* Image and Quick Facts */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            <div className="w-full lg:w-2/3">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-lg blur-md"></div>
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="relative w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full">
                <h3 className="font-heading text-2xl text-primary-silver mb-6">
                  Key Metrics
                </h3>
                
                {caseStudy.metrics.map((metric, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <p className="text-accent-gray mb-2">{metric.label}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <AlertTriangle className="h-4 w-4 text-error-DEFAULT mr-2" />
                        <span className="text-error-DEFAULT line-through text-lg">
                          {metric.before}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent-green mr-2" />
                        <span className="text-accent-green text-lg font-medium">
                          {metric.after}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Challenge, Solution, Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-accent-blue" />
              </div>
              <h3 className="font-heading text-2xl text-primary-silver mb-4">
                Challenge
              </h3>
              <p className="text-accent-gray">
                {caseStudy.challenge}
              </p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-accent-purple" />
              </div>
              <h3 className="font-heading text-2xl text-primary-silver mb-4">
                Solution
              </h3>
              <p className="text-accent-gray">
                {caseStudy.solution}
              </p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-accent-green" />
              </div>
              <h3 className="font-heading text-2xl text-primary-silver mb-4">
                Results
              </h3>
              <p className="text-accent-gray">
                {caseStudy.result}
              </p>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <h3 className="font-heading text-2xl text-primary-silver mb-6">
              Implementation Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-800"></div>
              
              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-gray-800 border-4 border-primary-black flex items-center justify-center">
                    <span className="text-xs text-accent-blue">1</span>
                  </div>
                  <h4 className="text-primary-silver font-medium">Week 1-2: Analysis & Strategy</h4>
                  <p className="text-accent-gray text-sm">
                    Conducted comprehensive technology audit and business process analysis. 
                    Identified key bottlenecks and developed transformation roadmap.
                  </p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-gray-800 border-4 border-primary-black flex items-center justify-center">
                    <span className="text-xs text-accent-purple">2</span>
                  </div>
                  <h4 className="text-primary-silver font-medium">Week 3-6: Solution Development</h4>
                  <p className="text-accent-gray text-sm">
                    Built and tested custom technology solution with integrated data pipelines.
                    Developed migration strategy for minimal disruption.
                  </p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-gray-800 border-4 border-primary-black flex items-center justify-center">
                    <span className="text-xs text-accent-green">3</span>
                  </div>
                  <h4 className="text-primary-silver font-medium">Week 7-10: Implementation & Training</h4>
                  <p className="text-accent-gray text-sm">
                    Deployed solution in phases with 24/7 support team.
                    Conducted comprehensive training and developed custom documentation.
                  </p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-gray-800 border-4 border-primary-black flex items-center justify-center">
                    <span className="text-xs text-accent-blue">4</span>
                  </div>
                  <h4 className="text-primary-silver font-medium">Week 11+: Ongoing Optimization</h4>
                  <p className="text-accent-gray text-sm">
                    Established continuous monitoring and performance optimization protocols.
                    Quarterly strategic reviews to ensure alignment with business objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CaseStudyDetail;