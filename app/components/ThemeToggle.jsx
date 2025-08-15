'use client';

import { assets } from '@/assets/assets';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
 


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
   const isDark = theme === 'dark';

  return (
    <button onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      <Image
        src={isDark ? assets.sun_icon : assets.moon_icon}
        alt={isDark ? 'sun' : 'moon'}
        className="w-6"
      />
    </button>
    
  );
}
