import { useState } from "react";

const useToggle = (init: boolean = false) => {
  const [value, setValue] = useState(init);

  return {
    value,
    toggle: () => setValue((v) => !v),
    on: () => setValue(true),
    off: () => setValue(false),
  };
};

export default useToggle;
