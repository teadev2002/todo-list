import { useState } from "react";
import ButtonComponent from "../bt2/ButtonComponent";
import { message } from "antd";

function ButtonToggle() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleClick = () => {
    if (isOn) {
      message.success("ON");
    } else {
      message.error("OFF");
    }
    setIsOn(!isOn);
  };

  return (
    <div>
      <ButtonComponent
        label={isOn ? "ON" : "OFF"}
        onClick={handleClick}
        disable={false}
        size="large"
        variant={isOn ? "success" : "danger"}
      />
    </div>
  );
}

export default ButtonToggle;
