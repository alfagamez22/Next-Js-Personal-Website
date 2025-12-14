import { Skill } from '../types';

// ============================================
// DUMMY DATA - Skills
// Copy & paste a skill object and modify values as needed
// ============================================

export const skills: Skill[] = [
  {
    slug: 'node',
    title: 'Node.js',
    technologyImage: '/images/nodejs-logo.svg', // Optional - Access: public/images/nodejs-logo.svg
    whyParagraph: 'I use Node.js extensively to build dynamic and interactive user interfaces. Its component-based architecture allows me to create reusable UI elements, making development faster and more maintainable. I leverage React hooks like useState, useEffect, and custom hooks to manage state and side effects efficiently. React\'s virtual DOM ensures optimal performance even in complex applications.', // Optional
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
    slug: 'php',
    title: 'PHP',
    technologyImage: '/images/php-logo.svg', // Access: public/images/php-logo.svg
    whyParagraph: 'PHP is a widely-used open source scripting language that is especially suited for web development and can be embedded into HTML. I use PHP to build dynamic web pages and server-side applications, leveraging its extensive ecosystem and frameworks like Laravel for rapid development.',
  },

  {
    slug: 'python',
    title: 'Python',
    technologyImage: '/images/python-logo.svg', // Access: public/images/python-logo.svg
    // whyParagraph omitted - demonstrating optional field
     whyParagraph: 'LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum LoremIpsumLoremIpsumLoremIpsumLoremIpsum LoremIpsumLoremIpsumLoremIpsumLoremIpsum LoremIpsumLoremIpsumLoremIpsumLoremIpsum LoremIpsumLoremIpsumLoremIpsum LoremIpsumLoremIpsumLoremIpsumv LoremIpsumLoremIpsumLoremIpsumLoremIpsum LoremIpsumLoremIpsum.',
  },
  
  {
    slug: 'git',
    title: 'Git & GitHub',
    technologyImage: '/images/git-logo.svg', // Access: public/images/git-logo.svg
    whyParagraph: 'Git is essential to my development workflow for version control and collaboration. I use Git daily for branching strategies, commit management, and code reviews. GitHub enhances my workflow with features like pull requests, actions for CI/CD, and project management tools. These tools are crucial for maintaining code quality and team collaboration.',
  },

  {
    slug: 'postgresql',
    title: 'PostgreSQL',
    technologyImage: '/images/postgresql-logo.svg', // Access: public/images/postgresql-logo.svg
    whyParagraph: 'PostgreSQL is my preferred relational database for its robustness and advanced features. I use it to design efficient schemas, write complex queries, and ensure data integrity. Its support for JSON and extensibility allows me to handle diverse data types and scale applications effectively.',
  },

  {
    slug: 'mysqlite',
    title: 'MySQLite',
    technologyImage: '/images/mysqlite-logo.svg', // Access: public/images/mysqlite-logo.svg
    whyParagraph: 'MySQLite is my preferred relational database for its robustness and advanced features. I use it to design efficient schemas, write complex queries, and ensure data integrity. Its support for JSON and extensibility allows me to handle diverse data types and scale applications effectively.',
  },

  {
    slug: 'powerbi',
    title: 'Power BI',
    technologyImage: '/images/powerbi-logo.svg', // Access: public/images/powerbi-logo.svg
    whyParagraph: 'Power BI is my preferred tool for data visualization and business intelligence. I use it to create interactive dashboards, generate insightful reports, and analyze complex datasets. Its integration capabilities and user-friendly interface help me communicate data-driven insights effectively.',
  },

  {
    slug: 'C++',
    title: 'C++',
    technologyImage: '/images/cpp-logo.svg', // Access: public/images/cpp-logo.svg
    whyParagraph: 'C++ is a powerful programming language that I use for system/software development, game development, and performance-critical applications. Its object-oriented features and low-level memory manipulation capabilities allow me to write efficient and high-performance code.',
  },

  {
    slug: 'restfulapi',
    title: 'RESTful API',
    technologyImage: '/images/restfulapi-logo.svg', // Access: public/images/restfulapi-logo.svg
    whyParagraph: 'RESTful API is a crucial technology for building scalable and maintainable web services. I use it to design and implement APIs that follow REST principles, enabling seamless communication between client and server. Its stateless nature and use of standard HTTP methods make it ideal for modern web applications.',
  },
  
  {
    slug: 'fastapi',
    title: 'FastAPI',
    technologyImage: '/images/fastapi-logo.svg', // Access: public/images/fastapi-logo.svg
    whyParagraph: 'FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. I use it to create robust and efficient RESTful APIs quickly, leveraging its automatic interactive API documentation and validation features.',
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
