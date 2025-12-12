import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Modal from "./Modal";
import { useTodos } from "../hooks/useTodos";

const TodoPage = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div style={{ padding: 32 }}>
      <TodoForm addTodo={addTodo} />

      <Modal title="Todo List">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </Modal>
    </div>
  );
};

export default TodoPage;
