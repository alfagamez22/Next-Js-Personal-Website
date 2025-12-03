'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/Components/ui/navbar';
import ScrollSnapRouter from '@/Components/scroll-snap-router';
import CustomScroll from '@/Components/ui/custom-scroll';

interface LayoutShellProps {
  children: ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname();
  // Start collapsed state as `false` for a stable SSR markup. Hydrate the
  // user's preference synchronously in the initial state using a lazy
  // initializer to avoid setting state inside an effect and causing
  // unnecessary cascaded renders that ESLint warns about.
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    try {
      if (typeof window !== 'undefined') {
        const stored = sessionStorage.getItem('navbarCollapsed');
        return stored === 'true';
      }
    } catch {
      // ignore
    }
    return false;
  });
  const showNavbar = pathname !== '/Welcome' && pathname !== '/';

  // We now initialize the state lazily; no need to sync on mount.

  // Persist collapsed state to sessionStorage when it changes
  useEffect(() => {
    try {
      sessionStorage.setItem('navbarCollapsed', String(isCollapsed));
    } catch {
      // ignore
    }
  }, [isCollapsed]);

  const mainPadding = showNavbar ? (isCollapsed ? 'lg:pl-20' : 'lg:pl-64') : 'lg:pl-0';

  return (
    <>
      {showNavbar && (
        <Navbar
          isCollapsed={isCollapsed}
          onToggle={() => setIsCollapsed((prev) => {
            const next = !prev;
            try { sessionStorage.setItem('navbarCollapsed', String(next)); } catch { /* ignore */ }
            return next;
          })}
        />
      )}
      <main className={`custom-scrollbar ${mainPadding} lg:pt-0 transition-all duration-300 mx-auto max-w-7xl px-4 overflow-hidden`}>
        {/* Wrap page contents in our custom scroll container which disables
            native scrollbars and handles wheel + keyboard scrolling. */}
        <div className="h-full min-h-[100vh]">
          <CustomScroll className="h-full">
            {children}
          </CustomScroll>
        </div>
      </main>
      <ScrollSnapRouter sensitivity={3} thresholdPx={50} />
    </>
  );
}
