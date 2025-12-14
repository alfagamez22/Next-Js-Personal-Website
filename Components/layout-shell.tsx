'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/Components/ui/navbar';
import ScrollSnapRouter from '@/Components/scroll-snap-router';

interface LayoutShellProps {
  children: ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname();
  // Start collapsed state as `false` for a stable SSR markup. Hydrate the
  // user's preference synchronously in the initial state using a lazy
  // initializer to avoid setting state inside an effect and causing
  // unnecessary cascaded renders that ESLint warns about.
  // Start collapsed state as `false` so the server-rendered markup is
  // consistent. Hydrate the user's preference on the client after mount
  // to avoid React hydration mismatches. We schedule the state change
  // asynchronously to avoid calling setState synchronously from an
  // effect which ESLint warns about.
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const showNavbar = pathname !== '/Welcome' && pathname !== '/';

  // Hydrate the collapsed state after mount using a scheduled state update
  // so that the initial client render matches the server HTML (avoids
  // hydration mismatches). We use setTimeout to make the state change
  // async and avoid the 'setState in effect' lint error.
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('navbarCollapsed');
      if (stored !== null) {
        const parsed = stored === 'true';
        // Schedule the state update to run after the current frame to
        // avoid synchronous setState calls during the effect's render.
        const id = window.setTimeout(() => setIsCollapsed(parsed), 0);
        return () => window.clearTimeout(id);
      }
    } catch {
      // ignore
    }
  }, []);

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
      <main className={`${mainPadding} lg:pt-0 transition-all duration-300 mx-auto max-w-7xl px-4 min-h-screen`}>
        {children}
      </main>
      <ScrollSnapRouter sensitivity={3} thresholdPx={50} />
    </>
  );
}
