import Link from 'next/link';

interface SkillsCardProps {
  title: string;
  slug: string;
  description?: string;
  icon?: string;
}

export default function SkillsCard({ title, slug, description, icon }: SkillsCardProps) {
  return (
    <Link
      href={`/Skills/${slug}`}
      className="group p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg"
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-xl font-bold text-white">{icon || title[0]}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {description}
        </p>
      )}
    </Link>
  );
}
