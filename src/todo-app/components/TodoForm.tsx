// import { Button, Input, message } from "antd";
// import { useState } from "react";
// const TodoForm = () => {
//   const [todo, setTodo] = useState<string>("");

//   const handleSubmit = () => {
//     if (todo === "") {
//       message.warning("Please input something");
//       return;
//     }
//     message.success(`${todo}`);
//     setTodo("");
//   };
//   return (
//     <div>
//       <Input
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//         placeholder="Input something"
//       />
//       <br />

//       <Button size="large" type="primary" onClick={handleSubmit}>
//         {" "}
//         Submit{" "}
//       </Button>
//     </div>
//   );
// };

// export default TodoForm;
import { Button, Input, message } from "antd";
import { useState } from "react";

// Define the expected props for TodoForm
interface TodoFormProps {
  addTodo: (text: string) => void;
}

// Destructure the addTodo prop
const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [todo, setTodo] = useState<string>("");

  const handleSubmit = () => {
    if (todo.trim() === "") {
      // Use trim() to handle empty space input
      message.warning("Please input something");
      return;
    }

    addTodo(todo); // Call the function passed from Layout to add the todo

    message.success(`Added: ${todo}`);
    setTodo("");
  };

  return (
    <div style={{ display: "flex" }}>
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Input something"
      />
      <br />

      <Button size="large" type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default TodoForm;
