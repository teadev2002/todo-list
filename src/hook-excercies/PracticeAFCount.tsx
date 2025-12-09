import { useState } from "react";

import { Button } from "antd";

const PracticeAFCount = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Button className="btn btn-primary" onClick={handleIncrease}>
        Tang
      </Button>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count - 1)}>Giam</Button>
    </div>
  );
};

export default PracticeAFCount;
