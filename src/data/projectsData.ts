/**
 * Projects Data
 * 40 unique professional projects categorized by type
 */

export interface Project {
  id: number
  title: string
  description: string
  problemStatement: string
  techStack: string[]
  skills: string[] // Added for Syab-style two-tier filtering
  category: typeof projectCategories[number]
  githubLink: string
  liveLink?: string
  status: 'Completed' | 'In Progress' | 'Planned'
  image?: string
}

export const projectCategories = [
  'Full-Stack',
  'Frontend / UX',
  'AI / ML',
  'Backend / API',
  'Cloud / DevOps',
  'Experimental',
] as const

export const projects: Project[] = [
  // Syab.tech Merged Projects
  {
    id: 101,
    title: 'Menteemart',
    description: 'A comprehensive mentorship platform connecting students with industry experts for career guidance.',
    problemStatement: 'Students lacked access to direct professional mentorship in specialized technical fields.',
    techStack: ['ReactJS', 'Supabase', 'Tailwind', 'PostgreSQL'],
    skills: ['React', 'Supabase', 'Frontend', 'Database'],
    category: 'Full-Stack',
    githubLink: 'https://github.com/syed-fayaz-ahmed/mentee-mart',
    liveLink: 'https://mentee-mart.vercel.app/',
    status: 'Completed',
  },
  {
    id: 102,
    title: 'Nainzaka Aesthetics',
    description: 'Bespoke E-commerce experience for a luxury aesthetics brand with high-fidelity visuals.',
    problemStatement: 'Luxury brands require a digital presence that matches their physical boutique sophistication.',
    techStack: ['ReactJS', 'Supabase', 'framer-motion', 'E-commerce'],
    skills: ['React', 'Animation', 'UX/UI', 'E-commerce'],
    category: 'Full-Stack',
    githubLink: '#',
    liveLink: 'https://nainzakaaesthetics.com/',
    status: 'Completed',
  },
  {
    id: 103,
    title: 'Collaborative Editing System',
    description: 'Real-time document editing platform using operational transforms for conflict resolution.',
    problemStatement: 'Synchronous editing across distributed systems often results in data race conditions.',
    techStack: ['Node.js', 'Socket.io', 'Redis', 'Express'],
    skills: ['Backend', 'Real-time', 'API Design'],
    category: 'Backend / API',
    githubLink: '#',
    status: 'Completed',
  },
  {
    id: 104,
    title: 'CSE 530 - ML Algorithms',
    description: 'In-depth implementation of core machine learning algorithms from scratch using mathematical foundations.',
    problemStatement: 'Black-box ML libraries often obscure the underlying optimization logic for students.',
    techStack: ['Python', 'Scikit-Learn', 'NumPy', 'Matplotlib'],
    skills: ['Python', 'Machine Learning', 'Data Science'],
    category: 'AI / ML',
    githubLink: '#',
    status: 'Completed',
  },
  {
    id: 105,
    title: 'Sayyad Fayaz Ahmad Portfolio',
    description: 'The exact high-performance, dark-themed portfolio architecture used for syab.tech.',
    problemStatement: 'Senior engineers need a performant, visually stunning way to showcase architectural complexity.',
    techStack: ['ReactJS', 'CSS', 'Framer Motion', 'Vite'],
    skills: ['React', 'Animation', 'Performance', 'CSS'],
    category: 'Frontend / UX',
    githubLink: 'https://github.com/syed-fayaz-ahmed/syab-frontend',
    status: 'Completed',
  },

  // Existing Initial Projects (Merged & Refined)
  {
    id: 1,
    title: 'Enterprise E-Commerce',
    description: 'High-performance commerce engine processing $1M+ GMV with multisegment payment architectures.',
    problemStatement: 'Businesses required a battle-tested, localized store solution with 99.9% uptime.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
    skills: ['React', 'Node.js', 'Microservices', 'Payments'],
    category: 'Full-Stack',
    githubLink: '#',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Agile Ops Dashboard',
    description: 'Real-time project orchestration platform reducing delivery cycles by 30% through advanced socket logic.',
    problemStatement: 'Distributed teams struggled with synchronization and task transparency in high-growth environments.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    skills: ['Next.js', 'Real-time', 'Dashboard', 'UI/UX'],
    category: 'Full-Stack',
    githubLink: '#',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'LMS Enterprise',
    description: 'Scalable learning ecosystem supporting 50k+ students with interactive assessment engines.',
    problemStatement: 'Global institutions lacked unified digital learning tools capable of regional scaling.',
    techStack: ['React', 'Django', 'PostgreSQL', 'AWS S3'],
    skills: ['React', 'Python', 'Cloud Arch', 'Education'],
    category: 'Full-Stack',
    githubLink: '#',
    status: 'In Progress',
  },
  {
    id: 16,
    title: 'Sentiment Intelligence',
    description: 'Advanced NLP pipeline for analyzing brand perception across millions of data points.',
    problemStatement: 'PR firms needed automated sentiment tracking to prevent brand crises.',
    techStack: ['Python', 'TensorFlow', 'NLTK', 'Flask'],
    skills: ['Python', 'ML', 'NLP', 'Data Pipeline'],
    category: 'AI / ML',
    githubLink: '#',
    status: 'Completed',
  },
  {
    id: 17,
    title: 'Visionary Classifier',
    description: 'Real-time industrial image recognition system with 98% accuracy in defect detection.',
    problemStatement: 'Manufacturing lines failed to identify microscopic defects in fast-moving assembly.',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'FastAPI'],
    skills: ['Python', 'Computer Vision', 'Deep Learning'],
    category: 'AI / ML',
    githubLink: '#',
    status: 'Completed',
  },
  {
    id: 24,
    title: 'Clinical Sync API',
    description: 'Robust healthcare API facilitating encrypted data exchange between fragmented clinics.',
    problemStatement: 'Medical records were siloing across systems, endangering patient safety through data lag.',
    techStack: ['React', 'Express', 'MySQL', 'Twilio'],
    skills: ['API', 'Security', 'Healthcare', 'Backend'],
    category: 'Backend / API',
    githubLink: '#',
    status: 'Completed',
  },
  {
    id: 29,
    title: 'S3 Sync Automator',
    description: 'High-availability backup architecture with automated lifecycle policies and geo-redundancy.',
    problemStatement: 'Insecure local storage leading to significant data loss risks in enterprise environments.',
    techStack: ['Python', 'AWS S3', 'Cron', 'Glacier'],
    skills: ['AWS', 'Cloud', 'DevOps', 'Storage'],
    category: 'Cloud / DevOps',
    githubLink: '#',
    status: 'Completed',
  },
  {
    id: 40,
    title: 'CyberScan Pro',
    description: 'Internal security auditor identifying zero-day vulnerabilities through automated fuzzing.',
    problemStatement: 'Dev teams needed a non-evasive way to check for security regressions daily.',
    techStack: ['Python', 'OWASP ZAP', 'SQLMap', 'Nmap'],
    skills: ['Python', 'Security', 'Automation', 'Cyber'],
    category: 'Experimental',
    githubLink: '#',
    status: 'Completed',
  },
]

