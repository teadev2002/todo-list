import { Input, message } from "antd";
import { useState } from "react";
import ButtonComponent from "../bt2/ButtonComponent";

function FormInputControlled() {
  const [something, setsomething] = useState<string>("");

  const handleSubmit = () => {
    if (something === "") {
      message.warning("Please input something");
      return;
    }
    message.success(` ${something}`);
    setsomething("");
  };

  return (
    <div>
      <Input
        value={something}
        onChange={(e) => setsomething(e.target.value)}
        placeholder="Input something"
      />
      <br />
      <ButtonComponent
        label="Submit"
        size="large"
        variant="success"
        disable={false}
        onClick={handleSubmit}
      />
    </div>
  );
}

export default FormInputControlled;
