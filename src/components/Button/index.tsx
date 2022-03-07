import React from "react";

import { Container } from './styles'

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode; 
  color?: 'primary' | 'secundary'; 
  disabled?: boolean; 
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  color = "primary",
  disabled,
  ...rest
}) => (
  <Container
  onClick={onClick}
  color={color}
  disabled={disabled}
  {...rest}
  >
    {children}
  </Container>
    
)

export default Button;