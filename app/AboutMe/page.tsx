import Link from 'next/link';
import { PiMicrosoftExcelLogoFill, } from 'react-icons/pi';
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPhp, SiPython, SiGit, SiGithub, SiPostgresql, SiMysql, SiCplusplus, } from 'react-icons/si';

const techLogos = [
  { node: <SiNodedotjs className="text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiPhp className="text-indigo-600" />, title: "PHP", href: "https://www.php.net" },
  { node: <SiPython className="text-yellow-500" />, title: "Python", href: "https://www.python.org" },
  { node: <SiGit className="text-orange-600" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub className="text-black dark:text-white" />, title: "GitHub", href: "https://github.com" },
  { node: <SiReact className="text-cyan-400" />, title: "React", href: "https://react.dev" },
  { node: <SiPostgresql className="text-cyan-500" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMysql className="text-cyan-300" />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiCplusplus className="text-blue-800" />, title: "C++", href: "https://isocpp.org" },
  { node: <PiMicrosoftExcelLogoFill className="text-green-300" />, title: "Microsoft Excel"},
];

export default function AboutMePage() {

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-zinc-800 dark:bg-zinc-200 flex items-center justify-center">
            <span className="text-5xl font-bold text-white dark:text-zinc-900">YN</span>
          </div>
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Dhanniel Harvey B. Buan
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Backend Developer | AI Engineer | Data analyst
          </p>
        </div>

        {/* Bio Section */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            I&apos;m a software engineer specializing in backend development, with hands-on experience building scalable, efficient, and secure systems. My technical expertise spans across modern frameworks and languages, including Node.js, Next.js, TypeScript, PHP, and Python, enabling me to design and implement robust server-side applications.
          </p>

          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
           I have a strong background in database management, working extensively with PostgreSQL and MySQLite to design optimized schemas, ensure data integrity, and streamline query performance. My skill set also includes API integration, where I develop and maintain RESTful APIs and FastAPI services to connect applications seamlessly and deliver reliable functionality.
          </p>

          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            Beyond frameworks and tools, I am deeply grounded in computer science fundamentals—from data structures and algorithms to both procedural programming and object-oriented programming with C++. This foundation allows me to approach problems analytically, write maintainable code, and deliver solutions that balance efficiency with clarity
          </p>

          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Driven by curiosity and precision, I thrive in environments that challenge me to solve complex problems, optimize workflows, and contribute to systems that make a meaningful impact.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            Technical Skills
          </h2>
          <div className="relative w-full overflow-hidden mask-gradient group">
            <div className="flex animate-scroll w-max gap-8 md:gap-16 py-4">
              {/* Set 1 */}
              <div className="flex items-center gap-8 md:gap-16 shrink-0">
                {techLogos.map((logo, index) => (
                  <a
                    key={`set1-${index}`}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    title={logo.title}
                  >
                    <div className="text-5xl md:text-6xl">
                      {logo.node}
                    </div>
                  </a>
                ))}
              </div>
              {/* Set 2 */}
              <div className="flex items-center gap-8 md:gap-16 shrink-0">
                {techLogos.map((logo, index) => (
                  <a
                    key={`set2-${index}`}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    title={logo.title}
                  >
                    <div className="text-5xl md:text-6xl">
                      {logo.node}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            Hobbies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div tabIndex={0} aria-label="Hobby: Gaming" className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 glow-card">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                🖥️Gaming
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Gaming is a hobby that fuels my creativity and strengthens my analytical mindset.”
              </p>
            </div>
            <div tabIndex={0} aria-label="Hobby: Watching Anime" className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 glow-card">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                📺Watching Anime
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Watching anime is one of my favorite pastimes—it’s relaxing and sparks my imagination.
              </p>
            </div>
            <div tabIndex={0} aria-label="Hobby: Badminton" className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 glow-card">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                🏸Badminton
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Playing badminton is one of my favorite ways to relax and bond with friends.
              </p>
            </div>
            <div tabIndex={0} aria-label="Hobby: Hiking" className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 glow-card">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                🏔️Hiking
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
