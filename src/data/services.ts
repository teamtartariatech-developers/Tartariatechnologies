import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Enterprise Digital Transformation',
    description: 'We create holistic technology strategies that align with your business goals, leveraging cloud computing, AI, and modern web technologies to drive efficiency and innovation.',
    technologies: ['Cloud Migration', 'AI/ML Implementation', 'Process Automation', 'Data Analytics', 'Web Applications'],
    benefits: [
      {
        title: 'Operational Efficiency',
        description: 'Reduce operational costs by up to 40% through process automation and cloud optimization.',
        icon: 'LineChart'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Transform raw data into actionable insights with custom analytics dashboards and AI-powered recommendations.',
        icon: 'PieChart'
      },
      {
        title: 'Scalable Infrastructure',
        description: 'Build future-proof technology foundations that grow with your business needs without exponential cost increases.',
        icon: 'Scale'
      },
      {
        title: 'Faster Time-to-Market',
        description: 'Accelerate product development cycles by up to 70% with modern CI/CD pipelines and agile methodologies.',
        icon: 'Timer'
      }
    ],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];