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
    gradient: 'relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-blue-950/30'
  };

  return (
    <section 
      id={id} 
      className={cn(
        'py-32 px-6 sm:px-8',
        backgroundStyles[background],
        className
      )}
    >
      {background === 'pattern' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}
