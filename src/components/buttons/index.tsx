import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  disabled = false,
  onClick,
}) => {
  return (
    <>
      <ButtonsStyle type={type} disabled={disabled} onClick={onClick}>
        {children}
      </ButtonsStyle>
    </>
  );
};

const ButtonsStyle = styled.button<ButtonProps>`
  padding: 13px 36px;
  color: white;
  border-radius: 26px;
  border: none;
  text-transform: capitalize;
  box-shadow: 5px 7px 20px rgba(0,0,0,0.5);
  border-bottom: 3px solid rgba(0,0,0,0.2);
`;

export default Button;
