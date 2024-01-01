import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TodoDisplay from "./TodoDisplay";
import notesService from "../service/notesService";
import MenuMobile from "./MenuMobile";

export default function Todo({ theme, user }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const themeDark = theme === "dark" ? "bg-slate-800 text-white " : "bg-white";

  const addTodo = (e) => {
    e.preventDefault();
    const newTodos = {
      content: newTodo,
      important: false,
    };
    if (newTodo === "" || newTodo.length < 5) return;
    notesService.create(newTodos).then((returnedNote) => {
      setTodos([...todos, returnedNote]);
      setNewTodo("");
    });
  };

  const deleteTodos = (id) => {
    notesService.deleteTodo(id).then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  const handleCompleted = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const changedTodo = { ...todo, important: !todo.important };
    notesService.updateTodo(id, changedTodo).then(() => {
      setTodos(todos.map((t) => (t.id !== id ? t : changedTodo)));
    });
  };

  const handleActive = () => {
    notesService.getAll().then((allNotes) => {
      const active = allNotes.filter((todo) => todo.important === false);
      if (active.length !== 0) setTodos(active);
    });
  };

  const completed = () => {
    notesService.getAll().then((allNotes) => {
      const completed = allNotes.filter((todo) => todo.important === true);
      if (completed.length !== 0) setTodos(completed);
    });
  };

  const handleAll = () => {
    notesService.getAll().then((allNotes) => {
      setTodos(allNotes);
    });
  };

  const clearCompleted = () => {
    const todoIDs = todos.map((todo) => {
      return todo.id;
    });

    todoIDs.forEach((id) => {
      notesService.updateTodo(id, { important: false }).then(() => {
        const updateTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, important: false } : todo
        );
        setTodos(updateTodos);
      });
    });
  };

  useEffect(() => {
    notesService.getAll().then((initialNotes) => {
      setTodos(initialNotes);
    });
  }, []);

  return (
    <div>
      <form
        onSubmit={addTodo}
        className={`${themeDark} flex items-center rounded-lg shadow-lg  mt-8 p-3 gap-3`}
      >
        <div>
          <button
            type="submit"
            className="flex items-center btn hover:bg-gradient-to-r from-blue-400 to-purple-500"
          ></button>
        </div>
        <input
          type="text"
          value={newTodo}
          placeholder="Create a new todo..."
          onChange={(e) => setNewTodo(e.target.value)}
          className={`w-full bg-transparent  outline-none`}
        />
      </form>
      {todos.length !== 0 ? (
        <div>
          {user !== null && (
            <TodoDisplay
              todos={todos}
              deleteTodos={deleteTodos}
              themeDark={themeDark}
              handleCompleted={handleCompleted}
            />
          )}
        </div>
      ) : (
        <motion.h1
          className={`${themeDark} flex justify-center items-center rounded-md p-8 mt-20`}
        >
          Loading all...
        </motion.h1>
      )}
      {todos.length !== 0 && (
        <div className={`${themeDark} rounded-b-lg`}>
          {user !== null && (
            <div className={`${themeDark} todos border-none rounded-b-lg`}>
              <p>{todos.length} items left</p>
              <div className="hidden md:flex gap-3">
                <button onClick={handleAll} className="hover:text-bright_blue">
                  All
                </button>
                <button
                  onClick={handleActive}
                  className="hover:text-bright_blue"
                >
                  Active
                </button>
                <button onClick={completed} className="hover:text-bright_blue">
                  Completed
                </button>
              </div>
              <button
                onClick={clearCompleted}
                className="hover:text-bright_blue"
              >
                Clear Completed
              </button>
            </div>
          )}
        </div>
      )}
      {todos.length !== 0 && (
        <div>
          {user !== null && (
            <MenuMobile
              themeDark={themeDark}
              handleActive={handleActive}
              completed={completed}
              handleAll={handleAll}
            />
          )}
        </div>
      )}
    </div>
  );
}
