import { notFound } from 'next/navigation';

export default function SkillPage() {
  return notFound();
}

// import { getSkillBySlug, getAllSkillSlugs } from '@/lib/slugs/skills';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';

// export async function generateStaticParams() {
//   return getAllSkillSlugs().map((slug) => ({
//     slug,
//   }));
// }

// export default async function SkillPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const skill = getSkillBySlug(slug);

//   if (!skill) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-surface text-primary">
//       <div className="max-w-3xl mx-auto">
//         {/* Back Button */}
//         <Link
//           href="/Skills"
//           className="inline-flex items-center text-primary hover:underline mb-8"
//         >
//           ← Back to Skills
//         </Link>

//         {/* Skill Icon Placeholder */}
//         <div className="w-24 h-24 bg-card rounded-xl mb-6 flex items-center justify-center">
//           <span className="text-4xl font-bold text-primary">{skill.title[0]}</span>
//         </div>

//         {/* Skill Title */}
//         <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
//           {skill.title}
//         </h1>

//         {/* Why Paragraph (Optional) */}
//         {skill.whyParagraph ? (
//           <div className="prose prose-lg dark:prose-invert max-w-none">
//             <h2 className="text-2xl font-semibold text-primary mb-4">
//               How I Use It
//             </h2>
//             <p className="text-lg text-muted leading-relaxed">
//               {skill.whyParagraph}
//             </p>
//           </div>
//         ) : null}

//         {/* Divider */}
//         <div className="border-t border-default my-12" />

//         {/* Back Link */}
//         <Link
//           href="/Skills"
//           className="inline-flex items-center text-primary hover:underline"
//         >
//           ← View all skills
//         </Link>
//       </div>
//     </div>
//   );
// }
