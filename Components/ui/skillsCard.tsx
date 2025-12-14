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
      className="group p-6 bg-card rounded-xl border border-default hover:border-accent transition-all hover:shadow-lg"
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center">
        <span className="text-xl font-bold text-white">{icon || title[0]}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors mb-2">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-sm text-muted line-clamp-2">
          {description}
        </p>
      )}
    </Link>
  );
}
