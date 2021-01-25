import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: #f2f2fa;
  border-radius: 5px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #f2f2fa;
  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #f2f2fa;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #7a7a80;
  font-size: 15px;
  font-family: 'Inter-Regular';
  margin-left: 20px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const Line = styled.View`
  width: 2px;
  background-color: #fff;
  height: 56px;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
  margin-right: -10px;
`;
