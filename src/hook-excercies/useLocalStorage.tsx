import { useState, useEffect } from "react";
const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? saved : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
