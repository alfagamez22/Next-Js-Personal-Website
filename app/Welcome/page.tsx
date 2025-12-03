'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BackgroundWelcome from '@/Components/background-welcome';

export default function WelcomePage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const router = useRouter();

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    // Mark that user has seen welcome screen
    sessionStorage.setItem('welcomeShown', 'true');
    // Redirect to home
    router.push('/Home');
  };

  return (
    <>
      {showWelcome && <BackgroundWelcome onComplete={handleWelcomeComplete} />}
    </>
  );
}
