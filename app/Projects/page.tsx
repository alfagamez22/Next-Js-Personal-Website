'use client';

import React from 'react';
import { projects as projectsData } from '@/lib/slugs/projects';
import Link from 'next/link';
import { LazySection } from '@/Components/lazy-section';
import CardSwap, { Card } from '@/Components/ui/card-swap';
import Image from 'next/image';

export default function ProjectsPage() {

  // Map the real project data to the format needed for the slider
  const projects = projectsData.map((p) => ({
    ...p,
    category: p.techStackUsed[0]?.name || 'Development',
  }));

  if (projects.length === 0) {
    return <div className="min-h-screen flex items-center justify-center text-primary">No projects found.</div>;
  }

  return (
    <div className="min-h-screen bg-surface text-primary flex flex-col items-center justify-center p-4 md:p-8 font-sans overflow-hidden">
      
      <LazySection className="w-full max-w-6xl mb-8">
        <div className="w-full flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <h1 className="text-6xl font-bold mb-2 text-primary">MY PROJECTS</h1>
            <p className="text-muted text-primary italic mb-4">
              Explore my projects, where I have worked on various projects.
            </p>


          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full h-[70vh]">
              <CardSwap
                width="108%"
                height="80vh"
                cardDistance={50}
                verticalDistance={40}
                delay={4000}
                pauseOnHover={true}
                skewAmount={4}
                className="w-full h-full relative perspective-[900px] overflow-visible"
              >
                {projects.map((project, index) => (
                  <Card key={index} customClass="cursor-pointer group overflow-hidden shadow-2xl border-border/20 bg-card mx-auto">
                    <Link href={`/Projects/${project.slug}`} className="block w-full h-full relative">
                      <div className="absolute inset-0 bg-card">
                        {project.image ? (
                          <Image 
                            src={project.image} 
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                          />
                        ) : (
                          <div className="w-full h-full bg-card border border-white/5" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      </div>

                      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-2">
                        <span className="text-xs font-medium text-accent uppercase tracking-wider bg-accent/10 w-fit px-2 py-1 rounded-full backdrop-blur-sm">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-300 line-clamp-2">
                          {project.paragraph}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.techStackUsed.slice(0, 3).map((tech, i) => (
                            <span key={i} className="text-[10px] px-2 py-1 bg-white/10 rounded-full text-white/80 border border-white/10">
                              {tech.name}
                            </span>
                          ))}
                          {project.techStackUsed.length > 3 && (
                            <span className="text-[10px] px-2 py-1 bg-white/10 rounded-full text-white/80 border border-white/10">
                              +{project.techStackUsed.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </LazySection>
    </div>
  );
}
