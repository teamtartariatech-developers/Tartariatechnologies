import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  LineChart, 
  Smartphone, 
  Layout, 
  Monitor, 
  PenTool, 
  RefreshCw, 
  Database, 
  Shield
} from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, features, index }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary-200 transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-6">
        <div className="mr-4 p-3 bg-primary-50 text-primary-600 rounded-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-primary-600 mr-2">•</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServicesList: React.FC = () => {
  const services = [
    {
      icon: <Layout size={28} />,
      title: "Website Development",
      description: "Custom websites tailored to your business goals with responsive design and SEO optimization.",
      features: [
        "Responsive websites that work on all devices",
        "Custom designs that match your brand identity",
        "SEO optimization for better visibility",
        "Fast loading and performance optimized"
      ]
    },
    {
      icon: <RefreshCw size={28} />,
      title: "Website Maintenance",
      description: "Keep your website secure, up-to-date, and performing optimally with our maintenance services.",
      features: [
        "Regular security updates and patches",
        "Performance monitoring and optimization",
        "Content updates and management",
        "Technical support and troubleshooting"
      ]
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps with intuitive interfaces and powerful functionality.",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions for broader reach",
        "Intuitive user interfaces with modern design",
        "Integration with device features and APIs"
      ]
    },
    {
      icon: <LineChart size={28} />,
      title: "AI Solutions",
      description: "Leverage the power of AI to optimize operations, analyze data, and deliver personalized experiences.",
      features: [
        "Machine learning models tailored to your needs",
        "Natural language processing for better communication",
        "Computer vision solutions for image analysis",
        "Predictive analytics for data-driven decisions"
      ]
    },
    {
      icon: <PenTool size={28} />,
      title: "UI/UX Design",
      description: "Human-centered design that delights users while achieving your business objectives.",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Interactive designs with modern aesthetics",
        "Usability testing and iteration"
      ]
    },
    {
      icon: <Monitor size={28} />,
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with efficient cross-platform development solutions.",
      features: [
        "Single codebase for multiple platforms",
        "Reduced development time and costs",
        "Consistent user experience across platforms",
        "Easier maintenance and updates"
      ]
    },
    {
      icon: <Database size={28} />,
      title: "Database Solutions",
      description: "Robust database architectures that securely store and efficiently manage your data.",
      features: [
        "Database design and optimization",
        "Data migration and integration",
        "Performance tuning and scaling",
        "Backup and recovery solutions"
      ]
    },
    {
      icon: <Shield size={28} />,
      title: "Cybersecurity Services",
      description: "Protect your digital assets with comprehensive security assessments and solutions.",
      features: [
        "Security audits and vulnerability assessments",
        "Secure coding practices implementation",
        "Authentication and authorization systems",
        "Data encryption and protection"
      ]
    },
    {
      icon: <Code size={28} />,
      title: "Custom Software Development",
      description: "Tailored software solutions that address your specific business challenges and requirements.",
      features: [
        "Requirements analysis and planning",
        "Agile development methodology",
        "Regular updates and transparent communication",
        "Thorough testing and quality assurance"
      ]
    }
  ];

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ServicesList;