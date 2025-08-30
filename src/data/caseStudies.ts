import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'AI-Powered Hotel Management System',
    client: 'Luxury Resort Chain',
    industry: 'Hospitality',
    challenge: 'Manual booking processes and poor guest experience management leading to operational inefficiencies.',
    solution: 'Developed comprehensive PMS with AI-powered guest preferences and automated booking management.',
    result: 'Increased booking efficiency by 60% and improved guest satisfaction scores significantly.',
    metrics: [
      { label: 'Booking Efficiency', before: '40%', after: '95%' },
      { label: 'Guest Satisfaction', before: '3.2/5', after: '4.8/5' },
      { label: 'Processing Time', before: '15 minutes', after: '2 minutes' }
    ],
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Cross-Platform E-Learning Application',
    client: 'EduTech Solutions',
    industry: 'Education',
    challenge: 'Need for a unified learning platform across mobile and web with offline capabilities.',
    solution: 'Built cross-platform application using React Native and Progressive Web App technologies.',
    result: 'Achieved 80% user engagement increase and seamless learning experience across all devices.',
    metrics: [
      { label: 'User Engagement', before: '45%', after: '80%' },
      { label: 'Platform Coverage', before: '2 platforms', after: '5 platforms' },
      { label: 'Development Time', before: '12 months', after: '6 months' }
    ],
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Full-Stack E-Commerce Platform',
    client: 'RetailTech Startup',
    industry: 'E-Commerce',
    challenge: 'Building a scalable e-commerce platform with real-time inventory and payment processing.',
    solution: 'Developed full-stack solution with React frontend, Node.js backend, and cloud infrastructure.',
    result: 'Successfully launched platform handling 10,000+ concurrent users with 99.9% uptime.',
    metrics: [
      { label: 'Concurrent Users', before: '500', after: '10,000+' },
      { label: 'System Uptime', before: '95%', after: '99.9%' },
      { label: 'Load Time', before: '5 seconds', after: '1.2 seconds' }
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];