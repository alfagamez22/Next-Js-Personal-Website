'use client';

import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface BackgroundWelcomeProps {
  onComplete: () => void;
}

export default function BackgroundWelcome({ onComplete }: BackgroundWelcomeProps) {
  const [showTyping, setShowTyping] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start typing animation after a brief delay
    const timer = setTimeout(() => {
      setShowTyping(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleTypingComplete = () => {
    // Wait a moment, then fade out
    setTimeout(() => {
      setFadeOut(true);
      // After fade out animation completes, call onComplete
      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 1000);
  };

  return (
    <div
      className={`fixed inset-0 z-50 welcome-wallpaper flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      role="dialog"
      aria-label="Welcome screen"
    >
      <div className="text-center">
        {showTyping && (
          <TypeAnimation
            sequence={[
              'Welcome!',
              () => handleTypingComplete(),
            ]}
            wrapper="h1"
            speed={50}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold welcome-title text-primary"
            cursor={true}
            repeat={0}
          />
        )}
      </div>
    </div>
  );
}
