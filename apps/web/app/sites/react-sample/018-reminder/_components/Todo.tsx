'use client';

import { useState } from 'react';
import InputForm from './InputForm';
import List from './List';

const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: 'book store'
    },
    {
      id: 2,
      content: 'movie'
    },
    {
      id: 3,
      content: 'shopping'
    }
  ];

  const [todos, setTodos] = useState(todoList);

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const createTodo = (todo: { id: number; content: string }) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <InputForm createTodo={createTodo} />
    </>
  );
};

export default Todo;
