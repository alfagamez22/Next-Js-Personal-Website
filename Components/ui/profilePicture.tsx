interface ProfilePictureProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function ProfilePicture({ size = 'md', className = '' }: ProfilePictureProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-xl',
    md: 'w-24 h-24 text-4xl',
    lg: 'w-32 h-32 text-5xl',
    xl: 'w-48 h-48 text-7xl',
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg ${className}`}
    >
      YN
    </div>
  );
}
