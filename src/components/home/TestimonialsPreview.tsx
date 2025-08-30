import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Aretex-ai transformed our business with their AI-powered solution. The team's expertise and dedication exceeded our expectations at every step.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechVision Inc.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    quote: "The mobile app developed by Aretex-ai increased our customer engagement by 200%. Their approach to UX design is truly exceptional.",
    author: "Michael Chen",
    position: "Product Manager",
    company: "Innovate Solutions",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    quote: "Working with Aretex-ai was seamless from start to finish. Their cross-platform development capabilities saved us time and resources.",
    author: "Emily Rodriguez",
    position: "CTO",
    company: "NextGen Enterprises",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

const TestimonialsPreview: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our <span className="text-primary-600">Clients</span> Say
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Success stories from businesses we've helped transform
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].author}
                  className="w-32 h-32 md:w-full md:h-auto object-cover rounded-full md:rounded-lg mx-auto shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <div className="mb-6 text-primary-500">
                  <Quote size={48} className="opacity-30" />
                </div>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[current].author}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[current].position}, {testimonials[current].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${
                    current === index ? 'bg-primary-600' : 'bg-gray-300'
                  } transition-colors`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button to="/testimonials" variant="outline">
            View All Testimonials
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsPreview;