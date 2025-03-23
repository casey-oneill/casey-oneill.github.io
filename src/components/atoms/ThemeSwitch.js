'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // Ensure hydration matches server rendering
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button type="button" onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
