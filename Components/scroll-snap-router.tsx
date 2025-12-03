'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

// Ordered page routes (must match your app pages)
const ROUTES = ['/Home', '/AboutMe', '/Skills', '/Projects', '/BlogPosts', '/Contact'];

interface Props {
  sensitivity?: number; // number of scroll attempts required
  thresholdPx?: number; // px from bottom/top to consider at end
}

export default function ScrollSnapRouter({ sensitivity = 3, thresholdPx = 50 }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const downCountRef = useRef(0);
  const upCountRef = useRef(0);
  const lastWheelTsRef = useRef<number | null>(null);
  const [showIndicator, setShowIndicator] = useState(false);
  const [indicatorDirection, setIndicatorDirection] = useState<'down' | 'up' | null>(null);
  const cooldownRef = useRef(false);
  const showTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    function canSnapDown() {
      const idx = ROUTES.indexOf(pathname);
      return idx >= 0 && idx < ROUTES.length - 1;
    }
    function canSnapUp() {
      const idx = ROUTES.indexOf(pathname);
      return idx > 0;
    }

    function goToNext() {
      const idx = ROUTES.indexOf(pathname);
      if (idx >= 0 && idx < ROUTES.length - 1) {
        const next = ROUTES[idx + 1];
        router.push(next);
      }
    }

    function goToPrev() {
      const idx = ROUTES.indexOf(pathname);
      if (idx > 0) {
        const prev = ROUTES[idx - 1];
        router.push(prev);
      }
    }

    function show(dir: 'down' | 'up') {
      setIndicatorDirection(dir);
      setShowIndicator(true);
      // hide after a moment if not triggered
      if (showTimeoutRef.current) window.clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = window.setTimeout(() => {
        setShowIndicator(false);
        showTimeoutRef.current = null;
      }, 900);
    }

    // Handle boundary events from CustomScroll component
    function handleBoundary(e: Event) {
      if (cooldownRef.current) return;
      const detail = (e as CustomEvent).detail;
      if (!detail) return;
      
      const { atTop, atBottom, deltaY } = detail;
      const now = Date.now();
      const lastTs = lastWheelTsRef.current || 0;
      // reset counters if long time passed
      if (now - lastTs > 1000) {
        downCountRef.current = 0;
        upCountRef.current = 0;
      }
      lastWheelTsRef.current = now;

      if (deltaY > 0 && atBottom) {
        // scrolling down at bottom
        if (!canSnapDown()) return;
        downCountRef.current += 1;
        upCountRef.current = 0;
        show('down');
        if (downCountRef.current >= sensitivity) {
          cooldownRef.current = true;
          setShowIndicator(true);
          setTimeout(() => {
            goToNext();
            cooldownRef.current = false;
            downCountRef.current = 0;
            setShowIndicator(false);
          }, 300);
        }
      } else if (deltaY < 0 && atTop) {
        // scrolling up at top
        if (!canSnapUp()) return;
        upCountRef.current += 1;
        downCountRef.current = 0;
        show('up');
        if (upCountRef.current >= sensitivity) {
          cooldownRef.current = true;
          setShowIndicator(true);
          setTimeout(() => {
            goToPrev();
            cooldownRef.current = false;
            upCountRef.current = 0;
            setShowIndicator(false);
          }, 300);
        }
      }
    }

    window.addEventListener('customscroll-boundary', handleBoundary);
    return () => {
      window.removeEventListener('customscroll-boundary', handleBoundary);
      if (showTimeoutRef.current) window.clearTimeout(showTimeoutRef.current);
    };
  }, [pathname, router, sensitivity, thresholdPx]);

  if (!showIndicator || !indicatorDirection) return null;

  // Minimal arrow-only UI; up -> top center with double-up arrow, down -> bottom center with double-down arrow
  if (indicatorDirection === 'down') {
    return (
      <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50 pointer-events-none animate-pulse">
        <Image src="/images/double-down-arrow.svg" width={36} height={36} alt="scroll down indicator" />
      </div>
    );
  }

  return (
    <div className="fixed left-1/2 -translate-x-1/2 top-8 z-50 pointer-events-none animate-pulse">
      <Image src="/images/double-up-arrow.svg" width={36} height={36} alt="scroll up indicator" />
    </div>
  );
}
