import { BlogPost } from '../types';

// ============================================
// DUMMY DATA - Blog Posts
// Copy & paste a blog post object and modify values as needed
// ============================================

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 15',
    authorName: 'John Doe',
    authorImage: '/images/john-doe.jpg', // Access: public/images/john-doe.jpg
    date: '2024-11-15',
    subHeading: 'A comprehensive guide to building modern web applications',
    paragraph: 'Next.js has revolutionized the way we build React applications. In this post, we\'ll explore the latest features of Next.js 15, including the new App Router, Server Components, and improved performance optimizations. Whether you\'re a beginner or an experienced developer, this guide will help you understand the core concepts and best practices for building scalable web applications.',
    paragraphImage: '/images/nextjs-tutorial.png', // Optional - Access: public/images/nextjs-tutorial.png
  },
  {
    slug: 'mastering-typescript',
    title: 'Mastering TypeScript in 2024',
    authorName: 'Jane Smith',
    authorImage: '/images/jane-smith.jpg', // Access: public/images/jane-smith.jpg
    date: '2024-10-28',
    subHeading: 'Level up your TypeScript skills with advanced patterns',
    paragraph: 'TypeScript has become an essential tool in modern web development. This article dives deep into advanced TypeScript patterns, including generics, utility types, and type inference. We\'ll explore real-world examples and best practices that will help you write more type-safe and maintainable code. By the end of this guide, you\'ll have a solid understanding of TypeScript\'s powerful type system.',
    // paragraphImage not included - demonstrating optional field
  },
  {
    slug: 'ai-integration-in-web-apps',
    title: 'Integrating AI into Your Web Applications',
    authorName: 'Alex Johnson',
    authorImage: '/images/alex-johnson.jpg', // Access: public/images/alex-johnson.jpg
    date: '2024-12-01',
    subHeading: 'Practical approaches to adding AI features to your projects',
    paragraph: 'Artificial Intelligence is no longer just for tech giants. In this comprehensive guide, we\'ll explore how to integrate AI capabilities into your web applications using modern APIs and frameworks. From chatbots to image recognition, we\'ll cover practical implementations that you can start using today. Learn how to leverage AI to create more intelligent and user-friendly applications.',
    paragraphImage: '/images/ai-integration.jpg', // Optional - Access: public/images/ai-integration.jpg
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get all blog posts
 */
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

/**
 * Get a single blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * Get all blog post slugs (useful for generateStaticParams)
 */
export function getAllBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

/**
 * Generate a slug from a title
 */
export function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}
