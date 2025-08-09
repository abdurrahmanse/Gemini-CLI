import { useState, useEffect, useRef, useCallback } from 'react';

// Enhanced Intersection Observer Hook with better performance
export function useIntersectionObserver(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { 
        threshold,
        rootMargin: '50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  return { isVisible, ref };
}

// Professional Staggered Animation Hook
export function useStaggeredAnimation(itemCount: number, delay: number = 100) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const startAnimation = useCallback(() => {
    // Clear any existing timeouts
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];

    // Start staggered animation
    for (let i = 0; i < itemCount; i++) {
      const timeout = setTimeout(() => {
        setVisibleItems(prev => [...prev, i]);
      }, i * delay);
      timeoutsRef.current.push(timeout);
    }
  }, [itemCount, delay]);

  const resetAnimation = useCallback(() => {
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];
    setVisibleItems([]);
  }, []);

  const isVisible = useCallback((index: number) => {
    return visibleItems.includes(index);
  }, [visibleItems]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return { 
    visibleItems, 
    startAnimation, 
    resetAnimation,
    isVisible 
  };
}

// Enhanced Typewriter Effect Hook
export function useTypewriter(
  words: string[],
  speed: number = 100,
  deleteSpeed: number = 50,
  delayBetweenWords: number = 2000
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];
    
    if (isCompleted) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== currentWord) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        if (currentText !== '') {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => {
            const nextIndex = (prev + 1) % words.length;
            if (nextIndex === 0) {
              setIsCompleted(true);
            }
            return nextIndex;
          });
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, speed, deleteSpeed, delayBetweenWords, isCompleted]);

  return { currentText, isCompleted };
}

// Professional Scroll Animation Hook
export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollY = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };

    const throttledUpdateScrollY = throttle(updateScrollY, 10);
    window.addEventListener('scroll', throttledUpdateScrollY);

    return () => window.removeEventListener('scroll', throttledUpdateScrollY);
  }, []);

  return { scrollY, scrollDirection };
}

// Professional Hover Animation Hook
export function useHoverAnimation() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [handleMouseEnter, handleMouseLeave]);

  return { isHovered, ref };
}

// Mobile Menu Hook
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [close]);

  return { isOpen, toggle, close, open };
}

// Utility function for throttling
function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Scroll state hook for navigation
export function useScrollState(threshold: number = 10) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    const throttledHandleScroll = throttle(handleScroll, 10);
    window.addEventListener('scroll', throttledHandleScroll);
    
    // Check initial state
    handleScroll();

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [threshold]);

  return isScrolled;
}

// Cycle hook for rotating through arrays
export function useCycle<T>(items: T[], interval: number = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return {
    currentIndex,
    currentItem: items[currentIndex],
    setCurrentIndex
  };
}
