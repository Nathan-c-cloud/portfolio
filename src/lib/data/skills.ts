import { Skill } from '@/types';

export const skills: Skill[] = [
  // Development
  { name: 'Java', category: 'frontend', level: 'advanced' },
  { name: 'Kotlin', category: 'backend', level: 'advanced' },
  { name: 'Angular', category: 'frontend', level: 'advanced' },
  { name: 'TypeScript', category: 'frontend', level: 'advanced' },
  { name: 'React', category: 'frontend', level: 'advanced' },
  { name: 'Python', category: 'backend', level: 'advanced' },
  { name: 'C++', category: 'backend', level: 'intermediate' },
  { name: 'C#', category: 'backend', level: 'intermediate' },
  { name: 'GO', category: 'backend', level: 'intermediate' },
  { name: 'C', category: 'backend', level: 'intermediate' },

  // Databases
  { name: 'PostgreSQL', category: 'database', level: 'advanced' },
  { name: 'SQLite', category: 'database', level: 'advanced' },
  { name: 'MongoDB', category: 'database', level: 'advanced' },

  // DevOps & Cloud
  { name: 'AWS', category: 'cloud', level: 'advanced' },
  { name: 'GCP', category: 'cloud', level: 'advanced' },
  { name: 'Terraform', category: 'devops', level: 'advanced' },
  { name: 'Docker', category: 'devops', level: 'advanced' },
  { name: 'Kubernetes', category: 'devops', level: 'advanced' },
  { name: 'GitHub Actions', category: 'devops', level: 'advanced' },
  { name: 'GitLab CI/CD', category: 'devops', level: 'advanced' },

  // Quality & Testing
  { name: 'SonarQube', category: 'tools', level: 'advanced' },
  { name: 'Playwright', category: 'tools', level: 'advanced' },
  { name: 'Design Patterns', category: 'tools', level: 'advanced' },
  { name: 'TDD', category: 'tools', level: 'advanced' },

  // Project Management
  { name: 'Azure DevOps', category: 'tools', level: 'advanced' },
  { name: 'Jira', category: 'tools', level: 'advanced' },

  // AI Tools
  { name: 'GitHub Copilot', category: 'tools', level: 'advanced' },
  { name: 'Claude Code', category: 'tools', level: 'advanced' },
  { name: 'Gemini CLI', category: 'tools', level: 'intermediate' },
  { name: 'Cursor', category: 'tools', level: 'advanced' },
  { name: 'Manus', category: 'tools', level: 'intermediate' },
];

export const skillsByCategory = {
  development: [
    'Java', 'Kotlin', 'Angular', 'TypeScript', 'React',
    'Python', 'C++', 'C#', 'GO', 'C'
  ],
  database: [
    'PostgreSQL', 'SQLite', 'MongoDB'
  ],
  devops: [
    'AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes',
    'GitHub Actions', 'GitLab CI/CD'
  ],
  quality: [
    'SonarQube', 'Playwright', 'Design Patterns', 'TDD'
  ],
  management: [
    'Azure DevOps', 'Jira'
  ],
  ai: [
    'GitHub Copilot', 'Claude Code', 'Gemini CLI', 'Cursor', 'Manus'
  ]
};

export const categoryInfo = {
  development: {
    title: 'Development',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500'
  },
  database: {
    title: 'Databases',
    icon: '🗄️',
    color: 'from-green-500 to-emerald-500'
  },
  devops: {
    title: 'DevOps & Cloud',
    icon: '☁️',
    color: 'from-purple-500 to-pink-500'
  },
  quality: {
    title: 'Quality & Testing',
    icon: '✅',
    color: 'from-orange-500 to-red-500'
  },
  management: {
    title: 'Project Management',
    icon: '📊',
    color: 'from-indigo-500 to-blue-500'
  },
  ai: {
    title: 'AI Tools',
    icon: '🤖',
    color: 'from-violet-500 to-purple-500'
  }
};
