import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/slugs/blog_posts';

export default function BlogPostsPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Blog Posts
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Thoughts, tutorials, and insights on web development
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/BlogPosts/${post.slug}`}
              className="block group bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:border-white dark:hover:border-zinc-300 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                {/* Author Image Placeholder */}
                <div className="w-12 h-12 rounded-full bg-zinc-800 dark:bg-zinc-200 flex-shrink-0" />

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {post.authorName}
                    </span>
                    <span className="text-sm text-zinc-400 dark:text-zinc-600">•</span>
                    <time className="text-sm text-zinc-600 dark:text-zinc-400">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors mb-2">
                    {post.title}
                  </h2>

                  <p className="text-zinc-700 dark:text-zinc-300 font-medium mb-2">
                    {post.subHeading}
                  </p>

                  <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {post.paragraph}
                  </p>

                  <span className="inline-block mt-4 text-zinc-900 dark:text-zinc-100 font-medium group-hover:underline">
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
