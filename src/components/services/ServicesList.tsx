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
      icon: <LineChart size={28} />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by advanced AI algorithms and machine learning models.",
      features: [
        "Custom machine learning models",
        "Natural language processing solutions",
        "Computer vision and image recognition",
        "Predictive analytics and data insights"
      ]
    },
    {
      icon: <Smartphone size={28} />,
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with modern cross-platform technologies.",
      features: [
        "React Native mobile applications",
        "Flutter cross-platform solutions",
        "Progressive Web Applications (PWA)",
        "Desktop applications with Electron"
      ]
    },
    {
      icon: <Code size={28} />,
      title: "Full-Stack Development",
      description: "Complete web application development from frontend to backend infrastructure.",
      features: [
        "Modern frontend frameworks (React, Vue, Angular)",
        "Backend development (Node.js, Python, Java)",
        "Database design and optimization",
        "Cloud deployment and DevOps"
      ]
    },
    {
      icon: <Layout size={28} />,
      title: "Product Development",
      description: "End-to-end product development from concept to market-ready solutions.",
      features: [
        "Product strategy and roadmap planning",
        "MVP development and rapid prototyping",
        "User experience design and testing",
        "Scalable architecture and deployment"
      ]
    },
  ];

  const products = [
    {
      icon: <Monitor size={28} />,
      title: "Property Management System (PMS)",
      description: "Comprehensive hotel and resort management solution with booking, billing, and operations management.",
      features: [
        "Room booking and reservation management",
        "Guest check-in/check-out automation",
        "Billing and payment processing",
        "Housekeeping and maintenance tracking"
      ]
    },
    {
      icon: <PenTool size={28} />,
      title: "AI LLM Chatbot",
      description: "Intelligent conversational AI powered by large language models for customer support and engagement.",
      features: [
        "Natural language understanding and responses",
        "Multi-language support and translation",
        "Integration with existing systems and databases",
        "24/7 automated customer support"
      ]
    }
  ];

  return (
    <Section>
      <Container>
        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
            Professional software development services tailored to your business needs
          ))}
        </div>
        
        {/* Products Section */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span className="text-primary-600">Products</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready-to-deploy software products designed for specific industry needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ServiceCard 
              key={`product-${index}`}
              icon={product.icon}
              title={product.title}
              description={product.description}
              features={product.features}
              index={index + services.length}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">