import { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'default' | 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['default', 'light', 'dark'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Update CSS variables and classes based on theme
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light-theme', 'dark-theme', 'default-theme');
    
    if (theme === 'light') {
      root.classList.add('light-theme');
      // Light theme CSS custom properties
      root.style.setProperty('--bg-primary', '#f8fafc');
      root.style.setProperty('--bg-secondary', '#ffffff');
      root.style.setProperty('--text-primary', '#1e293b');
      root.style.setProperty('--text-secondary', '#64748b');
      root.style.setProperty('--accent-primary', '#0ea5e9');
      root.style.setProperty('--accent-secondary', '#10b981');
      root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.85)');
      root.style.setProperty('--glass-border', 'rgba(226, 232, 240, 0.6)');
    } else if (theme === 'dark') {
      root.classList.add('dark-theme');
      // Dark theme CSS custom properties
      root.style.setProperty('--bg-primary', '#020617');
      root.style.setProperty('--bg-secondary', '#0f172a');
      root.style.setProperty('--text-primary', '#f1f5f9');
      root.style.setProperty('--text-secondary', '#94a3b8');
      root.style.setProperty('--accent-primary', '#3b82f6');
      root.style.setProperty('--accent-secondary', '#06d6a0');
      root.style.setProperty('--glass-bg', 'rgba(2, 6, 23, 0.85)');
      root.style.setProperty('--glass-border', 'rgba(51, 65, 85, 0.6)');
    } else {
      root.classList.add('default-theme');
      // Default theme (original blue/emerald) CSS custom properties
      root.style.setProperty('--bg-primary', '#0f172a');
      root.style.setProperty('--bg-secondary', '#1e293b');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e2e8f0');
      root.style.setProperty('--accent-primary', '#3b82f6');
      root.style.setProperty('--accent-secondary', '#10b981');
      root.style.setProperty('--glass-bg', 'rgba(15, 23, 42, 0.8)');
      root.style.setProperty('--glass-border', 'rgba(16, 185, 129, 0.3)');
    }
  }, [theme]);

  const toggleTheme = () => {
    const themes: Theme[] = ['default', 'light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
