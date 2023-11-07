'use client';

import { DeleteSampleTodoInput } from '@libs/web/data-access-graphql';
import { Button } from '@libs/web/ui-shadcn';
import { useTodos } from '../_hooks/useTodos';
import todoApi from '../api/todo';

const List = () => {
  const { todos } = useTodos();
  const complete = (id: string) => {
    return () => todoApi.deleteTodo(id as unknown as DeleteSampleTodoInput);
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id} className="m-2 flex items-center">
            <Button onClick={complete(todo._id)}>Done</Button>
            <span className="ml-2">{todo.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
