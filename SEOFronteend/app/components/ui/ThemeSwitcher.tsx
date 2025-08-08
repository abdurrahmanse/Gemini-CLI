import React from 'react';
import { useTheme } from '~/hooks';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'default', label: 'Default', icon: '🎨' },
    { id: 'light', label: 'Light', icon: '☀️' },
    { id: 'dark', label: 'Dark', icon: '🌙' },
  ] as const;

  return (
    <div className="relative group">
      <button
        className="flex items-center justify-center w-10 h-10 rounded-xl 
                   bg-white/10 backdrop-blur-sm border border-white/20 
                   hover:bg-white/20 transition-all duration-300 
                   text-white hover:scale-105"
        title="Switch Theme"
      >
        <span className="text-lg">
          {themes.find(t => t.id === theme)?.icon || '🎨'}
        </span>
      </button>

      <div className="absolute top-full right-0 mt-2 py-2 w-36 
                      bg-white/10 backdrop-blur-md rounded-xl border border-white/20 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-300 z-50">
        {themes.map((themeOption) => (
          <button
            key={themeOption.id}
            onClick={() => setTheme(themeOption.id)}
            className={`w-full px-4 py-2 text-left text-sm font-medium 
                       hover:bg-white/20 transition-colors duration-200 
                       flex items-center gap-3
                       ${theme === themeOption.id 
                         ? 'text-blue-300 bg-white/10' 
                         : 'text-white hover:text-blue-200'
                       }`}
          >
            <span className="text-base">{themeOption.icon}</span>
            <span>{themeOption.label}</span>
            {theme === themeOption.id && (
              <span className="ml-auto text-blue-300">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
