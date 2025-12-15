import { notFound } from 'next/navigation';

export default function SkillsPage() {
  return notFound();
}

// import Link from 'next/link';
// import { getAllSkills } from '@/lib/slugs/skills';

// export default function SkillsPage() {
//   const skills = getAllSkills();

//   return (
//     <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-surface text-primary">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-primary mb-4">
//             Skills & Technologies
//           </h1>
//           <p className="text-xl text-muted">
//             Tools and technologies I work with daily
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skills.map((skill) => (
//             <Link
//               key={skill.slug}
//               href={`/Skills/${skill.slug}`}
//               className="group bg-card rounded-xl p-6 border border-default hover:border-accent transition-all hover:shadow-lg"
//             >
//               {/* Tech Icon Placeholder */}
//               <div className="w-16 h-16 bg-card rounded-lg mb-4 flex items-center justify-center">
//                 <span className="text-2xl font-bold text-primary">{skill.title[0]}</span>
//               </div>

//               <h2 className="text-2xl font-semibold text-primary group-hover:text-accent transition-colors mb-2">
//                 {skill.title}
//               </h2>
//               {skill.whyParagraph && (
//                 <p className="text-muted text-sm line-clamp-3">
//                   {skill.whyParagraph}
//                 </p>
//               )}

//               <span className="inline-block mt-4 text-primary font-medium group-hover:underline">
//                 Learn more →
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
