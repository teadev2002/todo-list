import React from "react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 24,
        maxWidth: 500,
        margin: "0 auto",
      }}
    >
      <h2 style={{ margin: "0 0 16px" }}>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
