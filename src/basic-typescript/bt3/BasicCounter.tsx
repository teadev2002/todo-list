import { useState } from "react";
import ButtonComponent from "../bt2/ButtonComponent";
import { message } from "antd";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const counterIncrease = () => {
    setCount(count + 1);
    message.success("Increase successfully!");
  };
  const counterDecrease = () => {
    if (count <= 0) {
      message.warning("Cannot below 0");
      return;
    }
    setCount(count - 1);
    message.info("Decrease successfully!");
  };
  const reset = () => {
    setCount(0);
    message.error("Reset successfully!");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <div style={{ display: "flex", gap: 10 }}>
        <ButtonComponent
          label=" + 1"
          size="large"
          variant="success"
          onClick={counterIncrease}
          disable={false}
        />
        <ButtonComponent
          label=" - 1"
          size="large"
          variant="primary"
          disable={false}
          onClick={counterDecrease}
        />
        <ButtonComponent
          label="Reset"
          size="large"
          variant="danger"
          disable={false}
          onClick={reset}
        />
      </div>
    </div>
  );
}
export default Counter;
