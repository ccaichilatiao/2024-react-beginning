import { Trash2 } from "lucide-react";
import { Todo } from "../type/todo";

interface TodoItems {
  todo: Todo;
  onCompletedChanged: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onCompletedChanged, onDelete }: TodoItems) => {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 border p-4 rounded-md bg-white hover:bg-slate-50 flex-1">
        <input
          checked={todo.completed}
          onChange={(e) => onCompletedChanged(todo.id, e.target.checked)}
          type="checkbox"
          className="scale-125"
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
      <button className="p-2" onClick={() => onDelete(todo.id)}>
        <Trash2 size={20} className="text-gray-400" />
      </button>
    </div>
  );
};

export default TodoItem;
