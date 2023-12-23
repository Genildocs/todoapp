import React, { useEffect, useState } from 'react';
import IconCheck from '../assets/images/icon-check.svg';
import { motion } from 'framer-motion';
import TodoDisplay from './TodoDisplay';
import notesService from '../service/notesService';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    notesService.getAll().then((initialNotes) => {
      setTodos(initialNotes);
    });
  }, []);

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

  return (
    <div>
      <form
        onSubmit={addTodo}
        className="flex items-center rounded-lg shadow-lg bg-white mt-8 p-3 gap-3"
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
        <TodoDisplay todos={todos} />
      ) : (
        <motion.h1 className="flex justify-center items-center mt-20">
          Carregando...
        </motion.h1>
      )}
    </div>
  );
}
