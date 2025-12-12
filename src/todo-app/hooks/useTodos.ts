import { useLocalStorage } from "./useLocalStorage";
import type { Todo } from "../types";
import { message } from "antd";

export function useTodos() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toLocaleDateString("en-GB"),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    message.error("Todo deleted");
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
}
