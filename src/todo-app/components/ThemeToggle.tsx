import { Button } from "antd";
import { useDarkMode } from "../hooks/useDarkMode";

export default function DarkModeButton() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <Button onClick={toggleDarkMode}>
      {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </Button>
  );
}
