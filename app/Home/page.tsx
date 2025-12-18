"use client";

import { useState } from 'react';
import Link from 'next/link';
import { LazyServerSection } from '@/Components/lazy-server-section';
import RotatingText from '@/Components/ui/rotating-text';

export default function HomePage() {
  // 1. Track which word is currently showing (0, 1, or 2)
  const [colorIndex, setColorIndex] = useState(0);

  // 2. Define your colors in order: Blue -> Orange -> Yellow
  // Note: 'bg-yellow-400' is usually better for text readability than 500
  const bgColors = ["bg-green-500", "bg-orange-500", "bg-yellow-400"];

  return (
    <div className="min-h-screen bg-surface text-primary selection:bg-accent selection:text-black">
      <LazyServerSection className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          
          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in leading-tight">
            Hi, I&apos;m <span className="text-accent">Dhanniel</span> a
            
            <span className="block sm:inline-block sm:ml-4 mt-2 sm:mt-0 align-bottom">
              <RotatingText
                texts={["Backend Developer", "AI Engineer", "Data Analyst"]}
                
                // 3. Use the onNext prop to update our local state
                onNext={(index) => setColorIndex(index)}

                // 4. Inject the dynamic color here
                // Added 'transition-colors duration-500' for a smooth fade effect
                mainClassName={`px-2 sm:px-2 md:px-3 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-4xl sm:text-5xl lg:text-5xl transition-colors duration-500 ${bgColors[colorIndex]}`}
                
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </span>
          </h1>

          <figure className="mb-12 max-w-2xl mx-auto">
            <blockquote className="text-lg sm:text-xl text-muted italic font-light leading-relaxed">
              &quot;For God gave us a spirit not of fear but of power and love and self-control.&quot;
            </blockquote>
            <figcaption className="text-sm text-muted/60 mt-2 uppercase tracking-widest font-semibold">
              — 2 Timothy 1:7
            </figcaption>
          </figure>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/Projects"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-black rounded-lg font-bold hover:bg-accent/90 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View My Work
            </Link>
            
            <Link
              href="/Contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white/10 rounded-lg font-semibold hover:border-accent hover:text-accent transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>

        </div>
      </LazyServerSection>
    </div>
  );
}