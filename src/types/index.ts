export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: {
    label: string;
    before: string;
    after: string;
  }[];
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  image: string;
}