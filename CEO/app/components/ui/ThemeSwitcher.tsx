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
        className="flex items-center justify-center w-9 h-9 rounded-xl 
                   backdrop-blur-sm border transition-all duration-300 hover:scale-110 hover:rotate-12"
        style={{
          backgroundColor: 'var(--glass-bg)',
          borderColor: 'var(--glass-border)',
          color: 'var(--text-primary)'
        }}
        title="Switch Theme"
      >
        <span className="text-sm">
          {themes.find(t => t.id === theme)?.icon || '🎨'}
        </span>
      </button>

      <div className="absolute top-full right-0 mt-2 py-1 w-32 
                      backdrop-blur-md rounded-xl border shadow-xl
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-300 z-50 transform scale-95 group-hover:scale-100"
           style={{
             backgroundColor: 'var(--glass-bg)',
             borderColor: 'var(--glass-border)',
             boxShadow: '0 8px 32px var(--shadow-color)'
           }}>
        {themes.map((themeOption) => (
          <button
            key={themeOption.id}
            onClick={() => setTheme(themeOption.id)}
            className={`w-full px-3 py-2 text-left text-xs font-medium 
                       transition-all duration-200 mx-1 my-0.5 rounded-lg
                       flex items-center gap-2 hover:scale-105
                       ${theme === themeOption.id 
                         ? 'opacity-100' 
                         : 'opacity-70 hover:opacity-100'
                       }`}
            style={{
              color: theme === themeOption.id ? 'var(--accent-primary)' : 'var(--text-primary)',
              backgroundColor: theme === themeOption.id ? 'var(--glass-bg)' : 'transparent'
            }}
            onMouseEnter={(e) => {
              if (theme !== themeOption.id) {
                e.currentTarget.style.backgroundColor = 'var(--glass-bg)';
              }
            }}
            onMouseLeave={(e) => {
              if (theme !== themeOption.id) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <span className="text-base">{themeOption.icon}</span>
            <span>{themeOption.label}</span>
            {theme === themeOption.id && (
              <span className="ml-auto" style={{ color: 'var(--accent-secondary)' }}>✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
