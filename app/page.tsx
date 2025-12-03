'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if welcome has been shown in this session
    const welcomeShown = sessionStorage.getItem('welcomeShown');
    
    if (!welcomeShown) {
      // First time visit - show welcome
      router.push('/Welcome');
    } else {
      // Already seen welcome - go to home
      router.push('/Home');
    }
  }, [router]);

  return <div className="min-h-screen bg-black" />;
}
