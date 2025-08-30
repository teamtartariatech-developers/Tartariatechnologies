import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Briefcase } from 'lucide-react';
import Container from '../ui/Container';

interface MetricProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const Metric: React.FC<MetricProps> = ({ icon, value, label, delay }) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="mb-4 p-3 bg-primary-50 text-primary-600 rounded-full">
        {icon}
      </div>
      <h3 className="text-3xl font-display font-bold text-primary-900 mb-2">{value}</h3>
      <p className="text-gray-600 text-center">{label}</p>
    </motion.div>
  );
};

const Metrics: React.FC = () => {
  const metrics = [
    {
      icon: <Users size={32} />,
      value: "30+",
      label: "Satisfied Clients",
      delay: 0
    },
    {
      icon: <Briefcase size={32} />,
      value: "50+",
      label: "Completed Projects",
      delay: 0.2
    },
    {
      icon: <CheckCircle size={32} />,
      value: "10+",
      label: "Expert Engineers",
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Metric 
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              delay={metric.delay}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Metrics;