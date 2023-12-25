import React from 'react';

export default function MenuMobile({
  themeDark,
  hadleActive,
  hadleCompleted,
  handleAll,
}) {
  return (
    <div
      className={`${themeDark} md:hidden  flex justify-around items-center rounded-lg shadow-lg  mt-8 p-3 gap-3`}
    >
      <button onClick={handleAll} className="hover:text-bright_blue">
        All
      </button>
      <button onClick={hadleActive} className="hover:text-bright_blue">
        Active
      </button>
      <button onClick={hadleCompleted} className="hover:text-bright_blue">
        Completed
      </button>
    </div>
  );
}
