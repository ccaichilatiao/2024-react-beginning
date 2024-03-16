import { useEffect, useState } from "react";
import { Todo } from "../type/todo";
import { dummyData } from "../data/todos";

const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    return savedTodos.length > 0 ? savedTodos : dummyData;
  });
  const setCompletedChanged = (id: number, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };
  const addTodo = (title: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), title: title, completed: false },
    ]);
  };
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const deleteAllCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return {
    todos,
    setCompletedChanged,
    addTodo,
    deleteTodo,
    deleteAllCompleted,
  };
};

export default useTodos;
