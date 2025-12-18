import { BlogPost } from '../types';

// ============================================
// DUMMY DATA - Blog Posts
// Copy & paste a blog post object and modify values as needed
// ============================================

export const blogPosts: BlogPost[] = [
  {
    slug: 'valve',
    title: 'Valve’s Linux console takes aim at Microsoft’s gaming empire',
    authorName: 'Tech Central',
    authorImage: '/images/tech-central.jpg', // Access: public/images/tech-central.jpg
    date: '2025-10-13',
    subHeading: '',
    paragraph: 'Valve announced a new living-room console, controller, and VR headset running SteamOS (Linux-based) for early 2026, with pricing yet to be revealed. The Steam Machine aims to bring PC gaming to TVs with no Windows licensing costs, leveraging Proton compatibility improvements from Steam Deck. Success depends on competitive pricing against Sony\'s PS5 and Microsoft\'s Xbox, potentially disrupting the console market by offering Steam library access and Linux\'s open ecosystem advantages. The move could weaken Windows\' dominance in gaming and establish Linux as a viable platform for mainstream console gaming.',
    paragraphImage: '/images/valve.jpg', // Optional - Access: public/images/nextjs-tutorial.png
  },

  {
    slug: 'gameindustry-open-letter',
    title: 'Open letter claims mobile gamedev is "ignored" because industry perceives it as a "world of predatory monetization and low quality"',
    authorName: 'Game Industry',
    authorImage: '/images/gameindustry.jpg', // Access: public/images/game-industry.jpg
    date: '2025-12-11',
    subHeading: '',
    paragraph: 'Midjiwan AB CEO Christian Lövstedt published an open letter criticizing the gaming industry for overlooking mobile games despite representing 55% of the global gaming market. He argues mobile gaming is dismissed due to perceptions of predatory monetization and low quality, pointing to award bodies like BAFTA and D.I.C.E. rarely recognizing mobile titles. Lövstedt contends that industry awards and media shape cultural narratives and calls for acknowledging mobile as the largest and most creative gaming platform.mlada',
    paragraphImage: '/images/ml.jpg',
    // paragraphImage not included - demonstrating optional field
  },

  {
    slug: 'learningokay',
    title: 'Learning to Be Okay With Not Knowing Everything',
    authorName: 'Code like a Girl',
    authorImage: '/images/code-like-a-girl.jpg', // Access: public/images/code-like-a-girl.jpg
    date: '2025-10-30',
    subHeading: '',
    paragraph: 'The data analytics field requires continuous learning rather than mastery of everything. Success comes from embracing curiosity over certainty, learning in layers rather than all at once, and focusing on relevant skills instead of chasing every trend. The imposter feeling is normal, and even experienced professionals regularly search for answers. Progress matters more than perfection, and being comfortable with not knowing everything is essential for sustainable growth in data careers.',
    paragraphImage: '/images/code.jpg', // Optional - Access: public/images/ai-integration.jpg
  },

  
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get all blog posts
 */
export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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
  return getAllBlogPosts().map((post) => post.slug);
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
