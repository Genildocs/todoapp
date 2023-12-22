import React from "react";
import Moon from "../assets/images/icon-moon.svg";
import Sun from "../assets/images/icon-sun.svg";

export default function Nav() {
  const toggleTheme = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
  };

  return (
    <nav className="flex justify-between items-center ">
      <h1 className=" text-3xl font-bold uppercase tracking-[10px] dark:text-black text-white">
        Todo
      </h1>
      <button onClick={toggleTheme}>
        <img src={Moon} alt="Moon" />
      </button>
    </nav>
  );
}
