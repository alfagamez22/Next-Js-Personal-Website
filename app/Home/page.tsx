import Link from 'next/link';
// import { getAllProjects } from '@/lib/slugs/projects';
// import { getAllSkills } from '@/lib/slugs/skills';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I&apos;m <span className="text-white">Dhanniel</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-400 mb-8">
            Full-Stack Developer | AI Enthusiast | Problem Solver
          </p>
          <p className="text-lg text-zinc-500 mb-12 max-w-2xl mx-auto">
            I build innovative web applications with modern technologies. 
            Passionate about creating elegant solutions to complex problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Projects"
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <Link
              href="/Contact"
              className="px-8 py-4 bg-zinc-800 text-white border-2 border-zinc-700 rounded-lg font-semibold hover:border-white transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
