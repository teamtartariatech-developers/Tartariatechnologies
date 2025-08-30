import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CaseStudyDetail from '../components/case-studies/CaseStudyDetail';
import { caseStudies } from '../data/caseStudies';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const caseStudy = caseStudies.find(study => study.id === Number(id));
  
  useEffect(() => {
    // Redirect to case studies if the ID doesn't exist
    if (!caseStudy) {
      navigate('/case-studies');
    }
    
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }, [caseStudy, navigate]);
  
  if (!caseStudy) {
    return null;
  }
  
  return (
    <div className="pt-24">
      <CaseStudyDetail caseStudy={caseStudy} />
    </div>
  );
};

export default CaseStudyPage;