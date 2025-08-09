import { cn } from '~/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  isLoading = false,
  className,
  children,
  disabled,
  ...props 
}: ButtonProps) {
  const baseClasses = "relative font-medium transition-all duration-300 rounded-2xl font-display focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105",
    secondary: "backdrop-blur-xl bg-white/[0.08] text-white border border-white/[0.15] hover:bg-white/[0.15] hover:border-white/[0.25]",
    outline: "border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white",
    ghost: "text-white/80 hover:text-white hover:bg-white/[0.08]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
