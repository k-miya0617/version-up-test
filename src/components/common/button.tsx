import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
