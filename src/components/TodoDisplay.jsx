import React from 'react';
import IconCross from '../assets/images/icon-cross.svg';
import IconCheck from '../assets/images/icon-check.svg';

export default function TodoDisplay({
  todos,
  deleteTodos,
  themeDark,
  handleCompleted,
}) {
  return (
    <div className="mt-8">
      {todos.map((todo) => (
        <section
          key={todo.id}
          onClick={() => handleCompleted(todo.id)}
          className={`${themeDark} cursor-pointer todos hover:bg-gradient-to-r from-blue-400 to-purple-500`}
        >
          <div>
            <button
              onClick={() => handleCompleted(todo.id)}
              className={`${
                todo.important
                  ? 'bg-gradient-to-r from-blue-400 to-purple-500'
                  : ''
              } flex items-center justify-center btn hover:bg-gradient-to-r from-blue-400 to-purple-500 `}
            >
              <img
                src={IconCheck}
                alt="icon check"
                className={`${todo.important ? 'block' : 'hidden'}`}
              />
            </button>
          </div>
          <p
            className={`${todo.important ? 'line-through text-gray-500' : ''}`}
          >
            {todo.content}
          </p>
          <button onClick={() => deleteTodos(todo.id)}>
            <img src={IconCross} alt="icon cross" />
          </button>
        </section>
      ))}
    </div>
  );
}
