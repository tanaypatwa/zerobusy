'use client';
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
    setEnabled(prefersDark);
  }, []);

  const toggle = () => {
    const next = !enabled;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setEnabled(next);
  };

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {enabled ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
