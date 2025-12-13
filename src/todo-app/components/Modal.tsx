import React from "react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
}

const Modal = ({ title, children }: ModalProps) => {
  return (
    <div
      style={{
        padding: "16px",

        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
