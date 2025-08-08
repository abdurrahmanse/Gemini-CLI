// Data loader utility for importing JSON data
import personalInfoData from '~/data/personal-info.json';
import socialLinksData from '~/data/social-links.json';
import skillsData from '~/data/skills.json';
import navigationData from '~/data/navigation.json';
import expertiseData from '~/data/expertise.json';
import experienceData from '~/data/experience.json';
import achievementsData from '~/data/achievements.json';
import visionData from '~/data/vision.json';

import type { PersonalInfo, SocialLinks, NavigationItem } from '~/types';

// Personal Information
export const PERSONAL_INFO: PersonalInfo = personalInfoData;

// Social Media Links
export const SOCIAL_LINKS: SocialLinks = socialLinksData;

// Skills Data
export const SKILLS_DATA = skillsData;

// Navigation Menu Items
export const NAVIGATION_ITEMS: NavigationItem[] = navigationData;

// Expertise Areas
export const EXPERTISE_AREAS = expertiseData;

// Experience Data
export const EXPERIENCE_DATA = experienceData;

// Achievements Data
export const ACHIEVEMENTS_DATA = achievementsData;

// Vision Data
export const VISION_DATA = visionData;

// Hero Section Taglines
export const HERO_TAGLINES = [
  'Pioneering Healthcare Innovation',
  'Advancing Medical Excellence',
  'Transforming Lives Through Leadership',
  'Building Sustainable Healthcare'
];

// Professional Credentials
export const CREDENTIALS = [
  'MD, Healthcare Management',
  'Pharmaceutical Leadership',
  'Public Health Advocate'
];

// Color Gradients
export const GRADIENTS = {
  emerald: 'from-emerald-500 to-teal-500',
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  orange: 'from-orange-500 to-red-500',
  teal: 'from-teal-500 to-green-500',
  cyan: 'from-cyan-500 to-blue-500',
  yellow: 'from-yellow-400 to-orange-500'
} as const;

// Animation Durations
export const ANIMATION_DURATIONS = {
  fast: 300,
  normal: 500,
  slow: 1000,
  typewriter: 100,
  typewriterPause: 2000
} as const;

// Intersection Observer Thresholds
export const OBSERVER_THRESHOLDS = {
  sections: 0.2,
  elements: 0.1
} as const;
