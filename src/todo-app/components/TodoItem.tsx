import type { Todo } from "../types";
import { Checkbox, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

interface Props {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}
const TodoItem = ({ todo, toggleTodo, deleteTodo }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity: todo.completed ? 0.2 : 1,
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        <Checkbox
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span style={{ marginLeft: 8 }}>
          {todo.text} — {todo.createdAt}
        </span>
      </div>

      <Button danger onClick={() => deleteTodo(todo.id)}>
        <CloseOutlined />
      </Button>
    </div>
  );
};

export default TodoItem;
