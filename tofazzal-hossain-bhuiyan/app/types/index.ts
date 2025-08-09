// Core types for the CEO Portfolio application

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  company: string;
  email: string;
  phone?: string;
  location?: string;
}

export interface SocialLinks {
  linkedin: string;
  twitter: string;
  website: string;
}

export interface SkillData {
  name: string;
  level: number;
  gradient: string;
}

export interface MetricData {
  number: string;
  label: string;
  icon: string;
  color: string;
  description?: string;
}

export interface ExpertiseArea {
  title: string;
  description: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface Publication {
  type: 'journal' | 'conference' | 'book';
  title: string;
  journal: string;
  year: string;
  authors: string;
  impact: string;
  citations: string;
  category: string;
  abstract: string;
  link: string;
  featured?: boolean;
}

export interface VisionPillar {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  metrics: Array<{
    label: string;
    target: string;
    timeline: string;
  }>;
  initiatives: string[];
}

export interface GlobalImpact {
  region: string;
  focus: string;
  impact: string;
  icon: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  category: string;
  icon: string;
  color: string;
  details: string[];
}

export interface Experience {
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

// Animation and UI types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
}

export interface SectionVisibility {
  isVisible: boolean;
  visibleElements: number[];
}

// Utility types
export type ColorVariant = 
  | 'emerald' 
  | 'blue' 
  | 'purple' 
  | 'orange' 
  | 'pink' 
  | 'cyan' 
  | 'teal' 
  | 'yellow';

export type SectionId = 
  | 'home' 
  | 'about' 
  | 'expertise' 
  | 'experience' 
  | 'achievements' 
  | 'publications' 
  | 'vision' 
  | 'contact';
