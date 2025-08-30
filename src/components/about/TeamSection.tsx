import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, bio, socialLinks, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-center space-x-3">
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin} 
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter} 
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Twitter size={18} />
                </a>
              )}
              {socialLinks.github && (
                <a 
                  href={socialLinks.github} 
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-primary-600 mb-3">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  );
};

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Alexander Chen",
      position: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "With over 15 years of experience in software development and AI, Alex leads our vision to transform businesses through technology.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sophia Rodriguez",
      position: "CTO",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Sophia oversees our technical strategy and ensures we stay at the cutting edge of AI and software development.",
      socialLinks: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      position: "Head of AI Research",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "David leads our AI initiatives, bringing expertise in machine learning and natural language processing.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Emily Johnson",
      position: "Lead UX Designer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Emily crafts beautiful, intuitive interfaces that enhance user experience across all our products.",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Meet Our <span className="text-primary-600">Team</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A group of passionate experts dedicated to your success
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              bio={member.bio}
              socialLinks={member.socialLinks}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TeamSection;