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
    <div className={cn('text-center mb-16', className)}>
      {subtitle && (
        <div className="inline-flex items-center space-x-2 backdrop-blur-xl rounded-full px-6 py-3 border mb-6 transition-all duration-300"
             style={{
               backgroundColor: 'var(--glass-bg)',
               borderColor: 'var(--glass-border)',
               color: 'var(--accent-secondary)'
             }}>
          <div className="w-2 h-2 rounded-full animate-pulse" 
               style={{ backgroundColor: 'var(--accent-secondary)' }}></div>
          <span className="text-sm font-semibold tracking-wider uppercase">
            {subtitle}
          </span>
        </div>
      )}
      
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}>
        {renderTitle()}
      </h2>
      
      {description && (
        <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium transition-colors duration-300"
           style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      )}
    </div>
  );
}
