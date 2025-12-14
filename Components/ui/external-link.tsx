'use client';

import React from 'react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function ExternalLink({ href, children, className = '', ariaLabel }: ExternalLinkProps) {
  function open() {
    window.open(href, '_blank', 'noopener,noreferrer');
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') open();
  }

  return (
    <span
      role="link"
      tabIndex={0}
      onClick={open}
      onKeyDown={onKeyDown}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </span>
  );
}
