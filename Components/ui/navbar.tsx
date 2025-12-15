"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Navbar({ isCollapsed, onToggle }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNarrow, setIsNarrow] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  // Important: initialize showLabels to the server default (expanded) so the
  // server-rendered HTML matches the initial client markup and avoids
  // hydration mismatches. We'll update the state after hydration.
  const [showLabels, setShowLabels] = useState(true);
  const pathname = usePathname();

  // NOTE: we intentionally do NOT early-return here so that React Hook
  // order remains stable; we'll conditionally render later.

  const navLinks = [
    { href: '/Home', label: 'Home', icon: '/images/home.svg' },
    { href: '/AboutMe', label: 'About', icon: '/images/aboutme.svg' },
    // { href: '/Skills', label: 'Skills', icon: '/images/skills.svg' },
    { href: '/Projects', label: 'Projects', icon: '/images/projects.svg' },
    { href: '/BlogPosts', label: 'Blog', icon: '/images/blog.svg' },
    { href: '/Contact', label: 'Contact', icon: '/images/contact.svg' },
  ];

  // Use an effective collapsed state that defers to the server default
  // until we have mounted. This ensures initial client render matches the
  // server (avoids hydration mismatch) and then applies the user's stored
  // preference once hydration completes.
  const effectiveIsCollapsed = mounted ? isCollapsed : false;
  const widthClass = effectiveIsCollapsed ? 'lg:w-20' : 'lg:w-64';
  const toggleLeft = effectiveIsCollapsed ? '5rem' : '16rem';

  // Determine if we should treat the layout as the mobile (hamburger) UI.
  useEffect(() => {
    function update() {
      try {
        setIsNarrow(window.innerWidth < 1375);
      } catch {
        setIsNarrow(false);
      }
    }
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  // Avoid hydration mismatches: set mounted asynchronously to avoid synchronous
  // setState inside an effect which ESLint flags. Scheduling on the next tick
  // preserves the intended behavior without the warning.
  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  // Manage label visibility relative to sidebar width expand/collapse
  useEffect(() => {
    // Only run label show/hide updates after we have mounted on the client.
    if (!mounted) return;
    let hideT: number | undefined;
    let showT: number | undefined;
    if (!isCollapsed) {
      // Expanding: hide briefly then show after sidebar width transitions
      hideT = window.setTimeout(() => setShowLabels(false), 0);
      showT = window.setTimeout(() => setShowLabels(true), 10);
    } else {
      // Collapsing: hide labels (schedule async to avoid sync setState inside effect)
      hideT = window.setTimeout(() => setShowLabels(false), 0);
    }
    return () => {
      if (hideT) window.clearTimeout(hideT);
      if (showT) window.clearTimeout(showT);
    };
  }, [isCollapsed, mounted]);

  // Hide the navbar on welcome or root pages: do this after the hooks so
  // hook order is preserved across renders
  if (pathname === '/Welcome' || pathname === '/') return null;

  return (
    <>
      {/* Desktop Toggle */}
      <button
        type="button"
        onClick={onToggle}
        className={`hidden lg:flex ${isNarrow ? 'hidden' : ''} fixed top-6 z-50 items-center justify-center w-12 h-12 rounded-full bg-card text-primary shadow-sm`}
        style={{ left: toggleLeft }}
        aria-label={effectiveIsCollapsed ? 'Show navigation menu' : 'Hide navigation menu'}
        aria-expanded={!effectiveIsCollapsed}
      >
        <Image
          src={effectiveIsCollapsed ? '/images/right-arrow.svg' : '/images/left-arrow.svg'}
          alt={effectiveIsCollapsed ? 'Show navigation icon' : 'Hide navigation icon'}
          width={40}
          height={40}
        />
      </button>

      {/* Desktop Sidebar (only show on wide viewports) */}
      {!isNarrow && (
        <nav
          className={`hidden lg:fixed lg:left-0 lg:top-0 lg:h-screen ${widthClass} lg:flex lg:flex-col lg:justify-center lg:bg-card lg:z-50 transition-all duration-300`}
          aria-hidden={effectiveIsCollapsed}
        >
          <div className="w-full px-1 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                  <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-lg transition-all duration-200 font-light tracking-widest rounded-sm hover:bg-card/80 ${
                    isActive ? 'text-primary bg-card/80' : 'text-muted hover:text-primary'
                  }`}
                  aria-label={link.label}
                >
                    <div className={`relative flex items-center gap-3 py-4 pl-12 pr-3 ${effectiveIsCollapsed ? 'overflow-hidden' : ''}`} > 
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center"
                      style={{ left: 'calc(4rem / 2 - 9px)' }}
                    >
                      {link.icon && (
                        <Image src={link.icon} alt={`${link.label} icon`} width={18} height={18} />
                      )}
                    </div>
                    
                    {/* ANIMATION LOGIC:
                      1. Expanding (showLabels true): translate-x-0 (Moves to center)
                      2. Collapsing (showLabels false): -translate-x-4 (Moves LEFT by 1rem)
                    */}
                    <span
                      aria-hidden={!showLabels}
                      className={`
                        whitespace-nowrap 
                        ${mounted ? `transition-transform transition-opacity duration-200 ${showLabels ? 'ease-out' : 'ease-in'}` : ''} 
                        ${showLabels 
                           ? 'opacity-100 translate-x-0' 
                           : 'opacity-0 -translate-x-4 pointer-events-none'
                        }
                      `}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      {link.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>
      )}

      {/* Mobile / Narrow Viewport Nav */}
      {(isNarrow) ? (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-default">
          <div className="flex justify-end items-center h-16 px-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              className="text-primary hover:text-muted transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="w-full bg-surface/90 backdrop-blur-md border-b border-default">
              <div className="flex flex-col p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-center gap-2 px-4 py-4 text-lg transition-all font-light tracking-widest text-center border border-transparent rounded-sm
                        ${pathname === link.href ? 'text-primary bg-card/80' : 'text-muted hover:text-primary hover:bg-card/50'}
                    `}
                  >
                    {link.icon && (
                      <Image src={link.icon} alt={`${link.label} icon`} width={16} height={16} />
                    )}
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      ) : (
        /* Fallback for standard mobile styles if isNarrow isn't active yet */
        <nav className="lg:hidden sticky top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-default">
           <div className="flex justify-end items-center h-16 px-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                className="text-primary hover:text-muted transition-colors p-2"
                aria-label="Toggle menu"
              >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="w-full bg-surface/90 backdrop-blur-md border-b border-default">
              <div className="flex flex-col p-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-center gap-2 px-4 py-4 text-lg transition-all font-light tracking-widest text-center border border-transparent rounded-sm
                          ${pathname === link.href ? 'text-primary bg-card/80' : 'text-muted hover:text-primary hover:bg-card/50'}
                      `}
                    >
                      {link.icon && (
                        <Image src={link.icon} alt={`${link.label} icon`} width={16} height={16} />
                      )}
                      {link.label}
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
}