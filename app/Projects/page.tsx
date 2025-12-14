'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play, ExternalLink, Github } from 'lucide-react';
import { projects as projectsData } from '@/lib/slugs/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsPage() {
  // Deterministic images for the projects to ensure they show up even if local files are missing
  const projectImages = [
    "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=3540&auto=format&fit=crop",
  ];

  // Map the real project data to the format needed for the slider
  const projects = projectsData.map((p, i) => ({
    ...p,
    // Use a high-quality Unsplash image based on index to ensure visual appeal
    // We override the local p.image because the files likely don't exist in public/images yet
    image: projectImages[i % projectImages.length],
    category: p.techStackUsed[0]?.name || 'Development',
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = React.useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = React.useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const togglePlay = React.useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isPlaying && !isHovered) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // 5 seconds per slide
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, nextSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide, togglePlay]);

  if (projects.length === 0) {
    return <div className="min-h-screen flex items-center justify-center text-primary">No projects found.</div>;
  }

  return (
    <div className="min-h-screen bg-surface text-primary flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      
      <div className="w-full max-w-6xl mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
        <div className="w-full md:w-auto">
           <h2 className="text-4xl font-bold mb-2 text-primary">My Projects</h2>
           <p className="text-muted">Recent work and experiments.</p>
        </div>
        
        {/* CONTROLS */}
        <div className="flex items-center gap-4">
          
          {isPlaying ? (
            <button 
              onClick={togglePlay}
              className="p-4 rounded-full bg-card border border-default hover:bg-accent/10 text-primary transition-all backdrop-blur-md"
              title="Pause Slideshow"
            >
              <Pause size={20} />
            </button>
          ) : (
            <>
              <button 
                onClick={prevSlide}
                className="p-4 rounded-full bg-card border border-default hover:bg-accent/10 text-primary transition-all backdrop-blur-md"
                title="Previous Project"
              >
                <ArrowLeft size={20} />
              </button>

              <button 
                onClick={togglePlay}
                className="p-4 rounded-full bg-card border border-default hover:bg-accent/10 text-primary transition-all backdrop-blur-md"
                title="Resume Slideshow"
              >
                <Play size={20} />
              </button>

              <button 
                onClick={nextSlide}
                className="p-4 rounded-full bg-card border border-default hover:bg-accent/10 text-primary transition-all backdrop-blur-md"
                title="Next Project"
              >
                <ArrowRight size={20} />
              </button>
            </>
          )}

        </div>
      </div>

      {/* CAROUSEL TRACK */}
      <div className="w-full max-w-6xl overflow-hidden relative min-h-[500px] rounded-3xl shadow-2xl">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-[500px]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.slug} className="w-full flex-shrink-0 px-0 box-border relative">
              <div 
                className="relative h-full w-full overflow-hidden group bg-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                      priority={true}
                    />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 transform transition-transform duration-500">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent uppercase bg-accent-soft rounded-full backdrop-blur-sm border border-accent/20">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-lg max-w-2xl mb-8 line-clamp-3 drop-shadow-md">
                    {project.paragraph}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Link href={`/Projects/${project.slug}`} className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-lg">
                        View Details <ArrowRight size={16} />
                    </Link>
                    
                    {project.websiteLink && (
                        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 backdrop-blur-md transition-colors border border-white/20">
                        Live Demo <ExternalLink size={16} />
                        </a>
                    )}
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-black/50 text-white rounded-full font-semibold hover:bg-black/70 backdrop-blur-md transition-colors border border-white/10">
                        <Github size={18} /> Source
                        </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === activeIndex ? 'w-12 bg-accent' : 'w-4 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
