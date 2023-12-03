'use client';
import { SampleTodo } from '@libs/web/data-access-graphql';
import { Button } from '@libs/web/ui-shadcn';
import { useState } from 'react';
import { useTodos } from '../_hooks/useTodos';

const Item = ({ todo }: { todo: SampleTodo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const { updateTodo, deleteTodo } = useTodos();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeContent = (e: any) => setEditingContent(e.target.value);

  const toggleEditMode = () => {
    // console.log(todo);
    const newTodo = {
      _id: todo._id,
      content: todo.content,
      editing: !todo.editing,
      completed: todo.completed
    };
    updateTodo(newTodo);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const confirmContent = (e: any) => {
    e.preventDefault();
    // const { __typename, ...omitTodo } = todo;
    const newTodo = {
      _id: todo._id,
      content: editingContent,
      editing: !todo.editing,
      completed: todo.completed
    };
    updateTodo(newTodo);
  };

  const complete = (todo: SampleTodo) => {
    deleteTodo({ _id: todo._id });
  };

  return (
    <div key={todo._id}>
      <Button onClick={() => complete(todo)} className="mx-4">
        Done
      </Button>
      <form onSubmit={confirmContent} className="inline">
        {todo.editing ? (
          <input
            type="text"
            value={editingContent}
            onChange={changeContent}
            className="dark:text-gray-900"
          />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
