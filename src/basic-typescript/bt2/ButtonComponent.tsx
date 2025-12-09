interface ButtonProps {
  label: string;
  onClick: () => void;
  disable: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  size?: "small" | "middle" | "large";
}

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "antd";
function ButtonComponent({
  label,
  onClick,
  disable = false,
  variant = "success",
  size = "middle",
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disable}
      className={`btn btn-outline-${variant}`}
      size={size}
    >
      {label}
    </Button>
  );
}

export default ButtonComponent;
