import React from "react";

// Server-safe wrapper applying CSS-based lazy rendering.
// Uses `content-visibility: auto` to defer offscreen rendering cost.
// Add `.content-auto` class in globals.css.

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function LazyServerSection({ children, className }: Props) {
  return <div className={className ? `content-auto ${className}` : "content-auto"}>{children}</div>;
}
