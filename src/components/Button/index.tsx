import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  opacity: number;
}

const Button: React.FC<ButtonProps> = ({ opacity, children, ...rest }) => (
  <Container {...rest} style={{ opacity }}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
