import Link from 'next/link';
import { PiMicrosoftExcelLogoFill, } from 'react-icons/pi';
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPhp, SiPython, SiGit, SiGithub, SiPostgresql, SiMysql, SiCplusplus, SiDocker, } from 'react-icons/si';
import { CometCard } from "@/Components/ui/comet-card";

const techLogos = [
  { node: <SiNodedotjs className="text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiNextdotjs className="text-primary" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiPhp className="text-indigo-600" />, title: "PHP", href: "https://www.php.net" },
  { node: <SiPython className="text-yellow-500" />, title: "Python", href: "https://www.python.org" },
  { node: <SiGit className="text-orange-600" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub className="text-primary" />, title: "GitHub", href: "https://github.com" },
  { node: <SiReact className="text-cyan-400" />, title: "React", href: "https://react.dev" },
  { node: <SiPostgresql className="text-cyan-500" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMysql className="text-cyan-300" />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiDocker className="text-blue-800" />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiCplusplus className="text-blue-800" />, title: "C++", href: "https://isocpp.org" },
  { node: <PiMicrosoftExcelLogoFill className="text-green-300" />, title: "Microsoft Excel"},
];

export default function AboutMePage() {

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-surface text-primary">
      <div className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <CometCard>
            <button
              type="button"
              className="my-6 flex w-64 md:w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#0d11175d] p-2 md:p-4 mx-auto"
              aria-label="View profile"
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
                opacity: 1,
              }}
            >
              <div className="mx-2 flex-1">
                <div className="relative mt-2 aspect-[3/4] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover"
                    alt="Profile"
                    src="/images/pfp.jpg"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
              </div>
            </button>
          </CometCard>
          
          <h1 className="text-5xl font-bold text-primary mb-4 mt-8">
            Dhanniel Harvey B. Buan
          </h1>
          <p className="text-xl text-muted">
            Backend Developer | AI Engineer | Data analyst
          </p>
        </div>

        {/* Bio Section */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <p className="text-lg text-muted leading-relaxed mb-4">
            I&apos;m a software engineer specializing in backend development, with hands-on experience building scalable, efficient, and secure systems. My technical expertise spans across modern frameworks and languages, including Node.js, Next.js, TypeScript, PHP, and Python, enabling me to design and implement robust server-side applications.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-4">
           I have a strong background in database management, working extensively with PostgreSQL and MySQLite to design optimized schemas, ensure data integrity, and streamline query performance. My skill set also includes API integration, where I develop and maintain RESTful APIs and FastAPI services to connect applications seamlessly and deliver reliable functionality.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-4">
            Beyond frameworks and tools, I am deeply grounded in computer science fundamentals—from data structures and algorithms to both procedural programming and object-oriented programming with C++. This foundation allows me to approach problems analytically, write maintainable code, and deliver solutions that balance efficiency with clarity
          </p>

          <p className="text-lg text-muted leading-relaxed">
            Driven by curiosity and precision, I thrive in environments that challenge me to solve complex problems, optimize workflows, and contribute to systems that make a meaningful impact.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">
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
                    className="flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors"
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
                    className="flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors"
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
          <h2 className="text-3xl font-bold text-primary mb-8">
            Hobbies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div tabIndex={0} aria-label="Hobby: Gaming" className="p-6 bg-card rounded-xl border border-default glow-card">
              <h3 className="text-xl font-semibold text-primary mb-3">
                🖥️Gaming
              </h3>
              <p className="text-muted">
                Gaming is a hobby that fuels my creativity and strengthens my analytical mindset.”
              </p>
            </div>
            <div tabIndex={0} aria-label="Hobby: Watching Anime" className="p-6 bg-card rounded-xl border border-default glow-card">
              <h3 className="text-xl font-semibold text-primary mb-3">
                📺Watching Anime
              </h3>
              <p className="text-muted">
                Watching anime is one of my favorite pastimes—it’s relaxing and sparks my imagination.
              </p>
            </div>
            <div tabIndex={0} aria-label="Hobby: Badminton" className="p-6 bg-card rounded-xl border border-default glow-card">
              <h3 className="text-xl font-semibold text-primary mb-3">
                🏸Badminton
              </h3>
              <p className="text-muted">
                Playing badminton is one of my favorite ways to relax and bond with friends.
              </p>
            </div>
            <div tabIndex={0} aria-label="Hobby: Hiking" className="p-6 bg-card rounded-xl border border-default glow-card">
              <h3 className="text-xl font-semibold text-primary mb-3">
                🏔️Hiking
              </h3>
              <p className="text-muted">
                Ensuring applications are fast, efficient, and deliver great user experiences.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <iframe
              data-testid="embed-iframe"
              title="Spotify playlist - Hobbies"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1FbHr0AoIJGwOi?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-xl p-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-muted mb-6">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <Link
            href="/Contact"
            className="px-8 py-4 bg-card text-primary border-2 border-default rounded-lg font-semibold hover:border-accent transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
