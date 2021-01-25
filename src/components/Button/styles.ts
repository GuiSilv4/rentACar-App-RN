import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  background: #dc1637;
  border-radius: 5px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-Medium';
  color: #ffffff;
  font-size: 16px;
`;
