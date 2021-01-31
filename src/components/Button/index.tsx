import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  opacity?: number;
  onPress?(): void;
}

const Button: React.FC<ButtonProps> = ({
  opacity,
  children,
  style,
  onPress,
  ...rest
}) => (
  <Container onPress={onPress}>
    <ButtonContainer {...rest} style={[style, { opacity }]}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  </Container>
);

export default Button;
