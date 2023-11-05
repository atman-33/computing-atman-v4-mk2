import { useRecoilValue } from 'recoil';
import { todosState } from '../_stores/todoState';

const Todos = () => {
  const todos = useRecoilValue(todosState);

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <div key={todo._id} className="m-4">
            <h3 className="font-medium">{todo.title}</h3>
            <p>editing: {todo.editing}</p>
            <p>completed: {todo.completed}</p>
          </div>
        );
      })}
    </ul>
  );
};

export default Todos;
