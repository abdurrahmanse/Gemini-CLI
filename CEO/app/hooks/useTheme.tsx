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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['default', 'light', 'dark'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      // Set default theme immediately on first load
      setTheme('default');
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    localStorage.setItem('theme', theme);
    
    // Apply theme function
    const applyTheme = (currentTheme: Theme) => {
      const root = document.documentElement;
      
      // Remove existing theme classes
      root.classList.remove('light-theme', 'dark-theme', 'default-theme');
      
      if (currentTheme === 'light') {
        root.classList.add('light-theme');
        // Light theme CSS custom properties - Professional & Clean
        root.style.setProperty('--bg-primary', '#f8fafc');
        root.style.setProperty('--bg-secondary', '#ffffff');
        root.style.setProperty('--bg-primary-rgb', '248, 250, 252');
        root.style.setProperty('--text-primary', '#1e293b');
        root.style.setProperty('--text-secondary', '#475569');
        root.style.setProperty('--accent-primary', '#3b82f6');
        root.style.setProperty('--accent-secondary', '#0ea5e9');
        root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.9)');
        root.style.setProperty('--glass-border', 'rgba(148, 163, 184, 0.3)');
        root.style.setProperty('--shadow-color', 'rgba(15, 23, 42, 0.1)');
        root.style.setProperty('--gradient-from', '#ffffff');
        root.style.setProperty('--gradient-to', '#f1f5f9');
        
        // Update body background immediately
        document.body.style.backgroundColor = '#f8fafc';
        document.body.style.color = '#1e293b';
      } else if (currentTheme === 'dark') {
        root.classList.add('dark-theme');
        // Dark theme CSS custom properties - Modern Dark
        root.style.setProperty('--bg-primary', '#020617');
        root.style.setProperty('--bg-secondary', '#0f172a');
        root.style.setProperty('--bg-primary-rgb', '2, 6, 23');
        root.style.setProperty('--text-primary', '#f1f5f9');
        root.style.setProperty('--text-secondary', '#94a3b8');
        root.style.setProperty('--accent-primary', '#10b981');
        root.style.setProperty('--accent-secondary', '#60a5fa');
        root.style.setProperty('--glass-bg', 'rgba(15, 23, 42, 0.9)');
        root.style.setProperty('--glass-border', 'rgba(51, 65, 85, 0.5)');
        root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.3)');
        root.style.setProperty('--gradient-from', '#020617');
        root.style.setProperty('--gradient-to', '#0f172a');
        
        // Update body background immediately
        document.body.style.backgroundColor = '#020617';
        document.body.style.color = '#f1f5f9';
      } else {
        root.classList.add('default-theme');
        // Default theme (original blue/emerald) CSS custom properties
        root.style.setProperty('--bg-primary', '#0f172a');
        root.style.setProperty('--bg-secondary', '#1e293b');
        root.style.setProperty('--bg-primary-rgb', '15, 23, 42');
        root.style.setProperty('--text-primary', '#ffffff');
        root.style.setProperty('--text-secondary', '#e2e8f0');
        root.style.setProperty('--accent-primary', '#3b82f6');
        root.style.setProperty('--accent-secondary', '#10b981');
        root.style.setProperty('--glass-bg', 'rgba(15, 23, 42, 0.8)');
        root.style.setProperty('--glass-border', 'rgba(16, 185, 129, 0.3)');
        root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.25)');
        root.style.setProperty('--gradient-from', '#0f172a');
        root.style.setProperty('--gradient-to', '#1e293b');
        
        // Update body background immediately
        document.body.style.backgroundColor = '#0f172a';
        document.body.style.color = '#ffffff';
      }
    };
    
    applyTheme(theme);
  }, [theme, isClient]);

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
