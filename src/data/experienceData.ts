/**
 * Professional Experience Data
 * Structured experience for senior freelance software engineer
 */

export interface Experience {
  id: number
  role: string
  company: string
  engagementType: 'Full-Time' | 'Contract' | 'Freelance' | 'Remote' | 'On-Site' | 'Hybrid'
  location?: string
  startDate: string
  endDate: string | 'Present'
  responsibilities: string[]
  techStack: string[]
  achievements?: string[]
}

export const professionalExperience: Experience[] = [
  {
    id: 1,
    role: 'Senior Software Engineer',
    company: 'NITA Athi River',
    engagementType: 'On-Site',
    location: 'Athi River, Kenya',
    startDate: '2022',
    endDate: 'Present',
    responsibilities: [
      'Design and develop scalable web applications using modern frameworks',
      'Lead technical architecture decisions and mentor junior developers',
      'Implement robust backend systems with RESTful APIs and database optimization',
      'Collaborate with cross-functional teams to deliver high-quality software solutions',
      'Ensure code quality through code reviews and best practices',
    ],
    techStack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
    achievements: [
      'Improved application performance by 40% through database optimization',
      'Led migration of legacy systems to modern tech stack',
    ],
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'Kecomex Corporation',
    engagementType: 'Contract',
    location: 'Remote',
    startDate: '2021',
    endDate: '2022',
    responsibilities: [
      'Developed end-to-end web applications for enterprise clients',
      'Built responsive frontend interfaces with React and modern CSS frameworks',
      'Created RESTful APIs and microservices architecture',
      'Integrated third-party services and payment gateways',
      'Maintained and optimized existing codebases',
    ],
    techStack: ['React', 'Python', 'Django', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    achievements: [
      'Delivered 5 major projects on time and within budget',
      'Implemented automated testing reducing bugs by 60%',
    ],
  },
  {
    id: 3,
    role: 'Freelance Software Engineer',
    company: 'Various Clients',
    engagementType: 'Freelance',
    location: 'Remote',
    startDate: '2020',
    endDate: 'Present',
    responsibilities: [
      'Provide full-stack development services to startups and businesses',
      'Develop custom WordPress themes and plugins for clients',
      'Build AI/ML solutions including chatbots and recommendation systems',
      'Create automation scripts and bots for business processes',
      'Deploy and maintain cloud infrastructure on AWS and Azure',
      'Provide technical consulting and architecture guidance',
    ],
    techStack: [
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'WordPress',
      'AI/ML',
      'AWS',
      'Docker',
      'Git',
    ],
    achievements: [
      'Completed 40+ successful projects across various industries',
      'Maintained 100% client satisfaction rate',
      'Built scalable solutions serving thousands of users',
    ],
  },
  {
    id: 4,
    role: 'Backend Developer',
    company: 'Tech Startup (Confidential)',
    engagementType: 'Remote',
    location: 'Remote',
    startDate: '2019',
    endDate: '2020',
    responsibilities: [
      'Developed RESTful APIs and GraphQL endpoints',
      'Designed and implemented database schemas',
      'Built authentication and authorization systems',
      'Optimized database queries and API performance',
      'Collaborated with frontend team on API contracts',
    ],
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'GraphQL', 'JWT'],
    achievements: [
      'Reduced API response time by 50%',
      'Implemented secure authentication system',
    ],
  },
]

/**
 * Education/Qualifications
 * Nested within Experience section
 */
export interface Qualification {
  id: number
  degree: string
  institution: string
  period: string
  details?: string
}

export const qualifications: Qualification[] = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Maseno University',
    period: '2015 - 2019',
    details: 'Focus on Software Engineering, Data Structures, Algorithms, and Systems Design',
  },
  {
    id: 2,
    degree: 'KCSE',
    institution: 'High School',
    period: '2011',
    details: 'Grade: B+',
  },
]
