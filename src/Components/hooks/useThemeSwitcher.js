import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefer-color-scheme: dark)';
  const [mode, setMode] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem('theme');
    
    const handleChange = () => {
      if (userPref) {
        setMode(userPref);
        if (userPref === 'dark') {
          document.documentElement.classList.add('dark');
          window.localStorage.removeItem('theme');
        } else {
          window.localStorage.removeItem('theme');
          document.documentElement.classList.remove('dark');
        }
      } else {
        const prefersDarkMode = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        const check = prefersDarkMode ? 'dark' : 'light';
        setMode(check);
        window.localStorage.setItem('theme', check);
        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        
      }
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (mode === 'dark' || mode === 'light') {
      window.localStorage.setItem('theme', mode);
      if (mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [mode]);
  return [mode, setMode];
};

export default useThemeSwitcher;
