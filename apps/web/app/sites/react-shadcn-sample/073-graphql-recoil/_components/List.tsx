'use client';

import { Button } from '@libs/web/ui-shadcn';
import { useEffect } from 'react';
import { useTodos } from '../_hooks/useTodos';

const List = () => {
  const { todos, initTodos, deleteTodo } = useTodos();

  useEffect(() => {
    initTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const complete = (id: string) => {
    // console.log('Done clicked!');
    return () => deleteTodo({ _id: id });
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id} className="m-2 flex items-center">
            <Button onClick={complete(todo._id)}>Done</Button>
            <span className="ml-2">{todo.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
