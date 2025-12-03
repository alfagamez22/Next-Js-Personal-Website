import Link from 'next/link';
import { getAllSkills } from '@/lib/slugs/skills';

export default function AboutMePage() {
  const skills = getAllSkills();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-zinc-800 dark:bg-zinc-200 flex items-center justify-center">
            <span className="text-5xl font-bold text-white dark:text-zinc-900">YN</span>
          </div>
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Full-Stack Developer & Creative Problem Solver
          </p>
        </div>

        {/* Bio Section */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Hi, I&apos;m Your Name
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            I&apos;m a passionate full-stack developer with a love for creating elegant solutions to complex problems.
            With expertise in modern web technologies, I specialize in building scalable applications that deliver
            exceptional user experiences.
          </p>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            My journey in software development began several years ago, and since then, I&apos;ve had the opportunity
            to work on diverse projects ranging from e-commerce platforms to AI-powered applications. I&apos;m constantly
            learning and adapting to new technologies to stay at the forefront of web development.
          </p>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
            or sharing my knowledge through blog posts and tutorials.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <Link
                key={skill.slug}
                href={`/Skills/${skill.slug}`}
                className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-white dark:hover:border-zinc-300 transition-all text-center font-semibold text-zinc-900 dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300"
              >
                {skill.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                💻 Full-Stack Development
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Building end-to-end web applications with modern frameworks and best practices.
              </p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                🤖 AI Integration
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Implementing AI features and chatbots to enhance user experiences.
              </p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                🎨 UI/UX Design
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Creating beautiful, intuitive interfaces that users love to interact with.
              </p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                🚀 Performance Optimization
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Ensuring applications are fast, efficient, and deliver great user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-zinc-900 dark:bg-zinc-100 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white dark:text-zinc-900 mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-zinc-300 dark:text-zinc-600 mb-6">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <Link
            href="/Contact"
            className="inline-block px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-lg font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
