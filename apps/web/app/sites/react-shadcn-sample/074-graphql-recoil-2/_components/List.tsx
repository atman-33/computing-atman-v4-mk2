'use client';

import { useEffect } from 'react';
import { useTodos } from '../_hooks/useTodos';
import Item from './Item';

const List = () => {
  const { todos, initTodos } = useTodos();

  useEffect(() => {
    initTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id} className="m-2 flex items-center">
            <Item todo={todo} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
