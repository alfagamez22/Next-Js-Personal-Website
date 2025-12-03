import { getSkillBySlug, getAllSkillSlugs } from '@/lib/slugs/skills';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllSkillSlugs().map((slug) => ({
    slug,
  }));
}

export default async function SkillPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/Skills"
          className="inline-flex items-center text-zinc-900 dark:text-zinc-100 hover:underline mb-8"
        >
          ← Back to Skills
        </Link>

        {/* Skill Icon Placeholder */}
        <div className="w-24 h-24 bg-zinc-800 dark:bg-zinc-200 rounded-xl mb-6 flex items-center justify-center">
          <span className="text-4xl font-bold text-white dark:text-zinc-900">{skill.title[0]}</span>
        </div>

        {/* Skill Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
          {skill.title}
        </h1>

        {/* Why Paragraph (Optional) */}
        {skill.whyParagraph ? (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              How I Use It
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {skill.whyParagraph}
            </p>
          </div>
        ) : null}

        {/* Divider */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 my-12" />

        {/* Back Link */}
        <Link
          href="/Skills"
          className="inline-flex items-center text-zinc-900 dark:text-zinc-100 hover:underline"
        >
          ← View all skills
        </Link>
      </div>
    </div>
  );
}
