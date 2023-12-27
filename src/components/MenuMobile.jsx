import React from 'react';

export default function MenuMobile({
  themeDark,
  handleActive,
  completed,
  handleAll,
}) {
  return (
    <div
      className={`${themeDark} md:hidden  flex justify-around items-center rounded-lg shadow-lg  mt-8 p-3 gap-3`}
    >
      <button onClick={handleAll} className="hover:text-bright_blue">
        All
      </button>
      <button onClick={handleActive} className="hover:text-bright_blue">
        Active
      </button>
      <button onClick={completed} className="hover:text-bright_blue">
        Completed
      </button>
    </div>
  );
}
