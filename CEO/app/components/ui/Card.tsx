import { cn } from '~/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'glass' | 'gradient' | 'solid';
  hover?: boolean;
}

export function Card({ 
  className, 
  children, 
  variant = 'glass',
  hover = true 
}: CardProps) {
  const baseClasses = "rounded-3xl border shadow-xl transition-all duration-500";
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'glass':
        return {
          backgroundColor: 'var(--glass-bg)',
          borderColor: 'var(--glass-border)',
          backdropFilter: 'blur(20px)',
          boxShadow: `0 8px 32px var(--shadow-color)`
        };
      case 'gradient':
        return {
          background: `linear-gradient(135deg, var(--accent-secondary), var(--accent-primary))`,
          borderColor: 'var(--glass-border)',
          opacity: 0.1,
          boxShadow: `0 8px 32px var(--shadow-color)`
        };
      case 'solid':
        return {
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--glass-border)',
          boxShadow: `0 8px 32px var(--shadow-color)`
        };
      default:
        return {};
    }
  };
  
  const hoverEffect = hover ? "hover:shadow-2xl hover:scale-105" : "";

  return (
    <div 
      className={cn(baseClasses, hoverEffect, className)}
      style={getVariantStyles()}
    >
      <div style={{ color: 'var(--text-primary)' }}>
        {children}
      </div>
    </div>
  );
}
