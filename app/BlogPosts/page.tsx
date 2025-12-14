import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/slugs/blog_posts';

export default function BlogPostsPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-surface text-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Blog
          </h1>
          <p className="text-xl text-muted">
            Thoughtful articles about engineering, AI, and building products
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/BlogPosts/${post.slug}`}
              className="block group bg-card rounded-xl p-6 border border-default hover:border-accent transition-all hover:shadow-[0_0_30px_rgba(88,166,255,0.15)]"
            >
              <div className="flex items-start gap-4">
                {/* Author Image Placeholder */}
                <div className="w-12 h-12 rounded-full bg-card flex-shrink-0" />

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-muted">
                      {post.authorName}
                    </span>
                    <span className="text-sm text-muted">•</span>
                    <time className="text-sm text-muted">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  <h2 className="text-2xl font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-muted font-medium mb-2">
                    {post.subHeading}
                  </p>
                  <p className="text-muted line-clamp-2">
                    {post.paragraph}
                  </p>
                  <span className="inline-block mt-4 text-primary font-medium transition-all group-hover:text-accent group-hover:translate-x-1">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
