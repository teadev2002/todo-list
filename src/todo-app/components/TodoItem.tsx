import type { Todo } from "../types";
import { Card } from "antd";
interface TodoCardProps {
  // Props interface
  todo: Todo; // Single todo item of type Todo
}
const TodoCard = ({ todo }: TodoCardProps) => {
  // Functional component taking TodoCardProps as props
  return (
    <div>
      <Card>
        <h3>Id: {todo.id}</h3>
        <h3>Text: {todo.text}</h3>
        <h3>Create At: {todo.createdAt}</h3>
        <h3>{todo.completed ? "Done" : "Not Yet"}</h3>
      </Card>
    </div>
  );
};

export default TodoCard;
