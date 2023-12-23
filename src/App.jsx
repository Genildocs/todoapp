import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Todo from './components/Todo';

export default function App() {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`${theme} pt-6 pl-6 pr-6 min-h-screen `}>
      <Nav toggleTheme={toggleTheme} theme={theme} />
      <Todo />
    </div>
  );
}
