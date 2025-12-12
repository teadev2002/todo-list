import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useToggle } from "./useToggle";

export function useDarkMode() {
  // Đồng bộ theme với localStorage
  const [storedTheme, setStoredTheme] = useLocalStorage<"light" | "dark">(
    "theme",
    "light"
  );

  // Toggle state (true = dark, false = light)
  const { value: isDark, toggle, on, off } = useToggle(storedTheme === "dark");

  // Khi isDark thay đổi → cập nhật localStorage
  useEffect(() => {
    setStoredTheme(isDark ? "dark" : "light");
  }, [isDark, setStoredTheme]);

  // Khi theme thay đổi → thêm class vào <html>
  useEffect(() => {
    const className = "dark";
    const html = document.documentElement;
    if (isDark) {
      html.classList.add(className);
    } else {
      html.classList.remove(className);
    }
  }, [isDark]);

  return {
    isDark,
    toggleDarkMode: toggle,
    enableDarkMode: on,
    disableDarkMode: off,
  };
}
