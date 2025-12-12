import { List } from "@mui/material";
import TodoItem from "./TodoItem";
import type { Todo } from "../types";
interface Props {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}
const TodoList = ({ todos, toggleTodo, deleteTodo }: Props) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;
