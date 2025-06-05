export interface Project {
  title: string;
  period: string;
  description: string;
  fullDescription: string;
  tech: string[];
  liveUrl: string | null;
  repoUrl: string;
  images: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
}

export interface Research {
  title: string;
  journal: string;
  period: string;
  abstract: string;
  pdfUrl: string;
}

export interface Volunteering {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  name: string;
  href: string;
} 