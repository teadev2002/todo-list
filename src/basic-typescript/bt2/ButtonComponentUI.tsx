import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { Input, Select, Switch, message } from "antd";

const ButtonComponentUI = () => {
  const [label, setLabel] = useState<string>("click me");
  const [disable, setDisable] = useState<boolean>(false);
  const [variant, setVariant] = useState<"primary" | "secondary">("primary");

  return (
    <div style={{ width: 300 }}>
      {/* Label input */}
      <Input
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Button label"
      />{" "}
      <br />
      <br />
      {/* Disable switch */}
      <div>
        Disable: <Switch checked={disable} onChange={(v) => setDisable(v)} />
      </div>
      <br />
      {/* Variant select */}
      <Select
        style={{ width: "100%" }}
        value={variant}
        onChange={(value) => setVariant(value)}
        options={[
          { label: "Primary", value: "primary" },
          { label: "Secondary", value: "secondary" },
        ]}
      />
      <br />
      <br />
      {/* Button Component */}
      <ButtonComponent
        label={label}
        disable={disable}
        variant={variant}
        onClick={() => message.info("Button clicked!")}
      />
    </div>
  );
};

export default ButtonComponentUI;
