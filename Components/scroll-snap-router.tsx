'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronUp, ChevronDown } from 'lucide-react';

// Ordered page routes (must match your app pages)
// const ROUTES = ['/Home', '/AboutMe', '/Skills', '/Projects', '/BlogPosts', '/Contact'];
const ROUTES = ['/Home', '/AboutMe', '/Projects', '/BlogPosts', '/Contact']; //remove skills and technologies for now

interface Props {
  sensitivity?: number; // number of scroll attempts required
  thresholdPx?: number; // px from bottom/top to consider at end
}

export default function ScrollSnapRouter({ sensitivity = 5, thresholdPx = 50 }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  
  // Logic Refs
  const downCountRef = useRef(0);
  const upCountRef = useRef(0);
  const lastWheelTsRef = useRef<number | null>(null);
  const cooldownRef = useRef(false);
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // UI State
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<'down' | 'up' | null>(null);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [targetLabel, setTargetLabel] = useState('');
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    function getNextRoute() {
      const idx = ROUTES.indexOf(pathname);
      return (idx >= 0 && idx < ROUTES.length - 1) ? ROUTES[idx + 1] : null;
    }

    function getPrevRoute() {
      const idx = ROUTES.indexOf(pathname);
      return (idx > 0) ? ROUTES[idx - 1] : null;
    }

    function show(dir: 'down' | 'up', currentCount: number) {
      setDirection(dir);
      setIsVisible(true);
      
      // Calculate percentage based on sensitivity
      // If sensitivity is 5, and count is 1 -> 20%
      const rawProgress = Math.min((currentCount / sensitivity) * 100, 100);
      setProgress(rawProgress);

      // Determine label (remove slash for cleaner UI)
      const target = dir === 'down' ? getNextRoute() : getPrevRoute();
      setTargetLabel(target ? target.replace('/', '') : 'Next');

      // Reset hide timer
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
        // Reset refs logic-side if user stopped scrolling
        downCountRef.current = 0;
        upCountRef.current = 0;
      }, 800);
    }

    function handleWheel(e: WheelEvent) {
      if (cooldownRef.current) return;

      const atTop = window.scrollY <= 5; 
      const atBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - thresholdPx);
      const deltaY = e.deltaY;
      const now = Date.now();
      const lastTs = lastWheelTsRef.current || 0;

      // Reset counters if user stopped scrolling for > 1 second
      if (now - lastTs > 1000) {
        downCountRef.current = 0;
        upCountRef.current = 0;
        setProgress(0);
      }
      lastWheelTsRef.current = now;

      // --- SCROLLING DOWN ---
      if (deltaY > 0 && atBottom) {
        const nextRoute = getNextRoute();
        if (!nextRoute) return;

        downCountRef.current += 1;
        upCountRef.current = 0;
        
        show('down', downCountRef.current);

        if (downCountRef.current >= sensitivity) {
          triggerNavigation(nextRoute);
        }
      } 
      
      // --- SCROLLING UP ---
      else if (deltaY < 0 && atTop) {
        const prevRoute = getPrevRoute();
        if (!prevRoute) return;

        upCountRef.current += 1;
        downCountRef.current = 0;
        
        show('up', upCountRef.current);

        if (upCountRef.current >= sensitivity) {
          triggerNavigation(prevRoute);
        }
      }
    }

    function triggerNavigation(route: string) {
      cooldownRef.current = true;
      setIsTriggered(true); // Triggers success animation
      setProgress(100);

      // Wait for animation to finish before pushing
      setTimeout(() => {
        router.push(route);
        
        // Cleanup after navigation
        setTimeout(() => {
          cooldownRef.current = false;
          downCountRef.current = 0;
          upCountRef.current = 0;
          setIsVisible(false);
          setIsTriggered(false);
          setProgress(0);
        }, 500);
      }, 400); // Delay for visual feedback
    }

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
    };
  }, [pathname, router, sensitivity, thresholdPx]);

  // --- RENDER ---
  
  // Calculate stroke dash for SVG circle (circumference approx 113 for r=18)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div 
      className={`
        fixed left-1/2 -translate-x-1/2 z-50 
        transition-all duration-500 ease-out pointer-events-none
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0'}
        ${direction === 'down' ? 'bottom-8 translate-y-4' : 'top-8 -translate-y-4'}
        ${!isVisible && direction === 'down' ? 'translate-y-8' : ''}
        ${!isVisible && direction === 'up' ? '-translate-y-8' : ''}
      `}
    >
      <div className={`
        relative flex items-center gap-3 px-4 py-2 
        bg-surface/90 backdrop-blur-md border border-[var(--border)] 
        rounded-full shadow-2xl text-primary font-medium
        transform transition-transform duration-300
        ${isTriggered ? 'scale-110 bg-accent text-white border-accent' : 'scale-100'}
      `}>
        
        {/* Progress Ring Wrapper */}
        <div className="relative w-10 h-10 flex items-center justify-center">
          {/* Background Ring */}
          <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 44 44">
            <circle
              cx="22" cy="22" r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-[var(--border)]"
            />
            {/* Progress Ring */}
            <circle
              cx="22" cy="22" r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className={`transition-all duration-200 ease-out ${isTriggered ? 'text-white' : 'text-accent'}`}
            />
          </svg>
          
          {/* Icon */}
          <div className={`transition-transform duration-300 ${isTriggered ? 'scale-125' : ''}`}>
            {direction === 'up' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>

        {/* Text Label */}
        <div className="flex flex-col pr-2">
          <span className={`text-[10px] uppercase tracking-wider leading-tight ${isTriggered ? 'text-white/80' : 'text-muted'}`}>
            {direction === 'up' ? 'Previous' : 'Next'}
          </span>
          <span className="text-sm leading-tight">
            {targetLabel}
          </span>
        </div>
      </div>
    </div>
  );
}