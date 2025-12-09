import { message, Button } from "antd";
const PracticeAFCallName = () => {
  const BB3 = ["Alice", "Bob", "Charlie"];
  return (
    <div>
      {BB3.map((name, i) => (
        <Button key={i} onClick={() => message.info(`Hello, ${name}!`)}>
          Greet {name}
        </Button>
      ))}
    </div>
  );
};

export default PracticeAFCallName;
