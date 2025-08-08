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
  const baseClasses = "rounded-3xl border shadow-xl";
  
  const variants = {
    glass: "backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-white/[0.12]",
    gradient: "bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-emerald-400/20",
    solid: "bg-slate-800 border-slate-700"
  };
  
  const hoverEffect = hover ? "hover:shadow-2xl hover:scale-105 transition-all duration-500" : "";

  return (
    <div className={cn(
      baseClasses,
      variants[variant],
      hoverEffect,
      className
    )}>
      {children}
    </div>
  );
}
