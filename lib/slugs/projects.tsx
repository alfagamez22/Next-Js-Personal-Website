import { Project } from '../types';

// ============================================
// DUMMY DATA - Projects
// Copy & paste a project object and modify values as needed
// ============================================

export const projects: Project[] = [
  {
    slug: 'thesis',
    title: 'Project AIM: AI-Driven Image Processing Productivity Management and Interpreter System for Employee Classification and Performance Analysis in Local Coffee Shops Using the SAM2 and RT-DETR Algorithm ',
    image: '/images/Thesispic.png', // Access: public/images/ecommerce-platform.jpg
    paragraph: 'A full-stack e-commerce platform built with Python frameworks such as Django for web framework, Pytorch for our machine learning models, Matplotlib, and Pandas for live data-analytics visualization, and PostgreSQL for database management, FastAPI for serverless functions, RTSP for real-time video streaming.',
    techStackUsed: [
      {
        name: 'Python',
        image: '/images/nextjs-icon.svg', // Optional - inline with name - Access: public/images/nextjs-icon.svg
      },
      {
        name: 'PostgreSQL',
        image: '/images/typescript-icon.svg', // Access: public/images/typescript-icon.svg
      },
      {
        name: 'Javascript',
        image: '/images/stripe-icon.svg', // Access: public/images/stripe-icon.svg
      },

      {
        name: 'OpenCV',
        image: '/images/stripe-icon.svg', // Access: public/images/stripe-icon.svg
      },
      
 
    ],
    githubLink: 'https://github.com/alfagamez22/Project-Thesis.git', // Optional
    websiteLink: 'https://drive.google.com/file/d/1KAMcX75UgdjqUUKoq9BV7pwb-zHgRj6v/view?usp=sharing', // Optional
  },
  {
    slug: 'facebookscraper',
    title: 'Facebook Marketplace Listings Scraper',
    image: '/images/marketplace.png', // Placeholder removed
    paragraph: 'A web scraper that extracts data from Facebook Marketplace listings based on user input.',
    techStackUsed: [
      {
        name: 'Node.js',
        image: '/images/react-icon.svg', // Access: public/images/react-icon.svg
      },
      {
        name: 'Next.js',
        // image omitted - demonstrating optional field
      },
      {
        name: 'Python',
        image: '/images/nodejs-icon.svg', // Access: public/images/nodejs-icon.svg
      },
      {
        name: 'Selenium',
        image: '/images/mongodb-icon.svg', // Access: public/images/mongodb-icon.svg
      },
    ],
    githubLink: 'https://github.com/alfagamez22/Facebook-Marketplace-Webscraper.git',
    websiteLink: 'https://youtu.be/t1fO9XMOK8U',
    // websiteLink omitted - demonstrating optional field
  },
  {
    slug: 'opengl',
    title: 'Using C++ for OpenGL WASD 3D Simulator',
    image: '/images/gl.png', // Placeholder removed
    paragraph: 'A 3D simulator built with C++ and OpenGL using GLUT and GLEW frameworks that allows users to navigate a 3D environment using WASD controls and control the size of the pyramids and the amount of the pyramids using instance of an object for optimization. The simulator features basic lighting, texture mapping, and camera controls.',
    techStackUsed: [
      {
        name: 'C++',
        image: '/images/nextjs-icon.svg', // Access: public/images/nextjs-icon.svg
      },
      {
        name: 'C MAKE',
        image: '/images/prisma-icon.svg', // Access: public/images/prisma-icon.svg
      },
      {
        name: 'GLUT',
        image: '/images/react-icon.svg', // Access: public/images/react-icon.svg
      },
      {
        name: 'GLEW',
        image: '/images/nextauth-icon.svg', // Access: public/images/nextauth-icon.svg
      },
      {
        name: 'OpenGL',
        image: '/images/tailwind-icon.svg', // Access: public/images/tailwind-icon.svg
      },
    ],
    githubLink: 'https://github.com/alfagamez22/OpenGL-3D-World-Egypt.git',
    websiteLink: 'https://youtu.be/CQ6JX0jdYT0',
  },
  {
    slug: 'noteapp',
    title: 'PHP Note taking Web App',
    image: '/images/note.png', // Placeholder removed
    paragraph: 'A simple note taking app built with PHP, AJAX, and MySQL that allows users to create, read, update, and delete notes with messaging functionality and friend system. The app features a clean and user-friendly interface with responsive design for mobile and desktop devices.',
    techStackUsed: [
      {
        name: 'PHP',
        image: '/images/react-icon.svg', // Access: public/images/react-icon.svg
      },
      {
        name: 'AJAX',
        image: '/images/typescript-icon.svg', // Access: public/images/typescript-icon.svg
      },
      {
        name: 'MySQL',
      },
      {
        name: 'JavaScript',
      },
    ],
    websiteLink: 'https://youtu.be/E4XwpyihJW8',
    githubLink: 'https://github.com/alfagamez22/Note-Taking-App-PHP-.git',
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
