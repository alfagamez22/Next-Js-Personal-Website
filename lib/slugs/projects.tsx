import { Project } from '../types';

// ============================================
// DUMMY DATA - Projects
// Copy & paste a project object and modify values as needed
// ============================================

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    image: '/images/ecommerce-platform.jpg', // Access: public/images/ecommerce-platform.jpg
    paragraph: 'A full-stack e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, secure checkout, order management, and an admin dashboard. The platform uses server-side rendering for optimal SEO and performance, with real-time inventory updates and email notifications.',
    techStackUsed: [
      {
        name: 'Next.js',
        image: '/images/nextjs-icon.svg', // Optional - inline with name - Access: public/images/nextjs-icon.svg
      },
      {
        name: 'TypeScript',
        image: '/images/typescript-icon.svg', // Access: public/images/typescript-icon.svg
      },
      {
        name: 'Stripe',
        image: '/images/stripe-icon.svg', // Access: public/images/stripe-icon.svg
      },
      {
        name: 'PostgreSQL',
        image: '/images/postgresql-icon.svg', // Access: public/images/postgresql-icon.svg
      },
      {
        name: 'Tailwind CSS',
        image: '/images/tailwind-icon.svg', // Access: public/images/tailwind-icon.svg
      },
    ],
    githubLink: 'https://github.com/yourusername/ecommerce-platform', // Optional
    websiteLink: 'https://ecommerce-demo.vercel.app', // Optional
  },
  {
    slug: 'ai-chatbot-assistant',
    title: 'AI Chatbot Assistant',
    image: '/images/ai-chatbot.jpg', // Access: public/images/ai-chatbot.jpg
    paragraph: 'An intelligent chatbot powered by OpenAI\'s GPT-4 that provides real-time assistance and answers user queries. Built with streaming responses, conversation history, and context-aware interactions. The chatbot includes features like markdown rendering, code syntax highlighting, and multi-language support.',
    techStackUsed: [
      {
        name: 'React',
        image: '/images/react-icon.svg', // Access: public/images/react-icon.svg
      },
      {
        name: 'OpenAI API',
        // image omitted - demonstrating optional field
      },
      {
        name: 'Node.js',
        image: '/images/nodejs-icon.svg', // Access: public/images/nodejs-icon.svg
      },
      {
        name: 'MongoDB',
        image: '/images/mongodb-icon.svg', // Access: public/images/mongodb-icon.svg
      },
    ],
    githubLink: 'https://github.com/yourusername/ai-chatbot',
    // websiteLink omitted - demonstrating optional field
  },
  {
    slug: 'task-management-app',
    title: 'Task Management Application',
    image: '/images/task-manager.jpg', // Access: public/images/task-manager.jpg
    paragraph: 'A collaborative task management application inspired by Trello and Asana. Features drag-and-drop functionality, real-time collaboration, task assignments, due dates, and progress tracking. Built with a focus on user experience and responsive design for seamless use across all devices.',
    techStackUsed: [
      {
        name: 'Next.js',
        image: '/images/nextjs-icon.svg', // Access: public/images/nextjs-icon.svg
      },
      {
        name: 'Prisma',
        image: '/images/prisma-icon.svg', // Access: public/images/prisma-icon.svg
      },
      {
        name: 'React DnD',
        image: '/images/react-icon.svg', // Access: public/images/react-icon.svg
      },
      {
        name: 'NextAuth.js',
        image: '/images/nextauth-icon.svg', // Access: public/images/nextauth-icon.svg
      },
      {
        name: 'Tailwind CSS',
        image: '/images/tailwind-icon.svg', // Access: public/images/tailwind-icon.svg
      },
    ],
    githubLink: 'https://github.com/yourusername/task-manager',
    websiteLink: 'https://taskmanager-demo.vercel.app',
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    image: '/images/weather-dashboard.jpg', // Access: public/images/weather-dashboard.jpg
    paragraph: 'A beautiful and intuitive weather dashboard that displays current weather conditions, hourly forecasts, and 7-day predictions. Integrates with OpenWeatherMap API and includes features like location search, favorite locations, and weather alerts. The dashboard uses animated weather icons and responsive charts.',
    techStackUsed: [
      {
        name: 'React',
        image: '/images/react-icon.svg', // Access: public/images/react-icon.svg
      },
      {
        name: 'TypeScript',
        image: '/images/typescript-icon.svg', // Access: public/images/typescript-icon.svg
      },
      {
        name: 'Chart.js',
      },
      {
        name: 'OpenWeather API',
      },
    ],
    websiteLink: 'https://weather-dashboard-demo.netlify.app',
    // githubLink omitted - demonstrating optional field
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Get a single project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get all project slugs (useful for generateStaticParams)
 */
export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

/**
 * Generate a slug from a project title
 */
export function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

/**
 * Get featured projects (example: first 3 projects)
 */
export function getFeaturedProjects(count: number = 3): Project[] {
  return projects.slice(0, count);
}
