"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';

interface CustomScrollProps {
  children: React.ReactNode;
  className?: string;
}

export default function CustomScroll({ children, className = '' }: CustomScrollProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const dragStartYRef = useRef(0);
  const thumbStartTopRef = useRef(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);

  const updateThumb = useCallback(() => {
    const content = contentRef.current;
    const viewport = viewportRef.current;
    if (!content || !viewport) return;
    const vh = viewport.clientHeight;
    const ch = content.scrollHeight;
    // If content fits or no overflow, hide thumb
    if (ch <= vh) {
      setThumbHeight(0);
      setThumbTop(0);
      return;
    }
    const ratio = vh / ch;
    const h = Math.max(20, Math.floor(vh * ratio));
    setThumbHeight(h);
    const scrollRatio = content.scrollTop / (ch - vh);
    setThumbTop(Math.max(0, Math.floor(scrollRatio * (vh - h))));
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    // update on mount asynchronously to avoid sync setState in effect
    const id = window.setTimeout(() => updateThumb(), 0);
    const onScroll = () => updateThumb();
    content.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateThumb);
    return () => {
      clearTimeout(id);
      content.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateThumb);
    };
  }, [updateThumb]);

  useEffect(() => {
    // Prevent native wheel behavior on the viewport element and implement our own
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;

    function onWheel(e: WheelEvent) {
      const delta = e.deltaY;
      const contentLocal = contentRef.current;
      if (!contentLocal) return;
      const canScrollDown = contentLocal.scrollTop + contentLocal.clientHeight < contentLocal.scrollHeight;
      const canScrollUp = contentLocal.scrollTop > 0;

      // If the content can be scrolled in the intended direction, prevent the
      // native behavior and handle it with our custom scroller.
      if ((delta > 0 && canScrollDown) || (delta < 0 && canScrollUp)) {
        e.preventDefault();
        contentLocal.scrollBy({ top: delta, behavior: 'auto' });
      } else {
        // Otherwise, let the event bubble up to allow top/bottom window-level
        // handlers such as `ScrollSnapRouter` to pick it up and navigate.
      }
    }

    // Use non-passive so we can prevent default
    viewport.addEventListener('wheel', onWheel, { passive: false });
    return () => viewport.removeEventListener('wheel', onWheel);
  }, []);

  // Keyboard support for accessibility
  useEffect(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;
    function onKey(e: KeyboardEvent) {
      const contentLocal = contentRef.current;
      if (!contentLocal) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        contentLocal.scrollBy({ top: 48, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        contentLocal.scrollBy({ top: -48, behavior: 'smooth' });
      } else if (e.key === 'PageDown') {
        e.preventDefault();
        contentLocal.scrollBy({ top: contentLocal.clientHeight, behavior: 'smooth' });
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        contentLocal.scrollBy({ top: -contentLocal.clientHeight, behavior: 'smooth' });
      } else if (e.key === 'Home') {
        e.preventDefault();
        contentLocal.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'End') {
        e.preventDefault();
        contentLocal.scrollTo({ top: contentLocal.scrollHeight, behavior: 'smooth' });
      }
    }
    viewport.addEventListener('keydown', onKey);
    return () => viewport.removeEventListener('keydown', onKey);
  }, []);

  // Thumb dragging to scroll
  useEffect(() => {
    const content = contentRef.current;
    const thumb = thumbRef.current;
    const viewport = viewportRef.current;
    if (!content || !thumb || !viewport) return;

    function onPointerDown(e: PointerEvent) {
      const thumbLocal = thumbRef.current;
      if (!thumbLocal) return;
      draggingRef.current = true;
      dragStartYRef.current = e.clientY;
      thumbStartTopRef.current = thumbTop;
      try { (e.target as Element).setPointerCapture(e.pointerId); } catch {}
    }

    function onPointerMove(e: PointerEvent) {
      if (!draggingRef.current) return;
      const contentLocal = contentRef.current;
      const thumbLocal = thumbRef.current;
      const viewportLocal = viewportRef.current;
      if (!contentLocal || !thumbLocal || !viewportLocal) return;
      const dy = e.clientY - dragStartYRef.current;
      const trackHeight = viewportLocal.clientHeight - thumbLocal.clientHeight;
      const nextTop = Math.max(0, Math.min(trackHeight, thumbStartTopRef.current + dy));
      const scrollRatio = nextTop / Math.max(1, trackHeight);
      contentLocal.scrollTop = scrollRatio * (contentLocal.scrollHeight - contentLocal.clientHeight);
    }

    function onPointerUp(e: PointerEvent) {
      draggingRef.current = false;
      try { (e.target as Element).releasePointerCapture(e.pointerId); } catch {}
    }

    thumb.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    return () => {
      thumb.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [thumbTop]);

  return (
    <div
      ref={viewportRef}
      tabIndex={0}
      className={`relative overflow-hidden h-full w-full ${className}`}
    >
      <div ref={contentRef} className="h-full w-full overflow-y-auto hide-native-scrollbar">
        {children}
      </div>

      {/* custom scrollbar track & thumb */}
      {thumbHeight > 0 && (
        <div
          className="fixed right-4 top-0 bottom-0 w-6 z-50 pointer-events-none flex items-start justify-center"
          aria-hidden="true"
        >
          {/* Slim vertical line behind the thumb (candle wick) */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-neutral-800/60 h-full pointer-events-none" />
          {/* Solid white rectangle thumb centered on the line */}
          <div
            ref={thumbRef}
            className="absolute left-1/2 w-3 bg-white shadow-lg pointer-events-auto rounded-sm"
            style={{ height: `${thumbHeight}px`, transform: `translate(-50%, ${thumbTop}px)` }}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
}
