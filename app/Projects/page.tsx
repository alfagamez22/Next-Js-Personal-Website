import Link from 'next/link';
import { getAllProjects } from '@/lib/slugs/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            A collection of my work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/Projects/${project.slug}`}
              className="group bg-zinc-50 dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-white dark:hover:border-zinc-300 transition-all hover:shadow-xl"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-600 opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/30">{project.title[0]}</span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                  {project.paragraph}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStackUsed.map((tech) => (
                    <span
                      key={tech.name}
                      className="text-xs px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full font-medium"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.githubLink && (
                    <span className="text-sm text-zinc-500 dark:text-zinc-500 hover:text-white dark:hover:text-zinc-300">
                      GitHub →
                    </span>
                  )}
                  {project.websiteLink && (
                    <span className="text-sm text-zinc-500 dark:text-zinc-500 hover:text-white dark:hover:text-zinc-300">
                      Live Demo →
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
