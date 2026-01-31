import { Project } from '@/types';

// Projects array - Add your projects here
export const projects: Project[] = [
  {
    id: 'portfolio-interactif',
    title: 'Interactive Personal Portfolio',
    description: 'Modern portfolio with advanced animations, custom design system and immersive user experience. Modular and performant architecture.',
    longDescription: 'Professional portfolio built with the latest web technologies. Features smooth animations with Framer Motion, interactive particle system, reading progress bar, and spectacular visual effects. Architecture based on reusable components with TypeScript for type safety. Optimized for performance and fully responsive.',
    category: 'webapp',
    status: 'production',
    image: '/images/projects/portfolio.jpg',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    stack: {
      frontend: ['Next.js 15', 'TypeScript', 'Framer Motion', 'Tailwind CSS v3'],
      backend: ['Next.js App Router'],
      cloud: ['Vercel'],
    },
    links: {
      demo: 'https://ineaihou.dev',
      github: 'https://github.com/Nathan-c-cloud/portfolio',
    },
    featured: true,
  },
  // Example structure to add other projects:
  // {
  //   id: 'my-project-2',
  //   title: 'Project Title',
  //   description: 'Short project description (displayed on card)',
  //   longDescription: 'Long detailed project description',
  //   category: 'saas' | 'webapp' | 'infrastructure' | 'experiment',
  //   status: 'production' | 'development' | 'archived',
  //   image: '/images/projects/mon-image.jpg',
  //   tags: ['React', 'TypeScript', 'Docker'],
  //   stack: {
  //     frontend: ['React', 'TypeScript'],
  //     backend: ['Node.js'],
  //     cloud: ['AWS', 'Docker'],
  //     database: ['PostgreSQL'],
  //   },
  //   links: {
  //     demo: 'https://demo.example.com',
  //     github: 'https://github.com/username/repo',
  //   },
  //   featured: true,
  // },
];

// Filter helpers
export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'saas', label: 'SaaS' },
  { value: 'webapp', label: 'Web App' },
  { value: 'infrastructure', label: 'Infrastructure' },
  { value: 'experiment', label: 'Experimental' },
] as const;

// Get featured projects
export const getFeaturedProjects = () => projects.filter(p => p.featured);

// Get projects by category
export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(p => p.category === category);
};
