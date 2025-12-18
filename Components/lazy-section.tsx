"use client";

import React from "react";

type LazySectionProps = {
  children: React.ReactNode;
  /** Optional placeholder to render before visible */
  placeholder?: React.ReactNode;
  /** IntersectionObserver rootMargin, e.g., "0px 0px -10% 0px" */
  rootMargin?: string;
  /** IntersectionObserver threshold */
  threshold?: number | number[];
  /** Optional wrapper className for the outer div */
  className?: string;
};

export function LazySection({
  children,
  placeholder,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.1,
  className,
}: LazySectionProps) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver is unavailable, render immediately
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} className={className}>
      {visible ? (
        children
      ) : (
        placeholder ?? (
          <div className="animate-pulse">
            <div className="h-6 w-1/3 bg-default rounded mb-4" />
            <div className="h-4 w-2/3 bg-default rounded mb-2" />
            <div className="h-4 w-1/2 bg-default rounded" />
          </div>
        )
      )}
    </div>
  );
}
