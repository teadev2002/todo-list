import { CloseOutlined } from "@ant-design/icons";
import { useLocalStorage } from "../hooks/useLocalStorageSync"; // Assuming this path is correct
import type { Todo } from "../types";
import Modal from "./Modal";
import TodoForm from "./TodoForm";
import ListGeneric from "./TodoList";
import { Checkbox, Button, message } from "antd";
// Initial list structure for useLocalStorage
const initialTodos: Todo[] = [
  {
    id: "1",
    text: "Learn TypeScript",
    completed: true,
    createdAt: "09/12/2025",
  },
];

interface ModalProps {
  title: string;
  children: React.ReactNode;
}

const Layout = () => {
  // Use the hook to manage todos state and persistence
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", initialTodos);

  const addTodo = (newText: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: newText,
      completed: false,
      createdAt: new Date().toLocaleDateString("en-GB"),
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    message.success("Todo deleted");
  };
  const modalProps: ModalProps = {
    title: " ",
    children: (
      <ListGeneric<Todo>
        items={todos}
        renderItem={(todo) => (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              key={todo.id}
              style={{
                padding: "8px 0",
                textDecoration: todo.completed ? "line-through" : "none",
                opacity: todo.completed ? 0.6 : 1,
              }}
            >
              <div>
                <Checkbox
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  style={{ marginRight: 8 }}
                />
                {todo.text} - {todo.createdAt.toString()}
              </div>
            </div>

            <Button danger onClick={() => deleteTodo(todo.id)}>
              <CloseOutlined />
            </Button>
          </div>
        )}
      />
    ),
  };
  return (
    <div style={{ padding: 32, fontFamily: "system-ui, sans-serif" }}>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <Modal {...modalProps} />
    </div>
  );
};

export default Layout;
