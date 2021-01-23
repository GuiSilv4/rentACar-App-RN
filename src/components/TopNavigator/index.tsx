import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';

import { Container, BackButton } from './styles';

interface TopNavigatorProps extends RectButtonProperties {
  onPress?(): void;
}

const TopNavigator: React.FC<TopNavigatorProps> = ({ onPress }) => {
  return (
    <Container>
      <BackButton onPress={onPress}>
        <Icon name="chevron-left" size={25} color="#AEAEB3" />
      </BackButton>
    </Container>
  );
};

export default TopNavigator;
