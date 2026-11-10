export type ProjectCategory = 'all' | 'angular' | 'fullstack' | 'devtools';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: string;
  fallbackGradient: string;
  summary: string;
  technologies: string[];
  metrics: ProjectMetric[];
  demoUrl?: string;
  githubUrl?: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    angularArchitecture: string;
    keyFeatures: string[];
    codeSnippet?: {
      title: string;
      code: string;
    };
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  honors?: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  inquiryType: 'fulltime' | 'consulting' | 'angular21' | 'general';
  timeline: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}
