import { Todo } from "../type/todo";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  onCompletedChanged: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
};

const TodoList = ({ todos, onCompletedChanged, onDelete }: Props) => {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });
  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChanged={onCompletedChanged}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-sm text-center text-gray-500">
          Not todo yet. add a new one above.
        </p>
      )}
    </>
  );
};

export default TodoList;
