import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Digital Transformation for Manufacturing Giant',
    client: 'Industrial Innovations Ltd',
    industry: 'Manufacturing',
    challenge: 'Legacy systems causing 30% operational inefficiency and data silos preventing real-time decision making.',
    solution: 'Implemented cloud-based ERP system with IoT integration for real-time monitoring and predictive maintenance.',
    result: 'Achieved 40% reduction in downtime and 25% increase in production efficiency within 6 months.',
    metrics: [
      { label: 'Operational Efficiency', before: '70%', after: '95%' },
      { label: 'Downtime', before: '12 hours/week', after: '3 hours/week' },
      { label: 'Decision Latency', before: '48 hours', after: '15 minutes' }
    ],
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'AI-Powered Customer Experience Transformation',
    client: 'GlobalRetail Corp',
    industry: 'Retail',
    challenge: 'High customer churn (15%) and poor personalization leading to declining sales and brand loyalty.',
    solution: 'Deployed AI-driven customer analytics platform with personalized recommendation engine and omnichannel experience.',
    result: 'Reduced churn by 60% and increased average order value by 28% through personalized customer journeys.',
    metrics: [
      { label: 'Customer Churn', before: '15%', after: '6%' },
      { label: 'Avg. Order Value', before: '$75', after: '$96' },
      { label: 'Customer Satisfaction', before: '3.2/5', after: '4.6/5' }
    ],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Cloud Migration for Financial Services',
    client: 'Secure Financial Solutions',
    industry: 'Finance',
    challenge: 'High infrastructure costs and scalability issues preventing rapid product development and market entry.',
    solution: 'End-to-end cloud migration with microservices architecture and CI/CD pipeline implementation.',
    result: 'Reduced infrastructure costs by 40% and accelerated time-to-market for new features by 70%.',
    metrics: [
      { label: 'Infrastructure Cost', before: '$1.2M/year', after: '$720K/year' },
      { label: 'Deployment Frequency', before: 'Monthly', after: 'Daily' },
      { label: 'Time-to-Market', before: '6 months', after: '6 weeks' }
    ],
    image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];