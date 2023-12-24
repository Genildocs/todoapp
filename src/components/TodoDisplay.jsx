import React from "react";
import IconCross from "../assets/images/icon-cross.svg";

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
                className="flex items-center btn"
              ></button>
            </div>
            <p className={`${todo.important ? "line-through" : ""}`}>
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
