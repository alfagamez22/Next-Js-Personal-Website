import { Skill } from '../types';

// ============================================
// DUMMY DATA - Skills
// Copy & paste a skill object and modify values as needed
// ============================================

export const skills: Skill[] = [
  {
    slug: 'react',
    title: 'React',
    technologyImage: '/images/react-logo.svg', // Optional - Access: public/images/react-logo.svg
    whyParagraph: 'I use React extensively to build dynamic and interactive user interfaces. Its component-based architecture allows me to create reusable UI elements, making development faster and more maintainable. I leverage React hooks like useState, useEffect, and custom hooks to manage state and side effects efficiently. React\'s virtual DOM ensures optimal performance even in complex applications.', // Optional
  },
  {
    slug: 'typescript',
    title: 'TypeScript',
    technologyImage: '/images/typescript-logo.svg', // Access: public/images/typescript-logo.svg
    whyParagraph: 'TypeScript is my go-to language for building scalable applications. It provides strong typing that catches errors at compile time, reducing bugs in production. I use TypeScript to define clear interfaces and types, making my code more self-documenting and easier for teams to understand. The IDE support and autocomplete features significantly boost my productivity.',
  },
  {
    slug: 'nextjs',
    title: 'Next.js',
    technologyImage: '/images/nextjs-logo.svg', // Access: public/images/nextjs-logo.svg
    whyParagraph: 'Next.js is my framework of choice for building full-stack React applications. I utilize its powerful features like Server-Side Rendering (SSR), Static Site Generation (SSG), and API routes to create performant and SEO-friendly websites. The App Router and Server Components in Next.js 13+ have transformed how I structure applications, enabling better performance and user experiences.',
  },
  {
    slug: 'python',
    title: 'Python',
    technologyImage: '/images/python-logo.svg', // Access: public/images/python-logo.svg
    // whyParagraph omitted - demonstrating optional field
     whyParagraph: 'LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum LoremIpsumLoremIpsumLoremIpsumLoremIpsum LoremIpsumLoremIpsumLoremIpsumLoremIpsum LoremIpsumLoremIpsumLoremIpsumLoremIpsum LoremIpsumLoremIpsumLoremIpsum LoremIpsumLoremIpsumLoremIpsumv LoremIpsumLoremIpsumLoremIpsumLoremIpsum LoremIpsumLoremIpsum.',
  },
  {
    slug: 'tailwind-css',
    title: 'Tailwind CSS',
    technologyImage: '/images/tailwind-logo.svg', // Access: public/images/tailwind-logo.svg
    whyParagraph: 'Tailwind CSS has revolutionized my styling workflow. Instead of writing custom CSS, I compose designs directly in markup using utility classes. This approach makes styling faster and more consistent across projects. I love how Tailwind\'s design system encourages good practices while remaining flexible enough for custom designs.',
  },
  {
    slug: 'git',
    title: 'Git & GitHub',
    technologyImage: '/images/git-logo.svg', // Access: public/images/git-logo.svg
    whyParagraph: 'Git is essential to my development workflow for version control and collaboration. I use Git daily for branching strategies, commit management, and code reviews. GitHub enhances my workflow with features like pull requests, actions for CI/CD, and project management tools. These tools are crucial for maintaining code quality and team collaboration.',
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get all skills
 */
export function getAllSkills(): Skill[] {
  return skills;
}

/**
 * Get a single skill by slug
 */
export function getSkillBySlug(slug: string): Skill | undefined {
  return skills.find((skill) => skill.slug === slug);
}

/**
 * Get all skill slugs (useful for generateStaticParams)
 */
export function getAllSkillSlugs(): string[] {
  return skills.map((skill) => skill.slug);
}

/**
 * Generate a slug from a skill title
 */
export function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}
