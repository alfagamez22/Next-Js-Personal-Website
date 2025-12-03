import Link from 'next/link';
import { getAllSkills } from '@/lib/slugs/skills';

export default function SkillsPage() {
  const skills = getAllSkills();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Skills & Technologies
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Tools and technologies I work with daily
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Link
              key={skill.slug}
              href={`/Skills/${skill.slug}`}
              className="group bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:border-white dark:hover:border-zinc-300 transition-all hover:shadow-lg"
            >
              {/* Tech Icon Placeholder */}
              <div className="w-16 h-16 bg-zinc-800 dark:bg-zinc-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white dark:text-zinc-900">{skill.title[0]}</span>
              </div>

              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors mb-2">
                {skill.title}
              </h2>

              {skill.whyParagraph && (
                <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3">
                  {skill.whyParagraph}
                </p>
              )}

              <span className="inline-block mt-4 text-zinc-900 dark:text-zinc-100 font-medium group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
