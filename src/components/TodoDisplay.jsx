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
    <div>
      <section className={`mt-8`}>
        {todos.map((todo) => (
          <div key={todo.id} className={`${themeDark} todos`}>
            <div>
              <button
                onClick={() => handleCompleted(todo.id)}
                className={`${
                  todo.important
                    ? 'bg-gradient-to-r from-blue-400 to-purple-500'
                    : ''
                } flex items-center justify-center btn `}
              >
                <img
                  src={IconCheck}
                  alt="icon check"
                  className={`${todo.important ? 'block' : 'hidden'}`}
                />
              </button>
            </div>
            <p
              className={`${
                todo.important ? 'line-through text-gray-500' : ''
              }`}
            >
              {todo.content}
            </p>
            <button onClick={() => deleteTodos(todo.id)}>
              <img src={IconCross} alt="icon cross" />
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
