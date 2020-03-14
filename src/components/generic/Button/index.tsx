import React from 'react';

type ButtonTypes = "default" | "primary" | "ghost" | "danger";

interface IButtonProps {
  type: ButtonTypes;
  htmlType: "button" | "submit";
  disabled: boolean;
  children: React.ReactNode;
}

const Button: React.FC = (props: Partial<IButtonProps>) => {
  const { children, type = "default", htmlType = "button" } = props;
  return (
    <button type={htmlType} className={`btn btn--${type}`}>
      {children}
    </button>
  );
};

export default Button;
