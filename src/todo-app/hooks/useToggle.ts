import { useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  return {
    value,
    toggle: () => setValue(v => !v),
    on: () => setValue(true),
    off: () => setValue(false),
  };
}