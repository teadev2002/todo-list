import { useState } from "react";

import Welcome from "./Welcome";
import { Input, message, Select } from "antd";
import ButtonComponent from "../bt2/ButtonComponent";

const WelcomeUI = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  const clearForm = () => {
    if (name === "" && age === 0 && !isActive) {
      message.warning("Form is empty");
      return;
    }
    setName("");
    setAge(0);
    setIsActive(false);
    message.success("Form cleared");
  };

  const disable = () => {
    if (name === "" && age === 0 && !isActive) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="input name"
      />
      <br />
      <Input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="input age"
      />
      <br />
      <Select
        style={{ width: "100%" }}
        value={isActive}
        onChange={(value) => setIsActive(value)}
        options={[
          { label: "Active", value: true },
          { label: "Inactive", value: false },
        ]}
      />
      <br />
      {/* Show props */}
      <Welcome name={name} age={age} isActive={isActive} />
      <br />
      <ButtonComponent
        label="Clear Form"
        size="large"
        variant="success"
        disable={disable()}
        onClick={clearForm}
      />
    </div>
  );
};

export default WelcomeUI;
