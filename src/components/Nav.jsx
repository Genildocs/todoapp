import React from 'react';
import Moon from '../assets/images/icon-moon.svg';
import Sun from '../assets/images/icon-sun.svg';

export default function Nav({ toggleTheme, theme }) {
  return (
    <nav className="flex justify-between items-center ">
      <h1 className=" text-3xl font-bold uppercase tracking-[10px]  text-white">
        Todo
      </h1>
      <button onClick={toggleTheme}>
        {
          <img
            src={theme === 'light' ? Moon : Sun}
            alt="theme icon"
            className="w-6 h-6"
          ></img>
        }
      </button>
    </nav>
  );
}
