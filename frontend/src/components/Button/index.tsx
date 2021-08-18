import React, { ButtonHTMLAttributes } from 'react';

import Container from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    primary?: boolean;
    label: string;
};

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => (
  <Container type="button" {...rest}>
    {label}
  </Container>
);

export default Button;
