import { getProjectBySlug, getAllProjectSlugs } from '@/lib/slugs/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/Projects"
          className="inline-flex items-center text-zinc-900 dark:text-zinc-100 hover:underline mb-8"
        >
          ← Back to Projects
        </Link>

        {/* Project Image Placeholder */}
        <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-xl mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-600 opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold text-white/30">{project.title[0]}</span>
          </div>
        </div>

        {/* Project Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
          {project.title}
        </h1>

        {/* Project Description */}
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          {project.paragraph}
        </p>

        {/* Tech Stack Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
            Technologies Used
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {project.techStackUsed.map((tech) => (
              <div
                key={tech.name}
                className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors text-center"
            >
              View on GitHub
            </a>
          )}
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors text-center"
            >
              Visit Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
