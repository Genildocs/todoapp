import React from 'react';
import IconCross from '../assets/images/icon-cross.svg';

export default function TodoDisplay({ todos }) {
  return (
    <div>
      <section className="mt-8">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center rounded-lg shadow-lg bg-white  p-3 gap-3"
          >
            <div>
              <button className="flex items-center btn"></button>
            </div>
            <p>{todo.content}</p>
            <button>
              <img src={IconCross} alt="icon cross" />
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
