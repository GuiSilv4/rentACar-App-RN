import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  position: absolute;
  top: ${20 + (Platform.OS === 'ios' ? getStatusBarHeight() : 0)}px;
  left: 20px;
`;

export const BackButton = styled.TouchableOpacity``;
