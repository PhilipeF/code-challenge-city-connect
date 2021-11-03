import React from "react";
import ButtonStyled from "react-bootstrap/Button";

// import { Container } from './styles';

const Button: React.FC = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
