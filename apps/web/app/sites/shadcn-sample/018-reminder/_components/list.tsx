import { Button } from '@libs/web/ui-shadcn';

interface Todo {
  id: number;
  content: string;
}

const List = ({ todos, deleteTodo }: { todos: Todo[]; deleteTodo: (id: number) => void }) => {
  const complete = (id: number) => {
    return () => deleteTodo(id);
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="m-2 flex items-center">
            <Button onClick={complete(todo.id)}>Done</Button>
            <span className="ml-2">{todo.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
