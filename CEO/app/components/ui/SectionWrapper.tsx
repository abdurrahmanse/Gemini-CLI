import { cn } from '~/utils';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  background?: 'default' | 'pattern' | 'gradient';
}

export function SectionWrapper({ 
  id, 
  className, 
  children, 
  background = 'default' 
}: SectionWrapperProps) {
  const backgroundStyles = {
    default: '',
    pattern: 'relative overflow-hidden',
    gradient: 'relative overflow-hidden'
  };

  return (
    <section 
      id={id} 
      className={cn(
        'py-32 px-6 sm:px-8 transition-all duration-500',
        backgroundStyles[background],
        className
      )}
      style={{
        backgroundColor: background === 'gradient' ? 'var(--bg-secondary)' : 'transparent',
        color: 'var(--text-primary)'
      }}
    >
      {background === 'pattern' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse transition-all duration-500"
               style={{
                 background: `radial-gradient(circle, var(--accent-secondary), transparent 70%)`,
                 opacity: 0.15
               }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-500"
               style={{
                 background: `radial-gradient(circle, var(--accent-primary), transparent 70%)`,
                 opacity: 0.15
               }}></div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}
