import { Button, Input, message } from "antd";
import { useState } from "react";

// Define the expected props for TodoForm
interface TodoFormProps {
  addTodo: (text: string) => void; // Function to add a todo is string type string returns void
}

// Destructure the addTodo prop
const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return message.warning("Please type something");
    addTodo(text);
    setText("");
    message.success("Todo added");
  };

  return (
    <div style={{ display: "flex" }}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Input todo"
      />
      <br />

      <Button size="large" type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default TodoForm;
