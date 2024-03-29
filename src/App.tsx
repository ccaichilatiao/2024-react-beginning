import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

const App = () => {
  const {
    todos,
    addTodo,
    setCompletedChanged,
    deleteTodo,
    deleteAllCompleted,
  } = useTodos();
  return (
    <div className="py-10 h-screen space-y-5 ">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChanged={setCompletedChanged}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
    </div>
  );
};

export default App;
