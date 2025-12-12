'use client';

import { useState } from 'react';
import { HomePage } from '@/components/HomePage';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <HomePage darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
  );
}

