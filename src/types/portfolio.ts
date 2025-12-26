export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  badge?: string;
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
