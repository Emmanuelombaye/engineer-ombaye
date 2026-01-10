/**
 * Skills Data - Senior Full-Stack & WordPress Developer
 * Organized by category for freelance clients, agencies, and recruiters
 */

// WordPress Development Skills (Primary Category)
export const wordPressSkills = [
  'Custom WordPress Theme Development',
  'Custom Plugin Development',
  'WooCommerce Development & Customization',
  'WordPress REST API',
  'Gutenberg Block Development',
  'Performance Optimization (Core Web Vitals)',
  'Security Hardening & Malware Cleanup',
  'SEO Optimization (Technical SEO)',
  'Website Migration & Hosting Setup',
  'Maintenance, Updates & Backups',
]

// Frontend Development Skills
export const frontendSkills = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Responsive & Mobile-First Design',
  'Accessibility (WCAG)',
  'UI Performance Optimization',
]

// Backend Development Skills
export const backendSkills = [
  'Node.js',
  'Express',
  'Django',
  'Flask',
  'FastAPI',
  'REST APIs',
  'GraphQL',
  'Authentication & Authorization',
  'Server-Side Rendering',
]

// Full-Stack Engineering Skills
export const fullStackSkills = [
  'End-to-End System Design',
  'Role-Based Dashboards',
  'Payment Integrations (Stripe, PayPal)',
  'Real-Time Applications',
  'Deployment Pipelines',
  'Microservices Architecture',
  'API Gateway Design',
]

// Databases & Data Management
export const databaseSkills = [
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Database Design & Optimization',
  'Query Optimization',
  'Data Migrations & Backups',
  'Data Modeling',
]

// Cloud & DevOps
export const cloudDevOpsSkills = [
  'AWS (EC2, S3, Lambda, RDS)',
  'Azure',
  'Docker & Containerization',
  'CI/CD Pipelines',
  'Linux Servers',
  'Nginx Configuration',
  'Serverless Architecture',
  'Infrastructure as Code',
]

// AI, Automation & Scripting
export const automationSkills = [
  'Python Automation',
  'Web Scraping (Selenium, Playwright)',
  'AI Chatbots',
  'LLM API Integrations',
  'Workflow Automation',
  'API Automation',
  'Bot Development',
]

// Software Testing & QA
export const testingSkills = [
  'Unit Testing (Jest, PyTest)',
  'Integration Testing',
  'End-to-End Testing',
  'Performance Testing',
  'Test-Driven Development (TDD)',
  'Test Documentation',
]

// Professional & Freelancing Skills
export const professionalSkills = [
  'Client Communication',
  'Requirement Analysis',
  'Proposal Writing',
  'Project Estimation',
  'Technical Documentation',
  'Code Reviews & Best Practices',
  'Agile/Scrum Methodologies',
  'Version Control (Git)',
]

// Skill Category Configuration
export interface SkillCategory {
  id: string
  title: string
  skills: string[]
  color: {
    bg: string
    text: string
    border: string
    accent: string
  }
  emphasis?: boolean
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'wordpress',
    title: 'WordPress Development',
    icon: '🎨',
    skills: wordPressSkills,
    color: {
      bg: 'bg-blue-50 dark:bg-blue-950/20',
      text: 'text-blue-950 dark:text-blue-50',
      border: 'border-blue-200 dark:border-blue-800',
      accent: 'text-blue-600 dark:text-blue-400',
    },
    emphasis: true, // Primary category
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: '💻',
    skills: frontendSkills,
    color: {
      bg: 'bg-purple-50 dark:bg-purple-950/20',
      text: 'text-purple-950 dark:text-purple-50',
      border: 'border-purple-200 dark:border-purple-800',
      accent: 'text-purple-600 dark:text-purple-400',
    },
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: '⚙️',
    skills: backendSkills,
    color: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/20',
      text: 'text-emerald-950 dark:text-emerald-50',
      border: 'border-emerald-200 dark:border-emerald-800',
      accent: 'text-emerald-600 dark:text-emerald-400',
    },
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Engineering',
    icon: '🚀',
    skills: fullStackSkills,
    color: {
      bg: 'bg-orange-50 dark:bg-orange-950/20',
      text: 'text-orange-950 dark:text-orange-50',
      border: 'border-orange-200 dark:border-orange-800',
      accent: 'text-orange-600 dark:text-orange-400',
    },
  },
  {
    id: 'database',
    title: 'Databases & Data Management',
    icon: '🗄️',
    skills: databaseSkills,
    color: {
      bg: 'bg-cyan-50 dark:bg-cyan-950/20',
      text: 'text-cyan-950 dark:text-cyan-50',
      border: 'border-cyan-200 dark:border-cyan-800',
      accent: 'text-cyan-600 dark:text-cyan-400',
    },
  },
  {
    id: 'devops',
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: cloudDevOpsSkills,
    color: {
      bg: 'bg-indigo-50 dark:bg-indigo-950/20',
      text: 'text-indigo-950 dark:text-indigo-50',
      border: 'border-indigo-200 dark:border-indigo-800',
      accent: 'text-indigo-600 dark:text-indigo-400',
    },
  },
  {
    id: 'automation',
    title: 'AI, Automation & Scripting',
    icon: '🤖',
    skills: automationSkills,
    color: {
      bg: 'bg-pink-50 dark:bg-pink-950/20',
      text: 'text-pink-950 dark:text-pink-50',
      border: 'border-pink-200 dark:border-pink-800',
      accent: 'text-pink-600 dark:text-pink-400',
    },
  },
  {
    id: 'testing',
    title: 'Software Testing & QA',
    icon: '✅',
    skills: testingSkills,
    color: {
      bg: 'bg-teal-50 dark:bg-teal-950/20',
      text: 'text-teal-950 dark:text-teal-50',
      border: 'border-teal-200 dark:border-teal-800',
      accent: 'text-teal-600 dark:text-teal-400',
    },
  },
  {
    id: 'professional',
    title: 'Professional & Freelancing',
    icon: '💼',
    skills: professionalSkills,
    color: {
      bg: 'bg-slate-50 dark:bg-slate-900/50',
      text: 'text-slate-950 dark:text-slate-50',
      border: 'border-slate-200 dark:border-slate-700',
      accent: 'text-slate-600 dark:text-slate-400',
    },
  },
]

// Legacy exports for backward compatibility
export const coreSkills = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming (OOP)',
  'Software Engineering Principles',
  'Design Patterns',
]

export const programmingLanguages = [
  { name: 'JavaScript', proficiency: 95 },
  { name: 'Python', proficiency: 90 },
  { name: 'TypeScript', proficiency: 85 },
  { name: 'PHP', proficiency: 80 },
  { name: 'Java', proficiency: 75 },
]

export const webDevelopment = {
  frontend: frontendSkills,
  backend: backendSkills,
}

// Keep other exports for compatibility
export const mobileSkills = ['React Native', 'Flutter']
export const dataScienceSkills = ['SQL', 'Data Analysis', 'Pandas']
export const aiMlSkills = ['Machine Learning', 'AI Chatbots', 'LLM Integration']
export const cybersecuritySkills = ['Secure Coding', 'OWASP', 'Security Hardening']
export const blockchainSkills = ['Solidity', 'Smart Contracts']
export const embeddedIotSkills = ['Arduino', 'IoT']
export const uiUxSkills = ['Figma', 'Wireframing', 'Prototyping']
export const freelancingSkills = professionalSkills
export const freelancingPaths = [
  { title: 'Full-Stack Web Developer', description: 'End-to-end web development', icon: null },
  { title: 'WordPress Developer', description: 'Custom WordPress solutions', icon: null },
]

// Tech stack icons for Hero (keep existing)
import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNode,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaMobile,
  FaRobot,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaGithub,
} from 'react-icons/fa'
import { SiTypescript, SiCsharp, SiCplusplus, SiGo, SiRust, SiNextdotjs, SiTailwindcss, SiFlutter, SiFirebase, SiTensorflow, SiEthereum, SiArduino, SiFigma } from 'react-icons/si'

export const techStackIcons = [
  { name: 'React', icon: FaReact },
  { name: 'Python', icon: FaPython },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: FaNode },
  { name: 'AWS', icon: FaAws },
  { name: 'Docker', icon: FaDocker },
  { name: 'Git', icon: FaGitAlt },
  { name: 'WordPress', icon: FaWordpress },
  { name: 'Next.js', icon: SiNextdotjs },
]