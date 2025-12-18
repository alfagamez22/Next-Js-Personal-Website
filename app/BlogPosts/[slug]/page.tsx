import { getBlogPostBySlug, getAllBlogPostSlugs } from '@/lib/slugs/blog_posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LazyServerSection } from '@/Components/lazy-server-section';

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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-surface text-primary">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <LazyServerSection>
          <Link href="/BlogPosts" className="inline-flex items-center text-primary hover:underline mb-8">
            ← Back to Blog
          </Link>
        </LazyServerSection>

        {/* Article Header */}
        <article>
          <LazyServerSection>
            <header className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                {post.title}
              </h1>
              <h2 className="text-xl text-muted font-medium mb-6">
                {post.subHeading}
              </h2>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card" />
                <div>
                  <p className="font-semibold text-primary">
                    {post.authorName}
                  </p>
                  <time className="text-sm text-muted">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </div>
            </header>
          </LazyServerSection>

          {/* Optional Paragraph Image */}
          {post.paragraphImage && (
            <LazyServerSection>
              <div className="aspect-video bg-card rounded-xl mb-8 relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(88,166,255,0.06))' }} />
              </div>
            </LazyServerSection>
          )}

          {/* Article Content */}
          <LazyServerSection>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted leading-relaxed">
                {post.paragraph}
              </p>
            </div>
          </LazyServerSection>
        </article>

        {/* Divider */}
        <LazyServerSection>
          <div className="border-t border-default my-12" />
        </LazyServerSection>

        {/* Back Link */}
        <LazyServerSection>
          <Link href="/BlogPosts" className="inline-flex items-center text-primary hover:underline">
            ← Back to all posts
          </Link>
        </LazyServerSection>
      </div>
    </div>
  );
}
