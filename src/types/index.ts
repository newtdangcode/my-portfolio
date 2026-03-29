export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  about: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  description?: string;
}


export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string;
  skills: string[];
  projects?: {
    name: string;
    description: string;
    responsibilities: string;
    technologies: string[];
  }[];
}

export interface Project {
  name: string;
  slug: string;
  period: string;
  type: string;
  description: string[];
  responsibilities?: string;
  technologies: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  topSkills?: { name: string; progress: string }[];
}

export interface Specialization {
  title: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Achievement {
  title: string;
  description: string;
}
