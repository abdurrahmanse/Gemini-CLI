import { cn } from '~/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  highlight?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  className,
  highlight 
}: SectionHeaderProps) {
  const renderTitle = () => {
    if (!highlight) return title;
    
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          {highlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={cn("text-center mb-24", className)}>
      {subtitle && (
        <p className="text-emerald-400 font-black text-xl mb-6 tracking-wide">
          {subtitle}
        </p>
      )}
      
      <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 font-display">
        {renderTitle()}
      </h2>
      
      {description && (
        <p className="text-2xl font-bold text-white/70 max-w-4xl mx-auto">
          {description}
        </p>
      )}
      
      <div className="w-32 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mt-8"></div>
    </div>
  );
}
