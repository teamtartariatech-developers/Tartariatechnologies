import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-accent-blue transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-accent-blue/90 text-black text-xs font-medium px-2.5 py-1 rounded">
            {caseStudy.industry}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-heading text-2xl text-primary-silver mb-2">
          {caseStudy.title}
        </h3>
        <p className="text-accent-gray text-sm mb-4 flex-grow">
          {caseStudy.challenge}
        </p>
        
        <div className="space-y-3 mb-4">
          <h4 className="text-primary-silver text-sm font-medium">Results:</h4>
          {caseStudy.metrics.map((metric, i) => (
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
          to={`/case-studies/${caseStudy.id}`}
          className="inline-flex items-center text-accent-blue hover:text-accent-purple transition-colors text-sm font-medium mt-auto"
        >
          View Details <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;