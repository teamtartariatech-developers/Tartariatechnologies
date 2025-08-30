import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, position, company, image, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start mb-6">
        <div className="mr-4 flex-shrink-0">
          <img 
            src={image} 
            alt={author}
            className="w-16 h-16 object-cover rounded-full border-2 border-primary-100"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{author}</h3>
          <p className="text-gray-600">{position}, {company}</p>
        </div>
      </div>
      
      <div className="mb-4 text-primary-500">
        <Quote size={32} className="opacity-30" />
      </div>
      
      <p className="text-gray-700 mb-4">"{quote}"</p>
    </motion.div>
  );
};

const TestimonialsList: React.FC = () => {
  const testimonials = [
    {
      quote: "Aretex-ai transformed our business with their AI-powered solution. The team's expertise and dedication exceeded our expectations at every step. We saw a 40% increase in operational efficiency within just two months.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechVision Inc.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "The mobile app developed by Aretex-ai increased our customer engagement by 200%. Their approach to UX design is truly exceptional. The team was responsive, professional, and delivered on time and on budget.",
      author: "Michael Chen",
      position: "Product Manager",
      company: "Innovate Solutions",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "Working with Aretex-ai was seamless from start to finish. Their cross-platform development capabilities saved us time and resources. The solution they built continues to be a cornerstone of our digital strategy.",
      author: "Emily Rodriguez",
      position: "CTO",
      company: "NextGen Enterprises",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "The website redesign by Aretex-ai gave our brand the modern, professional look we needed. Their team took the time to understand our goals and delivered a site that perfectly represents our company's values.",
      author: "David Kim",
      position: "Marketing Director",
      company: "Global Solutions Ltd.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "Our AI chatbot developed by Aretex-ai has revolutionized our customer service. It handles 70% of inquiries automatically, allowing our team to focus on more complex issues. The ROI has been incredible.",
      author: "Jessica Martinez",
      position: "Customer Success Manager",
      company: "ServiceFirst Co.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "Aretex-ai's cybersecurity audit identified critical vulnerabilities that other vendors missed. Their comprehensive approach to security has given us peace of mind and protected our sensitive data.",
      author: "Robert Thompson",
      position: "IT Director",
      company: "SecureBank Financial",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsList;