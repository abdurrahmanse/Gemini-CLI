import { useState } from 'react';

// Re-export all animation hooks
export * from './animations';

// Re-export theme hook
export { useTheme } from './useTheme';

// Smooth scroll hook
export function useSmoothScroll() {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { scrollTo };
}
