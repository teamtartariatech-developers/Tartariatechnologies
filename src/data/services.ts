import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: 'AI & Machine Learning Solutions',
    description: 'We develop intelligent software solutions powered by advanced AI algorithms and machine learning models to automate processes, generate insights, and enhance user experiences.',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'Computer Vision', 'Natural Language Processing', 'Predictive Analytics'],
    benefits: [
      {
        title: 'Process Automation',
        description: 'Automate repetitive tasks and workflows using intelligent AI algorithms to increase productivity.',
        icon: 'LineChart'
      },
      {
        title: 'Intelligent Insights',
        description: 'Extract valuable insights from your data using machine learning models and predictive analytics.',
        icon: 'PieChart'
      },
      {
        title: 'Scalable AI Solutions',
        description: 'Build AI systems that scale with your business growth and adapt to changing requirements.',
        icon: 'Scale'
      },
      {
        title: 'Rapid Implementation',
        description: 'Quick deployment of AI solutions with minimal disruption to existing business operations.',
        icon: 'Timer'
      }
    ],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];