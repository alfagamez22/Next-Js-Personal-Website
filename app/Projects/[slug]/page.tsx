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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-surface text-primary">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/Projects"
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          ← Back to Projects
        </Link>

        {/* Project Image Placeholder */}
        <div className="aspect-video bg-card rounded-xl mb-8 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(88,166,255,0.06))' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold text-white/30">{project.title[0]}</span>
          </div>
        </div>

        {/* Project Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
          {project.title}
        </h1>

        {/* Project Description */}
        <p className="text-lg text-muted mb-8 leading-relaxed">
          {project.paragraph}
        </p>

        {/* Tech Stack Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Technologies Used
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {project.techStackUsed.map((tech) => (
              <div
                key={tech.name}
                className="p-4 bg-card rounded-lg border border-default"
              >
                <h3 className="font-semibold text-primary">
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
              className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:opacity-95 transition-colors text-center"
            >
              View on GitHub
            </a>
          )}
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-card text-primary rounded-lg font-semibold border border-default hover:border-accent transition-colors text-center"
            >
              Visit Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
