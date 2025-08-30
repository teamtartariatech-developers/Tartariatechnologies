import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { team } from '../../data/team';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Team: React.FC = () => {
  return (
    <section className="bg-primary-black py-20">
      <Container>
        <SectionHeading
          title="Our Leadership Team"
          subtitle="Meet the experts behind India's fastest tech transformation"
          centered
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                    <a href="#" className="bg-accent-blue/20 hover:bg-accent-blue/30 p-2 rounded-full text-primary-silver hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-accent-blue/20 hover:bg-accent-blue/30 p-2 rounded-full text-primary-silver hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl text-primary-silver mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-blue text-sm mb-4">{member.role}</p>
                <p className="text-accent-gray text-sm line-clamp-4">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Team;