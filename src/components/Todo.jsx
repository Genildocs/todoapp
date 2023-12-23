import React, { useEffect, useState } from 'react';
import IconCheck from '../assets/images/icon-check.svg';
import { motion } from 'framer-motion';
import TodoDisplay from './TodoDisplay';
import notesService from '../service/notesService';
import MenuMobile from './MenuMobile';

export default function Todo({ theme }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [completed, setCompleted] = useState(false);
  const themeDark = theme === 'dark' ? 'bg-slate-800 text-white ' : 'bg-white';

  const addTodo = (e) => {
    e.preventDefault();
    const newTodos = {
      content: newTodo,
      completed: false,
    };
    notesService.create(newTodos).then((returnedNote) => {
      setTodos([...todos, returnedNote]);
      setNewTodo('');
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
          <button type="submit" className="flex items-center btn"></button>
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
          <TodoDisplay
            todos={todos}
            deleteTodos={deleteTodos}
            themeDark={themeDark}
            handleCompleted={handleCompleted}
          />
        </div>
      ) : (
        <motion.h1
          className={`${themeDark} flex justify-center items-center mt-20`}
        >
          Loading all...
        </motion.h1>
      )}
      <div className={`${themeDark} todos border-none rounded-b-lg`}>
        <p>{todos.length} items left</p>
        <button>Clear Completed</button>
      </div>
      <MenuMobile themeDark={themeDark} />
    </div>
  );
}
