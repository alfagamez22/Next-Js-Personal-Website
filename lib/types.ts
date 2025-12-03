// TypeScript type definitions for Portfolio content

// Blog Post Types
export interface BlogPost {
  slug: string;
  title: string;
  authorName: string;
  authorImage: string;
  date: string;
  subHeading: string;
  paragraph: string;
  paragraphImage?: string; // Optional
}

// Skill Types
export interface Skill {
  slug: string;
  title: string;
  technologyImage?: string; // Optional
  whyParagraph?: string; // Optional - explains how author uses this skill
}

// Tech Stack Types (for Projects)
export interface TechStack {
  name: string;
  image?: string; // Optional - should be inline with name
}

// Project Types
export interface Project {
  slug: string;
  title: string;
  image: string;
  paragraph: string;
  techStackUsed: TechStack[]; // Array of tech stacks with their own card boxes
  githubLink?: string; // Optional
  websiteLink?: string; // Optional
}
