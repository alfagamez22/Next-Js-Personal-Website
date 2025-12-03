import { getBlogPostBySlug, getAllBlogPostSlugs } from '@/lib/slugs/blog_posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/BlogPosts"
          className="inline-flex items-center text-zinc-900 dark:text-zinc-100 hover:underline mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <h2 className="text-xl text-zinc-700 dark:text-zinc-300 font-medium mb-6">
              {post.subHeading}
            </h2>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 dark:bg-zinc-200" />
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">
                  {post.authorName}
                </p>
                <time className="text-sm text-zinc-600 dark:text-zinc-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </header>

          {/* Optional Paragraph Image */}
          {post.paragraphImage && (
            <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-xl mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-600 opacity-20" />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {post.paragraph}
            </p>
          </div>
        </article>

        {/* Divider */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 my-12" />

        {/* Back Link */}
        <Link
          href="/BlogPosts"
          className="inline-flex items-center text-zinc-900 dark:text-zinc-100 hover:underline"
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
}
