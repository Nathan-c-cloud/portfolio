export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'saas' | 'webapp' | 'infrastructure' | 'experiment';
  status: 'production' | 'development' | 'archived';
  image: string;
  tags: string[];
  stack: {
    frontend?: string[];
    backend?: string[];
    cloud?: string[];
    database?: string[];
    devops?: string[];
  };
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'database' | 'devops' | 'tools';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  years?: number;
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  achievements?: string[];
  technologies?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  badge?: string;
}
